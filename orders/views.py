from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect

from marketplace.models import Product
from .models import OrderRequest
from .forms import OrderRequestForm


@login_required
def request_to_buy(request, product_id):
    product = get_object_or_404(Product, id=product_id)

    # Prevent seller from requesting their own product
    if product.seller == request.user:
        messages.warning(request, 'You cannot request your own product.')
        return redirect('marketplace:product_detail', product_id=product.id)

    if request.method == 'POST':
        form = OrderRequestForm(request.POST)

        if form.is_valid():
            order_request = form.save(commit=False)
            order_request.product = product
            order_request.buyer = request.user
            order_request.seller = product.seller
            order_request.shop = product.shop
            order_request.save()

            messages.success(request, 'Your request was sent to the seller.')
            return redirect('orders:my_requests')
    else:
        form = OrderRequestForm()

    return render(request, 'orders/request_to_buy.html', {
        'form': form,
        'product': product,
    })


@login_required
def my_requests(request):
    requests = OrderRequest.objects.filter(
        buyer=request.user
    ).order_by('-created_at')

    return render(request, 'orders/my_requests.html', {
        'requests': requests,
    })


@login_required
def seller_requests(request):
    requests = OrderRequest.objects.filter(
        seller=request.user
    ).order_by('-created_at')

    return render(request, 'orders/seller_requests.html', {
        'requests': requests,
    })


@login_required
def update_request_status(request, request_id, status):
    order_request = get_object_or_404(
        OrderRequest,
        id=request_id,
        seller=request.user
    )

    allowed_statuses = ['pending', 'accepted', 'rejected', 'completed']

    if status in allowed_statuses:
        order_request.status = status
        order_request.save()
        messages.success(request, f'Request marked as {status}.')
    else:
        messages.error(request, 'Invalid request status.')

    return redirect('orders:seller_requests')
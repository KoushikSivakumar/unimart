from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from .models import Product, Shop
from .forms import ShopForm, ProductForm


def product_list(request):
    products = Product.objects.filter(stock_status='available').order_by('-created_at')

    search_query = request.GET.get('q')
    category = request.GET.get('category')

    if search_query:
        products = products.filter(name__icontains=search_query)

    if category:
        products = products.filter(category=category)

    context = {
        'products': products,
        'search_query': search_query,
        'selected_category': category,
        'categories': Product.CATEGORY_CHOICES,
    }

    return render(request, 'marketplace/product_list.html', context)


def product_detail(request, product_id):
    product = get_object_or_404(Product, id=product_id)

    context = {
        'product': product,
    }

    return render(request, 'marketplace/product_detail.html', context)


@login_required
def seller_dashboard(request):
    shop = getattr(request.user, 'shop', None)

    if shop:
        products = Product.objects.filter(shop=shop).order_by('-created_at')
    else:
        products = []

    context = {
        'shop': shop,
        'products': products,
    }

    return render(request, 'marketplace/seller_dashboard.html', context)


@login_required
def create_shop(request):
    if hasattr(request.user, 'shop'):
        return redirect('marketplace:seller_dashboard')

    if request.method == 'POST':
        form = ShopForm(request.POST, request.FILES)

        if form.is_valid():
            shop = form.save(commit=False)
            shop.owner = request.user
            shop.save()

            request.user.role = 'seller'
            request.user.save()

            return redirect('marketplace:seller_dashboard')
    else:
        form = ShopForm()

    return render(request, 'marketplace/shop_form.html', {
        'form': form,
        'title': 'Create your shop'
    })


@login_required
def edit_shop(request):
    shop = get_object_or_404(Shop, owner=request.user)

    if request.method == 'POST':
        form = ShopForm(request.POST, request.FILES, instance=shop)

        if form.is_valid():
            form.save()
            return redirect('marketplace:seller_dashboard')
    else:
        form = ShopForm(instance=shop)

    return render(request, 'marketplace/shop_form.html', {
        'form': form,
        'title': 'Edit your shop'
    })


@login_required
def add_product(request):
    shop = get_object_or_404(Shop, owner=request.user)

    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)

        if form.is_valid():
            product = form.save(commit=False)
            product.shop = shop
            product.seller = request.user
            product.save()

            return redirect('marketplace:seller_dashboard')
    else:
        form = ProductForm()

    return render(request, 'marketplace/product_form.html', {
        'form': form,
        'title': 'Add product'
    })


@login_required
def edit_product(request, product_id):
    product = get_object_or_404(Product, id=product_id, seller=request.user)

    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES, instance=product)

        if form.is_valid():
            form.save()
            return redirect('marketplace:seller_dashboard')
    else:
        form = ProductForm(instance=product)

    return render(request, 'marketplace/product_form.html', {
        'form': form,
        'title': 'Edit product'
    })


@login_required
def delete_product(request, product_id):
    product = get_object_or_404(Product, id=product_id, seller=request.user)

    if request.method == 'POST':
        product.delete()
        return redirect('marketplace:seller_dashboard')

    return render(request, 'marketplace/delete_product.html', {
        'product': product
    })
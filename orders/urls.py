from django.urls import path
from . import views

app_name = 'orders'

urlpatterns = [
    path('request/<int:product_id>/', views.request_to_buy, name='request_to_buy'),
    path('my-requests/', views.my_requests, name='my_requests'),
    path('seller-requests/', views.seller_requests, name='seller_requests'),
    path(
        'seller-requests/<int:request_id>/<str:status>/',
        views.update_request_status,
        name='update_request_status'
    ),
]
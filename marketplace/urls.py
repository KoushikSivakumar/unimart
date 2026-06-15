from django.urls import path
from . import views

app_name = 'marketplace'

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('products/<int:product_id>/', views.product_detail, name='product_detail'),

    path('seller/dashboard/', views.seller_dashboard, name='seller_dashboard'),
    path('seller/shop/create/', views.create_shop, name='create_shop'),
    path('seller/shop/edit/', views.edit_shop, name='edit_shop'),

    path('seller/products/add/', views.add_product, name='add_product'),
    path('seller/products/<int:product_id>/edit/', views.edit_product, name='edit_product'),
    path('seller/products/<int:product_id>/delete/', views.delete_product, name='delete_product'),
]
from django.db import models
from django.conf import settings


class Shop(models.Model):
    owner = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='shop'
    )
    shop_name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    instagram_link = models.URLField(blank=True)
    whatsapp_number = models.CharField(max_length=15, blank=True)
    logo_image = models.ImageField(upload_to='shop_logos/', blank=True, null=True)
    category = models.CharField(max_length=100, blank=True)
    college_name = models.CharField(max_length=100, blank=True)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.shop_name


class Product(models.Model):
    CATEGORY_CHOICES = (
        ('food', 'Food'),
        ('clothing', 'Clothing'),
        ('stationery', 'Stationery'),
        ('electronics', 'Electronics'),
        ('art', 'Art'),
        ('services', 'Services'),
        ('others', 'Others'),
    )

    STOCK_CHOICES = (
        ('available', 'Available'),
        ('out_of_stock', 'Out of Stock'),
    )

    shop = models.ForeignKey(
        Shop,
        on_delete=models.CASCADE,
        related_name='products'
    )
    seller = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='products'
    )
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='others')
    stock_status = models.CharField(max_length=20, choices=STOCK_CHOICES, default='available')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
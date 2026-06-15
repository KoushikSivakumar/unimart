from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = (
        ('buyer', 'Buyer'),
        ('seller', 'Seller'),
        ('both', 'Both'),
    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='buyer')
    college_name = models.CharField(max_length=100, blank=True)
    department = models.CharField(max_length=100, blank=True)
    year = models.CharField(max_length=20, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.username
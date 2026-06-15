from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User


class SignupForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password1',
            'password2',
            'college_name',
            'department',
            'year',
            'phone_number',
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        placeholders = {
            'username': 'Choose a username',
            'email': 'Enter your email',
            'password1': 'Create a password',
            'password2': 'Confirm your password',
            'college_name': 'Example: Sathyabama University',
            'department': 'Example: CSE',
            'year': 'Example: 3rd year',
            'phone_number': 'WhatsApp number',
        }

        for field_name, field in self.fields.items():
            field.widget.attrs.update({
                'class': 'form-control',
                'placeholder': placeholders.get(field_name, ''),
            })
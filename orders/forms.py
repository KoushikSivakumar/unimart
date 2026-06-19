from django import forms
from .models import OrderRequest


class OrderRequestForm(forms.ModelForm):
    class Meta:
        model = OrderRequest
        fields = [
            'quantity',
            'message',
        ]

        widgets = {
            'message': forms.Textarea(attrs={
                'rows': 4,
                'placeholder': 'Add any details for the seller. Example: I can collect it near the canteen after class.'
            }),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field_name, field in self.fields.items():
            field.widget.attrs.update({
                'class': 'form-control',
            })
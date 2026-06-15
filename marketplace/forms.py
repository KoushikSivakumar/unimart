from django import forms
from .models import Shop, Product


class ShopForm(forms.ModelForm):
    class Meta:
        model = Shop
        fields = [
            'shop_name',
            'description',
            'instagram_link',
            'whatsapp_number',
            'logo_image',
            'category',
            'college_name',
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field_name, field in self.fields.items():
            field.widget.attrs.update({
                'class': 'form-control',
            })


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
            'name',
            'description',
            'price',
            'image',
            'category',
            'stock_status',
        ]

        widgets = {
            'description': forms.Textarea(attrs={'rows': 4}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field_name, field in self.fields.items():
            field.widget.attrs.update({
                'class': 'form-control',
            })
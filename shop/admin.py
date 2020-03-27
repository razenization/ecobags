from django import forms
from django.contrib import admin
# from django.db import models

# Register your models here.
from django.contrib.admin import ModelAdmin
from django.forms import ModelForm

from shop.models import EcoBag, CustomUser, Order


class EcoBagForm(ModelForm):
    sizes = forms.MultipleChoiceField(required=False)

    def __init__(self, *args, **kwargs):
        super(EcoBagForm, self).__init__(*args, **kwargs)
        if self.instance:
            if self.instance.bag_type == "Sack":
                # print(self.instance.sizes)
                # print(self.fields['size'])
                SIZE_CHOICES = [
                    ('S', 'Small'),
                    ('M', 'Medium'),
                    ('L', 'Large'),
                ]

            elif self.instance.bag_type == "Thin":
                SIZE_CHOICES = [
                    ('M', 'Medium'),
                    ('L', 'Large'),
                ]

            elif self.instance.bag_type == "Bottom":
                SIZE_CHOICES = [
                    ('L', 'Large'),
                    ('XL', 'Extra Large'),
                    ('XXL', 'XX Large'),
                ]

            else:
                SIZE_CHOICES = [
                    ('S', 'Small'),
                    ('M', 'Medium'),
                    ('L', 'Large'),
                    ('XL', 'Extra Large'),
                    ('XXL', 'XX Large'),
                ]

            # print(self.instance.sizes)
            # print(self.fields['sizes'])
            self.fields['sizes'].choices = SIZE_CHOICES

    # print(EcoBag._meta.fields)

    class Meta:
        model = EcoBag
        fields = [field.name for field in EcoBag._meta.fields]


class UserForm(ModelForm):

    # orders = forms.CharField(required=False, )

    def __init__(self, *args, **kwargs):
        super(UserForm, self).__init__(*args, **kwargs)
        if self.instance:
            print(self.instance.orders.all())
            # orders = [order for order in self.instance.orders.all()]


    class Meta:
        model = CustomUser
        fields = [field.name for field in CustomUser._meta.fields]


class NewAdmin(ModelAdmin):
    def get_fields(self, request, obj=None):
        if isinstance(obj, EcoBag):
            all_fields = list(obj.__dict__.keys())[2:]
            if obj.bag_type == 'Sack':
                return all_fields
            all_fields.remove('has_lock')
            return all_fields
        else:
            return super(ModelAdmin, self).get_fields(request, obj)

    # def get_fieldsets(self, request, obj=None):
    #     fieldsets = super(ModelAdmin, self).get_fieldsets(request, obj)
    #     return fieldsets

    # def get_form(self, request, obj=None, change=False, **kwargs):
    #     if isinstance(obj, CustomUser):
    #         return UserForm
    #     else:
    #         return super().get_form(request, obj, **kwargs)


admin.site.register(EcoBag, NewAdmin)
admin.site.register(Order)
admin.site.register(CustomUser, NewAdmin)
# admin.site.register(CustomUser)
# admin.site.register(EcoBag)
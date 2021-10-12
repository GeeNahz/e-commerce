from django.contrib import admin
from .models import *

# Register your models here.

# @admin.register(Customer)
# @admin.register(Order)
# @admin.register(OrderItem)
# @admin.register(ShippingAddress)


# @admin.register(Product)

# class AdminProduct(admin.ModelAdmin):
#   list_filter = ['name', 'category']
#   list_display = ['name', 'category']


admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)

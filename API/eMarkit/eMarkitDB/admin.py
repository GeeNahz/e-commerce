from django.contrib import admin
from .models import Product

# Register your models here.

@admin.register(Product)

class AdminProduct(admin.ModelAdmin):
  list_filter = ['name', 'category']
  list_display = ['name', 'category']

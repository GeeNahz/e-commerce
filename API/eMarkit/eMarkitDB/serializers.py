from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'name_of_product', 'price', 'category', 'description', 'specification', 'number_avail']
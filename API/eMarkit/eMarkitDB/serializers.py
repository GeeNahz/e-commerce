from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
  # the_imageURL = serializers.ReadOnlyField(source='imageURL')

  class Meta:
    model = Product
    fields = '__all__'




class CustomerSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Customer
    fields = '__all__'



class OrderSerializer(serializers.ModelSerializer):
  # cart_items_total = serializers.ReadOnlyField(source='get_cart_items')

  class Meta:
    model = Order
    fields = '__all__'



class OrderItemSerializer(serializers.ModelSerializer):
  
  the_product_name = serializers.ReadOnlyField(source='product_name')
  the_product_price = serializers.ReadOnlyField(source='product_price')
  the_total = serializers.ReadOnlyField(source='get_total')
  the_image = serializers.ReadOnlyField(source='product_image')


  class Meta:
    model = OrderItem
    fields = '__all__'



class ShippingAddressSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = ShippingAddress
    fields = '__all__'
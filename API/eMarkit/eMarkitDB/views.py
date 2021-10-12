from rest_framework import viewsets
from .serializers import *
from .models import *


# Create your views here.

# database web view

class CustomerViewSet(viewsets.ModelViewSet):
  queryset = Customer.objects.all()
  serializer_class = CustomerSerializer



class ProductViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer




class OrderViewSet(viewsets.ModelViewSet):

  queryset = Order.objects.all()

  # if user.is_authenticated:
  #   customer = user.customer
  #   order, create = Order.objects.get_or_create(customer=customer, completed=False)
  #   items = order.orderitem_set.all()
  # else:
  #   items = []

  serializer_class = OrderSerializer



class OrderItemViewSet(viewsets.ModelViewSet):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer



class ShippingAddressViewSet(viewsets.ModelViewSet):
  queryset = ShippingAddress.objects.all()
  serializer_class = ShippingAddressSerializer

from rest_framework import viewsets
from .serializers import *
from .models import *
# from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import authenticate,login


# Create your views here.

# database web view

def manualAuth(request):
  if request.user.is_anonymous :
    user_details = User.objects.get(username='godswill') 
    username = user_details.get_username()
    password = 'mailnasara'
    user = authenticate(username=username, password=password)

    if user is not None:
      login(request,user)
      # print("Yes")




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


# to update the quantity of the products ordered
# @api_view(['POST'])
@ensure_csrf_cookie
def updateItem(request):
  data = json.loads(request.body)

  productId = data['productID']
  action = data['action']
  # authentication process 
  manualAuth(request)
  
  # print(request.user)

  customer = request.user.customer

  product = Product.objects.get(id=productId)

  order, created = Order.objects.get_or_create(customer=customer, complete=False)

  orderitem, created = OrderItem.objects.get_or_create(order=order, product=product)

  # add and remove items from the cart
  if action == 'add':
    orderitem.quantity += 1
  elif action == 'remove':
    orderitem.quantity -= 1
  
  orderitem.save()

  if orderitem.quantity <= 0:
    orderitem.delete()
  
  return JsonResponse("data sent", safe=False)

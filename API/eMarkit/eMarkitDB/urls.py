from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from django.views.decorators.csrf import csrf_exempt


router = DefaultRouter()

router.register('customer', CustomerViewSet, basename='customer')

router.register('product', ProductViewSet, basename='product')

router.register('order', OrderViewSet, basename='order')

router.register('orderitem', OrderItemViewSet, basename='orderitem')

router.register('shippingaddress', ShippingAddressViewSet, basename='shippingaddress')

# router.register('item_update', updateItem, basename='item_update')



urlpatterns = [
  path('api/', include(router.urls)),
  path('item_update/', csrf_exempt(updateItem), name='item_update'),
]
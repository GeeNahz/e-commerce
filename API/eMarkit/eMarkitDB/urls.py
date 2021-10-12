from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()

router.register('customer', CustomerViewSet, basename='customer')

router.register('product', ProductViewSet, basename='product')

router.register('order', OrderViewSet, basename='order')

router.register('orderitem', OrderItemViewSet, basename='orderitem')

router.register('shippingaddress', ShippingAddressViewSet, basename='shippingaddress')



urlpatterns = [
  path('api/', include(router.urls))
]
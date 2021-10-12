from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Customer(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
  name = models.CharField(max_length=200, null=True)
  email = models.EmailField(max_length=200, null=True)

  def __str__(self):
    return self.name


class Product(models.Model):
  name = models.CharField(max_length=200, null=True)
  price = models.CharField(max_length=20, null=True)
  category = models.CharField(max_length=20, null=True)
  description = models.TextField(max_length=200, null=True)
  specification = models.TextField(max_length=200, null=True)
  number_avail = models.CharField(max_length=20, null=True)
  image = models.ImageField(null=True, blank=True)


  def __str__(self):
    return str(self.name)

  @property
  def imageURL(self):
    try:
      url = self.image
    except:
      url = ''
    return url

  



class Order(models.Model):
  customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
  date_ordered = models.DateTimeField(auto_now_add=True)
  complete = models.BooleanField(default=False, null=True, blank=False)
  transaction_id = models.CharField(max_length=200, null=True)

  def __str__(self):
    return str(self.id)


  # @property
  # def get_cart_items(self):
  #   orderitems = self.OrderItem.objects.all()
  #   total = sum([item.get_total for item in orderitems])
  #   return total


  # @property
  # def get_cart_items(self):
  #   orderitems = OrderItem.object.all()
  #   # total = sum([orderitems.quantity for item in orderitems])
  #   total = self.orderitems.quantity
  #   # total = "Some texts here"
  #   return total


  # @property
  # def get_cart_total(self):
  #   orderitems = self.orderitem_set.all()
  #   total = sum(item.get_total for item in orderitems)
  #   return total
  
  


class OrderItem(models.Model):
  product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
  order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
  quantity = models.IntegerField(default=0, null=True, blank=True)
  date_added = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return str(self.product.name)

  @property
  def product_name(self):
    return self.product.name

  @property
  def product_price(self):
    return self.product.price

  @property
  def get_total(self):
    return int(self.product.price) * self.quantity

  @property
  def product_image(self):
    image = self.product.image
    url = f'http://127.0.0.1:8000/images/{image}'
    return url

  @property
  def get_cart_items(self):
    for total in range(self.quantity):
      total+=total
    # orderitems = self._set.all()
    # total = sum([self.quantity for item in orderitems])
    return total

    


class ShippingAddress(models.Model):
  customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True)
  order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
  address = models.CharField(max_length=200, null=False)
  city = models.CharField(max_length=200, null=False)
  state = models.CharField(max_length=200, null=False)
  zipcode = models.CharField(max_length=200, null=False)
  date_added = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return self.address


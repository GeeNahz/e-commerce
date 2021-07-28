from django.db import models

# Create your models here.

class Product(models.Model):
  name_of_product = models.CharField(max_length=200)
  price = models.CharField(max_length=20)
  category = models.CharField(max_length=20)
  description = models.TextField(max_length=200)
  specification = models.TextField(max_length=200)
  number_avail = models.CharField(max_length=20)


  def __str__(self):
    return self.name, self.category
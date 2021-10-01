from django.db import models

# Create your models here.

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

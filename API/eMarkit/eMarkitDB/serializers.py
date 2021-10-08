from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
  imageURL = serializers.SerializerMethodField()

  class Meta:
    model = Product
    fields = '__all__'


  def get_imageURL(self, url):
      try:
          url = self.image
      except:
          url = ''
      return url
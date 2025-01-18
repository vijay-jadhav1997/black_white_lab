from django.db import models


# Create your models here.
class Image(models.Model):
  img = models.ImageField(upload_to='images/')
  bw_img = models.ImageField(upload_to='bw_images/', blank=True, null=True)

  def __str__(self):
    return "Image " + str(self.id)


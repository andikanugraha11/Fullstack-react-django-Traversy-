from django.db import models

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100, default="User")
    email = models.EmailField(max_length=100, unique=True, blank=False,default="andika.nugraha@detik.com")
    message = models.TextField(max_length=500,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
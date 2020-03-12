from django.db import models

# Create your models here.


class Search(models.Model):
    search = models.CharField(max_length=500, null=True)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}'.format(self.search)

    class Meta:
        verbose_name_plural = 'Searches'


class Sub(models.Model):
    email = models.EmailField()
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{}'.format(self.email)

    class Meta:
        verbose_name_plural = 'Subs'


class EcoBag(models.Model):
    price = models.IntegerField(default=0)
    has_lock = models.BooleanField


class BoxBag(models.Model):
    pass


class SomeOtherBag(models.Model):
    pass

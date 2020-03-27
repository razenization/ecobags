from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
from jsonfield import JSONField

from shop.managers import CustomUserManager


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
    # SIZE_CHOICES = [
    #     ('S', 'Small'),
    #     ('M', 'Medium'),
    #     ('L', 'Large'),
    #     ('XL', 'Extra Large'),
    #     ('XXL', 'XX Large'),
    # ]

    BT_CHOICES = [
        ('Box', 'Бокс'),
        ('Thin', 'Плоская'),
        ('Bottom', 'Донная складка'),
        ('Sack', 'Мешок'),
        ('Shirt', 'Сумка-майка'),
    ]

    name = models.CharField(max_length=60)
    bag_type = models.CharField(
        max_length=10,
        choices=BT_CHOICES,
        default='Box',
    )
    sizes = JSONField()
    old_price = models.FloatField(default=0)
    price = models.FloatField(default=0)
    has_lock = models.BooleanField(default=False)
    image = models.ImageField(default=None)
    left = models.IntegerField(default=0, verbose_name='How much bags left in stock?')

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    is_accepted = models.BooleanField(default=False)
    company = models.CharField(max_length=100, null=True, default=None, verbose_name='Company name', blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Order(models.Model):
    text = models.TextField(max_length=400)
    comment = models.TextField(max_length=300)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='orders')
    status = models.CharField(max_length=150, default='Получен')

    def __str__(self):
        return self.text

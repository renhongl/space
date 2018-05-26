from django.db import models

import uuid

user_id = 1000;

def password_default():
    return 123456

def userName_default():
    global user_id
    user_id = user_id + 1;
    return user_id

def uuid_default():
    return uuid.uuid4()

# Create your models here.
class User(models.Model):
    USER_GENDER_CHOICES = (
        ('male', '男'),
        ('female', '女')
    )
    userId = models.UUIDField(primary_key=True, default=uuid_default, editable=False)
    userName = models.CharField(max_length=30, default=userName_default)
    userGender = models.CharField(choices=USER_GENDER_CHOICES, default='male', max_length=10)
    userAge = models.IntegerField(blank=True, null=True)
    userEmail = models.EmailField(max_length=254, blank=True, null=True)
    userIcon = models.URLField(max_length=200, blank=True, null=True)
    userPassword = models.CharField(max_length=30, default=password_default)

    def __str__(self):
        return self.userName

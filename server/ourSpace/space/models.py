from django.db import models

import uuid

user_id = 1000;
message_id = 5000;

def password_default():
    return 123456

def userName_default():
    global user_id
    user_id = user_id + 1
    return user_id

def message_id_default():
    global message_id
    message_id = message_id + 1
    return message_id

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

class MessageBoard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid_default, editable=False)
    userName = models.CharField(max_length=30, default='')
    avatar = models.URLField(max_length=200, blank=True, null=True)
    author = models.CharField(max_length=30, default='')
    datetime = models.DateTimeField()
    text = models.CharField(max_length=1000, default='')
    replyId = models.CharField(max_length=30, default=message_id_default)
    parentReplyId = models.CharField(max_length=30, blank=True, default='')

    class Meta:
        ordering = ['-datetime']

    def __str__(self):
        return self.replyId
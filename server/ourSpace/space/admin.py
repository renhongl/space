from django.contrib import admin

# Register your models here.
from .models import User
from .models import MessageBoard
admin.site.register(User)
admin.site.register(MessageBoard)
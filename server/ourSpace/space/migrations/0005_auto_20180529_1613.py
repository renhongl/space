# Generated by Django 2.0.2 on 2018-05-29 08:13

from django.db import migrations, models
import space.models


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0004_auto_20180529_1602'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messageboard',
            name='parentReplyId',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='messageboard',
            name='replyId',
            field=models.CharField(default=space.models.message_id_default, max_length=30),
        ),
    ]

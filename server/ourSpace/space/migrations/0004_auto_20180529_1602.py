# Generated by Django 2.0.2 on 2018-05-29 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('space', '0003_auto_20180529_1552'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messageboard',
            name='datetime',
            field=models.CharField(default='', max_length=100),
        ),
    ]
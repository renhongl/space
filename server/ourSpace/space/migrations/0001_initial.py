# Generated by Django 2.0.2 on 2018-05-26 03:00

from django.db import migrations, models
import space.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('userId', models.UUIDField(default=space.models.uuid_default, editable=False, primary_key=True, serialize=False)),
                ('userName', models.CharField(default=space.models.userName_default, max_length=30)),
                ('userGender', models.CharField(choices=[('male', '男'), ('female', '女')], default='male', max_length=10)),
                ('userAge', models.IntegerField(blank=True, null=True)),
                ('userEmail', models.EmailField(blank=True, max_length=254, null=True)),
                ('userIcon', models.URLField(blank=True, null=True)),
                ('userPassword', models.CharField(default=space.models.password_default, max_length=30)),
            ],
        ),
    ]

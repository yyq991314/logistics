# Generated by Django 3.1.7 on 2021-03-13 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_logistics_apptype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='admin',
            name='avatar',
            field=models.TextField(default=''),
        ),
    ]
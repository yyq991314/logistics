# Generated by Django 3.1.7 on 2021-03-12 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_auto_20210311_1542'),
    ]

    operations = [
        migrations.AddField(
            model_name='logistics',
            name='arrtype',
            field=models.IntegerField(default=0),
        ),
    ]
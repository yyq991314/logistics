# Generated by Django 3.1.7 on 2021-03-21 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_auto_20210321_1934'),
    ]

    operations = [
        migrations.AddField(
            model_name='logistics',
            name='take_price',
            field=models.FloatField(default=0.0, max_length=30),
        ),
    ]
# Generated by Django 3.1.7 on 2021-03-07 03:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_role'),
    ]

    operations = [
        migrations.CreateModel(
            name='Logistics',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goods', models.CharField(default='', max_length=15)),
                ('mtelephone', models.CharField(default='', max_length=15)),
                ('mname', models.CharField(default='', max_length=50)),
                ('rtelephone', models.CharField(default='', max_length=15)),
                ('rname', models.CharField(default='', max_length=50)),
                ('price', models.FloatField(default=0.0, max_length=30)),
                ('service_price', models.FloatField(default=0.0, max_length=30)),
                ('admin_id', models.IntegerField(default=0)),
                ('logistics_id', models.IntegerField(default=0)),
                ('types', models.SmallIntegerField(default=0)),
                ('orders', models.SmallIntegerField(default=0)),
                ('status', models.SmallIntegerField(default=0)),
                ('addtime', models.FloatField(default=0.0, max_length=30)),
                ('updatetime', models.FloatField(default=0.0, max_length=30)),
                ('mark', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='LogisticsType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=15)),
                ('unit', models.FloatField(default=0.0)),
                ('status', models.SmallIntegerField(default=0)),
                ('addtime', models.FloatField(default=0.0, max_length=30)),
                ('updatetime', models.FloatField(default=0.0, max_length=30)),
            ],
        ),
    ]

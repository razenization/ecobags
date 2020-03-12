# Generated by Django 3.0.4 on 2020-03-10 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_auto_20200305_1709'),
    ]

    operations = [
        migrations.CreateModel(
            name='Goods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=100, null=True)),
                ('appear_date', models.DateTimeField()),
            ],
            options={
                'verbose_name_plural': 'Goods',
            },
        ),
    ]
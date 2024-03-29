# Generated by Django 4.0.4 on 2023-01-28 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='garden',
            name='slug',
            field=models.SlugField(default=123, verbose_name='URL'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='garden',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]

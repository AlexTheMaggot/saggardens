# Generated by Django 3.1.4 on 2023-11-29 12:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0020_auto_20231129_1707'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='author',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, related_name='posts', to='mainapp.author', verbose_name='Автор'),
            preserve_default=False,
        ),
    ]

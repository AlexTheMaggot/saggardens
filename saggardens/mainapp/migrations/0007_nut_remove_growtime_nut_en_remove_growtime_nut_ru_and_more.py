# Generated by Django 4.0.4 on 2023-01-30 07:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0006_remove_growtime_nut_growtime_nut_en_growtime_nut_ru_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nut',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_ru', models.CharField(max_length=200, verbose_name='Название на русском')),
                ('name_en', models.CharField(max_length=200, verbose_name='Название на английском')),
                ('name_uzl', models.CharField(max_length=200, verbose_name='Название на узбекском (лат)')),
                ('name_uzc', models.CharField(max_length=200, verbose_name='Название на узбекском (кир)')),
            ],
            options={
                'verbose_name': 'Орех',
                'verbose_name_plural': 'Орехи',
            },
        ),
        migrations.RemoveField(
            model_name='growtime',
            name='nut_en',
        ),
        migrations.RemoveField(
            model_name='growtime',
            name='nut_ru',
        ),
        migrations.RemoveField(
            model_name='growtime',
            name='nut_uzc',
        ),
        migrations.RemoveField(
            model_name='growtime',
            name='nut_uzl',
        ),
        migrations.AddField(
            model_name='growtime',
            name='nut',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='growtimes', to='mainapp.nut', verbose_name='Вид ореха'),
            preserve_default=False,
        ),
    ]

# Generated by Django 4.0.4 on 2023-01-30 07:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0007_nut_remove_growtime_nut_en_remove_growtime_nut_ru_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='growtime',
            name='nut',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, related_name='growtimes', to='mainapp.nut', verbose_name='Вид ореха'),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Nutvariety',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('area', models.FloatField(verbose_name='Территория')),
                ('garden', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='nutvarieties', to='mainapp.garden', verbose_name='Сад')),
                ('nut', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='nutvarieties', to='mainapp.nut', verbose_name='Вид ореха')),
            ],
            options={
                'verbose_name': 'Разновидность',
                'verbose_name_plural': 'Разновидности',
            },
        ),
    ]

from django.db import models


class Nut(models.Model):
    name_ru = models.CharField(verbose_name='Название на русском', max_length=200)
    name_en = models.CharField(verbose_name='Название на английском', max_length=200)
    name_uzl = models.CharField(verbose_name='Название на узбекском (лат)', max_length=200)
    name_uzc = models.CharField(verbose_name='Название на узбекском (кир)', max_length=200)

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = 'Орех'
        verbose_name_plural = 'Орехи'


class Garden(models.Model):
    title_ru = models.CharField(max_length=200, verbose_name='Заголовок на русском')
    title_en = models.CharField(max_length=200, verbose_name='Заголовок на английском')
    title_uzl = models.CharField(max_length=200, verbose_name='Заголовок на узбекском (лат)')
    title_uzc = models.CharField(max_length=200, verbose_name='Заголовок на узбекском (кир)')
    nut_choice = [
        ('walnut', 'Грецкий орех'),
        ('almond', 'Миндаль'),
    ]
    nut_kind = models.CharField(verbose_name='Вид ореха', max_length=200, choices=nut_choice)
    img = models.ImageField(upload_to='gardens/', verbose_name='Изображение')
    slug = models.SlugField(verbose_name='URL')
    cultivated_area = models.FloatField(verbose_name='Культивируемая территория')
    text_ru = models.TextField(verbose_name='Текст на русском')
    text_en = models.TextField(verbose_name='Текст на английском')
    text_uzl = models.TextField(verbose_name='Текст на узбекском (лат)')
    text_uzc = models.TextField(verbose_name='Текст на узбекском (кир)')

    def __str__(self):
        return self.title_ru

    class Meta:
        verbose_name = 'Сад'
        verbose_name_plural = 'Сады'


class Growtime(models.Model):
    garden = models.ForeignKey(Garden, on_delete=models.PROTECT, verbose_name='Сад', related_name='growtimes')
    year = models.IntegerField(verbose_name='Год посадки')
    nut = models.ForeignKey(Nut, on_delete=models.PROTECT, related_name='growtimes', verbose_name='Вид ореха')
    area = models.FloatField(verbose_name='Территория')

    def __str__(self):
        return self.garden.title_ru

    class Meta:
        verbose_name = 'Время посадки'
        verbose_name_plural = verbose_name


class Nutvariety(models.Model):
    garden = models.ForeignKey(Garden, on_delete=models.PROTECT, related_name='nutvarieties', verbose_name='Сад')
    nut = models.ForeignKey(Nut, on_delete=models.PROTECT, related_name='nutvarieties', verbose_name='Вид ореха')
    area = models.FloatField(verbose_name='Территория')

    def __str__(self):
        return self.garden.title_ru

    class Meta:
        verbose_name = 'Разновидность'
        verbose_name_plural = 'Разновидности'

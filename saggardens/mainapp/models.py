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


class Photo(models.Model):
    img = models.ImageField(upload_to='gallery/', verbose_name='Изображение')

    def __str__(self):
        return f'Фото {self.id}'

    class Meta:
        verbose_name = 'Фото'
        verbose_name_plural = 'Галлерея'


class Author(models.Model):
    name_ru = models.CharField(max_length=200, verbose_name='Имя на русском')
    name_en = models.CharField(max_length=200, verbose_name='Имя на английском')
    name_uzl = models.CharField(max_length=200, verbose_name='Имя на узбекском (лат)')
    name_uzc = models.CharField(max_length=200, verbose_name='Имя на узбекском (кир)')
    speciality_ru = models.CharField(max_length=200, verbose_name='Специальность на русском')
    speciality_en = models.CharField(max_length=200, verbose_name='Специальность на английском')
    speciality_uzl = models.CharField(max_length=200, verbose_name='Специальность на узбекском (лат)')
    speciality_uzc = models.CharField(max_length=200, verbose_name='Специальность на узбекском (кир)')
    img = models.ImageField(upload_to='authors/', verbose_name='Фото (100x100)')

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = 'Автор'
        verbose_name_plural = 'Авторы'


class Post(models.Model):
    title_ru = models.CharField(max_length=200, verbose_name='Заголовок на русском')
    title_en = models.CharField(max_length=200, verbose_name='Заголовок на английском')
    title_uzl = models.CharField(max_length=200, verbose_name='Заголовок на узбекском (лат)')
    title_uzc = models.CharField(max_length=200, verbose_name='Заголовок на узбекском (кир)')
    description_ru = models.TextField(verbose_name='Краткое описание на русском')
    description_en = models.TextField(verbose_name='Краткое описание на английском')
    description_uzl = models.TextField(verbose_name='Краткое описание на узбекском (лат)')
    description_uzc = models.TextField(verbose_name='Краткое описание на узбекском (кир)')
    text_ru = models.TextField(verbose_name='Текст на русском')
    text_en = models.TextField(verbose_name='Текст на английском')
    text_uzl = models.TextField(verbose_name='Текст на узбекском (лат)')
    text_uzc = models.TextField(verbose_name='Текст на узбекском (кир)')
    date = models.DateField(verbose_name='Дата публикации', auto_now_add=True)
    img = models.ImageField(upload_to='posts/', verbose_name='Изображение (992x700)')
    author = models.ForeignKey(Author, on_delete=models.PROTECT, verbose_name='Автор', related_name='posts')


    def __str__(self):
        return self.title_ru

    class Meta:
        verbose_name = 'Пост'
        verbose_name_plural = 'Новости'


class Category(models.Model):
    name_ru = models.CharField(max_length=200, verbose_name='Название на русском')
    name_en = models.CharField(max_length=200, verbose_name='Название на английском')
    name_uzl = models.CharField(max_length=200, verbose_name='Название на узбекском (лат)')
    name_uzc = models.CharField(max_length=200, verbose_name='Название на узбекском (кир)')

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    name_ru = models.CharField(max_length=200, verbose_name='Имя на русском')
    name_en = models.CharField(max_length=200, verbose_name='Имя на английском')
    name_uzl = models.CharField(max_length=200, verbose_name='Имя на узбекском (лат)')
    name_uzc = models.CharField(max_length=200, verbose_name='Имя на узбекском (кир)')
    description_ru = models.TextField(verbose_name='Краткое описание на русском')
    description_en = models.TextField(verbose_name='Краткое описание на английском')
    description_uzl = models.TextField(verbose_name='Краткое описание на узбекском (лат)')
    description_uzc = models.TextField(verbose_name='Краткое описание на узбекском (кир)')
    text_ru = models.TextField(verbose_name='Текст на русском')
    text_en = models.TextField(verbose_name='Текст на английском')
    text_uzl = models.TextField(verbose_name='Текст на узбекском (лат)')
    text_uzc = models.TextField(verbose_name='Текст на узбекском (кир)')
    img = models.ImageField(upload_to='products/', verbose_name='Изображение')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, verbose_name='Категория', related_name='products')

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'


# Generated by Django 2.1.5 on 2019-02-07 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0004_auto_20190207_0254'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='name',
            field=models.CharField(default='User', max_length=100),
        ),
    ]

# Generated by Django 2.1.5 on 2019-02-06 11:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lead',
            name='created_at',
        ),
    ]

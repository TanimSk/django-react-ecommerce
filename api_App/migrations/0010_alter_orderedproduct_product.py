# Generated by Django 4.1.4 on 2022-12-20 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api_App', '0009_orderedproduct_product_alter_orderedproduct_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderedproduct',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ordered_product', to='api_App.product'),
        ),
    ]

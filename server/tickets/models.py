from django.db import models


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_day = models.DateField()
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name


class Order(models.Model):
    customer = models.ForeignKey(Customer)

    def __str__(self):
        return "{}'s order".format(self.customer.first_name)


class Ticket(models.Model):
    order = models.ForeignKey(Order,  related_name='tickets')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_day = models.DateField()
    date = models.DateField()

    def __str__(self):
        return "ticket for {}".format(self.first_name)

from django.db import models


class Client(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_day = models.DateField()
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name


class Order(models.Model):
    client = models.ForeignKey(Client)

    def __str__(self):
        return "{}'s order".format(self.client.first_name)


class Ticket(models.Model):
    order = models.ForeignKey(Order,  related_name='orders')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    birth_day = models.DateField()

    def __str__(self):
        return "ticket for {}".format(self.first_name)

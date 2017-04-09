from django.contrib import admin

from .models import Client, Order, Ticket
admin.site.register(Client)
admin.site.register(Order)
admin.site.register(Ticket)

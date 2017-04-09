from django.contrib import admin

from .models import Customer, Order, Ticket
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(Ticket)

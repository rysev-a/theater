from .models import Order, Ticket, Client
from rest_framework import serializers


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('first_name', 'last_name', 'birth_day', 'phone')


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ('id', 'first_name', 'last_name', 'birth_day')


class OrderSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    orders = TicketSerializer(many=True)
    
    class Meta:
        model = Order
        fields = ('id', 'client', 'orders')


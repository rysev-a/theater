from .models import Order, Ticket, Client
from rest_framework import serializers


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('first_name', 'last_name', 'birth_day', 'phone')


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ('id', 'first_name', 'last_name', 'birth_day', 'date')


class OrderSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    tickets = TicketSerializer(many=True)
    
    class Meta:
        model = Order
        fields = ('id', 'client', 'tickets')

    def create(self, validated_data):
        tickets_data = validated_data.pop('tickets')
        client_data = validated_data.pop('client')

        client = Client.objects.create(**client_data)
        order = Order.objects.create(client=client, **validated_data)
        for ticket_data in tickets_data:
            Ticket.objects.create(order=order, **ticket_data)

        return order


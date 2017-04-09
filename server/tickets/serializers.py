from .models import Order, Ticket, Customer
from rest_framework import serializers


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('first_name', 'last_name', 'birth_day', 'phone')


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ('id', 'first_name', 'last_name', 'birth_day', 'date')


class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    tickets = TicketSerializer(many=True)
    
    class Meta:
        model = Order
        fields = ('id', 'customer', 'tickets')

    def create(self, validated_data):
        tickets_data = validated_data.pop('tickets')
        customer_data = validated_data.pop('customer')

        customer = Customer.objects.create(**customer_data)
        order = Order.objects.create(customer=customer, **validated_data)
        for ticket_data in tickets_data:
            Ticket.objects.create(order=order, **ticket_data)

        return order


import React, { useState } from 'react';
import {
        Box,
        VStack,
        HStack,
        Text,
        Button,
        Divider,
        Flex,
        Spacer,
        Image,
        useMediaQuery,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const YourOrder = () => {
        // Sample data for demonstration purposes
        const [orders, setOrders] = useState([
                { id: 1, name: 'Product 1', price: 10.99, image: 'https://via.placeholder.com/150', quantity: 1 },
                { id: 2, name: 'Product 2', price: 15.99, image: 'https://via.placeholder.com/150', quantity: 1 },
        ]);

        const [isLargerThan] = useMediaQuery('(min-width: 768px)');

        const handleQuantityChange = (id, action) => {
                const updatedOrders = orders.map((order) => {
                        if (order.id === id) {
                                if (action === 'increase') {
                                        return { ...order, quantity: order.quantity + 1 };
                                } else if (action === 'decrease' && order.quantity > 1) {
                                        return { ...order, quantity: order.quantity - 1 };
                                }
                        }
                        return order;
                });
                setOrders(updatedOrders);
        };

        const handleRemoveItem = (id) => {
                const updatedOrders = orders.filter((order) => order.id !== id);
                setOrders(updatedOrders);
        };

        return (
                <Flex w="100vw" h="100vh" justify="center" align="center" bg="gray.100">
                        <Box w={isLargerThan ? '500px' : '100%'} p={4} borderWidth={1} borderRadius="lg">

                                <VStack spacing={4} align="stretch">
                                        <Text fontSize="2xl" fontWeight="bold">
                                                Your Order
                                        </Text>
                                        {orders.map((order) => (
                                                <Box key={order.id}>
                                                        <HStack>
                                                                <Image
                                                                        src={order.image}
                                                                        alt={order.name}
                                                                        boxSize="100px"
                                                                        objectFit="cover"
                                                                        borderRadius="full"
                                                                />
                                                                <VStack align="start" spacing={1}>
                                                                        <Text>{order.name}</Text>
                                                                        <Text fontSize="sm" color="gray.500">
                                                                                Quantity: {order.quantity}
                                                                        </Text>
                                                                </VStack>
                                                                <Spacer />
                                                                <Text>${(order.price * order.quantity).toFixed(2)}</Text>
                                                                <HStack>
                                                                        <Button
                                                                                size="sm"
                                                                                colorScheme="yellow"
                                                                                borderRadius="full"
                                                                                onClick={() => handleQuantityChange(order.id, 'increase')}
                                                                        >
                                                                                +
                                                                        </Button>
                                                                        <Text>{order.quantity}</Text>
                                                                        <Button
                                                                                size="sm"
                                                                                colorScheme="gray"
                                                                                backgroundColor='gray.300'
                                                                                borderRadius="full"
                                                                                onClick={() => handleQuantityChange(order.id, 'decrease')}
                                                                        >
                                                                                -
                                                                        </Button>
                                                                        <Button
                                                                                size="xs"
                                                                                colorScheme="red"
                                                                                borderRadius="full"
                                                                                onClick={() => handleRemoveItem(order.id)}
                                                                        >
                                                                                <CloseIcon />
                                                                        </Button>
                                                                </HStack>
                                                        </HStack>
                                                        <Divider />
                                                </Box>
                                        ))}
                                        <Flex>
                                                <Text fontWeight="bold">Total:</Text>
                                                <Spacer />
                                                <Text fontWeight="bold">
                                                        ${orders.reduce((sum, order) => sum + order.price * order.quantity, 0).toFixed(2)}
                                                </Text>
                                        </Flex>
                                        <Button
                                                colorScheme="teal"
                                                size="lg"
                                                width="100%"
                                                borderRadius="full"
                                                bg="transparent"
                                                border="2px"
                                                color='black'
                                                borderColor="yellow.500"
                                                _hover={{ bg: 'yellow.500', color: 'white' }}
                                        >
                                                Checkout
                                        </Button>
                                </VStack>
                        </Box>
                </Flex>
        );
};

export default YourOrder;

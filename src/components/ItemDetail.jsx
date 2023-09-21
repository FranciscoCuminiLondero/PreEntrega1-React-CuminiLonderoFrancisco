import React from 'react';
import { Center, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react';

const ItemDetail = ({ product }) => {
    return (
        <Center p="1rem">
            <Card>
                <CardHeader>
                    <Heading size='md'>{product.name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{product.description}</Text>
                    <Text>$ {product.price}</Text>
                </CardBody>
                <CardFooter>
                    <Button variant='ghost' colorScheme='blue'>
                        Agregar
                    </Button>
                </CardFooter>
            </Card>
        </Center>
    );
}

export default ItemDetail;

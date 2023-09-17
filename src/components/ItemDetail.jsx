import React, { useEffect, useState } from 'react'
import { Center, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';

const ItemDetail = ({ products }) => {
    const { id } = useParams();
    const [filteredProduct, setFilteredProduct] = useState(null);

    useEffect(() => {
        const product = products.find(product => product.id == id);
            setFilteredProduct(product);
        }, [id, products]);

    return (
        <>
            {filteredProduct ? (
                <Center p="1rem">
                    <Card>
                        <CardHeader>
                            <Heading size='md'>{filteredProduct.name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{filteredProduct.description}</Text>
                            <Text>$ {filteredProduct.price}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='ghost' colorScheme='blue'>
                                Agregar
                            </Button>
                        </CardFooter>
                    </Card>
                </Center>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </>
    )
}

export default ItemDetail

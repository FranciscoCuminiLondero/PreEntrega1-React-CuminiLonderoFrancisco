import React from 'react'
import { Card, CardBody, Image, HStack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Item = ({name, price, id}) => {
    return (
        <>
            <Card maxW='100%' >
                <CardBody direction={{ base: 'column', sm: 'row' }}>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <HStack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        $ {price}
                    </Text>
                    </HStack>
                </CardBody>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Link to={`/item/${id}`}>
                    <Button variant='solid' colorScheme='blue'>
                        Más Información
                    </Button>
                    </Link>
                    <Button variant='ghost' colorScheme='blue'>
                        Agregar
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}

export default Item
import React from 'react'
import { Grid } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const products = [
        { id:1, name:"Producto A", price:1000, description:"Descripción", category:"A", stock:100},
        { id:2, name:"Producto B", price:2000, description:"Descripción", category:"B", stock:200},
        { id:3, name:"Producto C", price:3000, description:"Descripción", category:"C", stock:300},
        { id:4, name:"Producto D", price:2000, description:"Descripción", category:"B", stock:50},
        { id:5, name:"Producto F", price:1000, description:"Descripción", category:"C", stock:300},
        { id:6, name:"Producto G", price:2000, description:"Descripción", category:"B", stock:150},
        { id:7, name:"Producto H", price:2000, description:"Descripción", category:"A", stock:150},
        { id:8, name:"Producto I", price:2000, description:"Descripción", category:"A", stock:150}
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if(products.length > 0) {
            setTimeout(() => {
                resolve("Productos cargados")
            }, 2000)
        } else {
            reject("No se pueden mostrar los productos")
        }
    });

    mostrarProductos
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })

    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={10} m='10'>
            <ItemDetail products={products} />
        </Grid>
    )
}

export default ItemDetailContainer
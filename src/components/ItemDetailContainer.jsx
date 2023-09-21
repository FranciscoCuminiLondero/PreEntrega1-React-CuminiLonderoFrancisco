import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { Grid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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

    useEffect(() => {
        const mostrarProducto = new Promise((resolve, reject) => {
            if (products.length > 0) {
                if (id) {
                    const productFound = products.find(product => product.id.toString() === id);
                    if (productFound) {
                        setProduct(productFound);
                        resolve(productFound);
                    } else {
                        reject("Producto no encontrado");
                    }
                } else {
                    reject("ID de producto no proporcionado");
                }
            } else {
                reject("No se pueden mostrar los productos");
            }
        });
    
        mostrarProducto
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); 

    return (
        <Grid templateColumns='repeat(1, 1fr)' gap={10} m='10'>
            {product ? <ItemDetail product={product} /> : <p> Producto no encontrado</p>}
        </Grid>
    );
};

export default ItemDetailContainer;

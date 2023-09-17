import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <>
            {
                products.map((p) => {
                    return (
                        <div key={p.id}>
                            <Item 
                            id={p.id}
                            name={p.name} 
                            price={p.price}
                            category={p.category}
                            stock={p.stock}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ItemList
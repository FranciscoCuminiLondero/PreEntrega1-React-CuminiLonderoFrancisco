import React from 'react'
import { Box, Flex } from "@chakra-ui/react"

const CartWidget = () => {
    return (
        <>
            <Flex>
                <Box>
                    🛒
                </Box>
                <Box pl='5'>
                    <p>0</p>    
                </Box>
            </Flex>
        </>
    )
}

export default CartWidget
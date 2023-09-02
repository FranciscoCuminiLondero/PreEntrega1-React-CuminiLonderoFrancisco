import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <>
            <Flex>
                <Box p='4'>
                    E.S. Chocolates
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Barras de Chocolate</MenuItem>
                            <MenuItem>Chocolates Varios</MenuItem>
                            <MenuItem>Regalería</MenuItem>
                            <MenuItem>Otros</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>            
        </>
    )
}

export default NavBar
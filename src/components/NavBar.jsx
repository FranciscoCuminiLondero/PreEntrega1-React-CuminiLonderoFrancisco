import React from 'react';
import CartWidget from './CartWidget';
import { Flex, Spacer, Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Flex>
                <Box p='4'>
                    <Link to={"/"}>
                        E.S. Chocolates
                    </Link>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                            <Link to={`/category/A`}>
                                A
                            </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={`/category/B`}>
                                    B
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={`/category/A`}>
                                    C
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>            
        </>
    );
}

export default NavBar;

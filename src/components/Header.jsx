import React from 'react'
import { FiShoppingBag } from "react-icons/fi"
import jordan from "../assests/New/jordan logo.svg"
import nike from "../assests/LOGO (2).png"
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from "react-icons/bi"
import { Box, VStack } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

import { useDisclosure, Button, Input, } from '@chakra-ui/react';


const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    return (
        <nav>
            <div className='jordan-nav nav1'>
                <Link to={"/jordan"}><img src={jordan} alt="jordan logo" /></Link>
            </div>
            <div className='nav2'>
                <div className='nike-logo'>
                    <Link to={"/"} ><img src={nike} alt="nike" /></Link>
                </div>
                <div className='nav2-links'>
                    <Link to={"/men"}>Men</Link>
                    <Link to={"women"}>Women</Link>
                    <Link to={"kids"}>Kids</Link>
                    <Link to={"sales"}>Sales</Link>
                </div>
                <div className='nav2-cart'>
                    <Link to={"/cart"}>
                        <FiShoppingBag />
                    </Link>
                </div>
                <div className='menu-bar'>

                    <Box>
                        <Button ref={btnRef} colorScheme='white'color={"black"} fontSize={"37px"} marginRight={"0px"} onClick={onOpen}>
                            <BiMenuAltRight />
                        </Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>
                                    <div className='nike-logo'>
                                        <Link to={"/"} ><img src={nike} width="40vw" alt="nike" /></Link>
                                    </div>
                                </DrawerHeader>

                                <DrawerBody>
                                    <VStack>
                                        <Button w={"full"} variant={"ghost"} colorScheme={"blue"} color={"Black"}> <Link to={"/men"} color={"Black"}>Men</Link></Button>
                                        <Button w={"full"} variant={"ghost"} colorScheme={"pink"} color={"Black"}> <Link to={"women"} >Women</Link></Button>
                                        <Button w={"full"} variant={"ghost"} colorScheme={"green"} color={"Black"}> <Link to={"/kids"} >Kids</Link></Button>
                                        <Button w={"full"} variant={"ghost"} colorScheme={"orange"} color={"Black"}> <Link to={"/cart"} >Cart</Link></Button>
                                    </VStack>
                                </DrawerBody>


                            </DrawerContent>
                        </Drawer>

                    </Box>
                </div>

            </div>
        </nav>
    )
}

export default Header
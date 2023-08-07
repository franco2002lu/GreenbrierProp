import {Button, Flex, Heading, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Navbar() {
    const [screen, setScreen] = useState("")

    useEffect(() => {
        const details = navigator.userAgent;
        const regexp = /android|iphone|kindle|ipad/i;
        const isMobileDevice = regexp.test(details);

        if (isMobileDevice) {
            setScreen("mobile")
        } else {
            setScreen("laptop")
        }
    }, [])

    if (screen === "laptop") {
        return (
            <Flex
                p={'2rem'}
                fontSize={{base: 'md', lg: 'large', xl: 'xl'}}
                alignItems={'center'}
                gap={'0.5rem'}
                bg={"#eff3ec"}
                zIndex={''}>
                <NavLink to={'/'}>
                    <Heading >
                        Greenbrier Properties
                    </Heading>
                </NavLink>
                <Spacer />

                <HStack spacing={{base: '2rem', lg: '2rem', xl: '3rem'}} fontSize={{base: 'md', lg: 'large', xl: 'xl'}}>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'properties'}>Properties</NavLink>
                    <NavLink to={'about'}>About</NavLink>
                    <NavLink to={'contact'}>Contact Us</NavLink>
                </HStack>
            </Flex>
        );
    } else {
        return (
            <Flex
                p={'1rem'}
                fontSize={{base: 'large', lg: 'large', xl: 'xl'}}
                alignItems={'center'}
                bg={"#eff3ec"}
                zIndex={''}>
                <NavLink to={'/'}>
                    <Heading >
                        Greenbrier Properties
                    </Heading>
                </NavLink>
                <Spacer />

                <Menu>
                    <MenuButton as={Button}
                                m={"auto"}
                                align={'center'}
                                bg={"#0D512C"}
                                color={"#f6f3e7"}
                                _hover={{
                                    bg: "#8ca968",
                                }}
                                variant="solid">
                        Menu
                    </MenuButton>
                    <MenuList>
                        <NavLink to={'/'}>
                            <MenuItem>Home</MenuItem>
                        </NavLink>
                        <NavLink to={'properties'}>
                            <MenuItem>Properties</MenuItem>
                        </NavLink>
                        <NavLink to={'about'}>
                            <MenuItem>About</MenuItem>
                        </NavLink>
                        <NavLink to={'contact'}>
                            <MenuItem>Contact Us</MenuItem>
                        </NavLink>
                    </MenuList>
                </Menu>
            </Flex>
        );
    }
}
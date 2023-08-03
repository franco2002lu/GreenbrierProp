import {Flex, Heading, HStack, Spacer} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";


export default function Navbar() {
    return (
        <Flex
            as={'nav'}
            p={'2rem'}
            fontSize={'xl'}
            alignItems={'center'}
            gap={'0.5rem'}
            bg={"#eff3ec"}
            zIndex={''}>
            <Heading as={'h1'}>Greenbrier Properties</Heading>
            <Spacer />

            <HStack spacing={'3rem'}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'properties'}>Properties</NavLink>
                <NavLink to={'about'}>About</NavLink>
                <NavLink to={'contact'}>Contact Us</NavLink>
            </HStack>
        </Flex>

    );
}
import {Center, Grid, GridItem} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function RootLayout() {
    return (
        <Grid maxW={'full'}>
            <GridItem
                position="fixed"
                w="100%"
                maxW={'full'}
                bg={'#eff3ec'}
                as={'main'}
                zIndex={'200'}>
                <Navbar/>
            </GridItem>
            <Center mt={'6.7rem'}>
                <Outlet />
            </Center>
            <GridItem>
                <Footer/>
            </GridItem>
        </Grid>
    );
}
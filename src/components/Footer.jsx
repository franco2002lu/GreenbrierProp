import {
    Box,
    Container,
    HStack,
    Text,
    VStack,
} from '@chakra-ui/react';
import {useEffect, useState} from "react";

export default function Footer() {
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
            <Box bg="#0D512C" textColor={"#f6f3e7"}>
                <Container
                    maxW={'7xl'}
                    py={5}
                    direction={{ base: 'column', md: 'row' }}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    {/*<Logo />*/}
                    <VStack alignItems={'start'} paddingY={'3rem'}>
                        <Text fontSize={'xl'} fontWeight={'bold'}>
                            Greenbrier Properties, LLC
                        </Text>
                        <HStack gap={{ base: '10rem', md: '15rem', lg: '30rem', xl: '30rem'}}>
                            <Text>
                                davidoliver@greenbrierpropertiesllc.com
                            </Text>
                            <Text>© 2023 Greenbrier Properties, LLC. All rights reserved</Text>
                        </HStack>
                    </VStack>
                </Container>
            </Box>
        );
    } else {
        return (
            <Box bg="#0D512C" textColor={"#f6f3e7"}>
                <Container
                    maxW={'7xl'}
                    py={5}
                    direction={{ base: 'column', md: 'row' }}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    {/*<Logo />*/}
                    <VStack alignItems={'start'} paddingY={'3rem'}>
                        <Text fontSize={'xl'} fontWeight={'bold'}>
                            Greenbrier Properties, LLC
                        </Text>
                        <Text>davidoliver@greenbrierpropertiesllc.com</Text>
                        <Text>© 2023 Greenbrier Properties, LLC. All rights reserved</Text>
                    </VStack>
                </Container>
            </Box>
        );
    }
}
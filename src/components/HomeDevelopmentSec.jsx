import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react'
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export default function HomeDevelopmentSec() {
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
            <Stack minH={'30rem'} direction={{ base: 'column', md: 'row' }} spacing={0}>
                <Flex p={0} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', lg: '4xl', xl: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    height: "30%",
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: "#9bb8d3",
                                    zIndex: -1,
                                }}>
                                Developments
                            </Text>
                            <br />{' '}
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'xl', xl: '2xl' }} color={'gray.500'}>
                            We also develop multifamily properties, hotels, and subdivisions. Learn more about our
                            development projects here.
                        </Text>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <NavLink to={'development'}>
                                <Button
                                    rounded={'full'}
                                    bg={"#7296B8"}
                                    color={'white'}
                                    _hover={{
                                        bg: "#2E5984",
                                    }}>
                                    Learn more
                                </Button>
                            </NavLink>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1} p={0} w={"full"}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://fosheeresidential.com/wp-content/uploads/2023/01/DJI_0189.jpg'
                        }
                    />
                </Flex>
            </Stack>
        )
    } else {
        return (
            <Flex padding={'2rem'} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        rounded={'md'}
                        src={
                            'https://fosheeresidential.com/wp-content/uploads/2023/01/DJI_0189.jpg'
                        }
                    />
                    <Heading fontSize={{ base: '3xl', lg: '4xl', xl: '5xl' }} align={"center"}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: "20%",
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: "#9bb8d3",
                                zIndex: -1,
                            }}>
                            Developments
                        </Text>
                        <br />{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'xl', xl: '2xl' }} color={'gray.500'}>
                        We also develop multifamily properties, hotels, and subdivisions. Learn more about our
                        development projects here.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align={"center"}>
                        <NavLink to={'development'}>
                            <Button
                                rounded={'full'}
                                bg={"#7296B8"}
                                color={'white'}
                                _hover={{
                                    bg: "#2E5984",
                                }}>
                                Learn more
                            </Button>
                        </NavLink>
                    </Stack>
                </Stack>
            </Flex>
        );
    }
}
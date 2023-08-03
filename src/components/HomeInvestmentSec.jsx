import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

export default function HomeInvestmentSec() {
    return (
        <Stack minH={'30rem'} direction={{ base: 'column', md: 'row' }} spacing={0}>
            <Flex flex={1} p={0}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images1.apartments.com/i2/Xx6TtdmvV5B1KEof9yxNGqolOQO0vbvScuXk_jifW_w/111/quail-ridge-columbus-ga-building-photo.jpg'
                    }
                />
            </Flex>
            <Flex p={0} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', lg: '4xl', xl: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: "#9bb8d3",
                                zIndex: -1,
                            }}>
                            Investments
                        </Text>
                        <br />{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'xl', xl: '2xl' }} color={'gray.500'}>
                        We have an extensive portfolio of investment properties. Learn about our past work here.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <NavLink to={'multifamily'}>
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
        </Stack>
    )
}
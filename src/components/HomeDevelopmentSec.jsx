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

export default function HomeDevelopmentSec() {
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
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
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
                        <Button
                            rounded={'full'}
                            bg={"#7296B8"}
                            color={'white'}
                            _hover={{
                                bg: "#2E5984",
                            }}>
                            <NavLink to={'development'}>Learn more</NavLink>
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} p={0}>
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
}
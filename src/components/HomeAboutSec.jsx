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

export default function HomeAboutSec() {
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
                            About us
                        </Text>
                        <br />{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'xl', xl: '2xl' }} color={'gray.500'}>
                        We are committed to a value-add approach for multifamily investing.
                        Learn more about our specific approach here.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            bg={"#7296B8"}
                            color={'white'}
                            _hover={{
                                bg: "#2E5984",
                            }}>
                            <NavLink to={'about'}>Learn more</NavLink>
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1} p={0}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fcdn.photos.sparkplatform.com%2Flex%2F20210420125724323034000000-o.jpg%3Fdate%3D2023-07-12&option=N&idlisting=listingmedia&w=1600&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-sothebys-bgsir-production-3.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Fsoldlisting.jpg'
                    }
                />
            </Flex>
        </Stack>
    )
}
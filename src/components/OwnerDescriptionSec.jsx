import {
    Container,
    Stack,
    Text,
    Heading,
    SimpleGrid,
    Image,
    Center,
    Box
} from '@chakra-ui/react'

export default function OwnerDescriptionSec() {
    return (
        <Container maxW={'7xl'} w={'full'}>

            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: '3rem', md: '5rem' }}
                py={{ base: 18, md: 24 }}
                maxW={'full'}>
                <Box align={'center'} maxW={'full'}>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={
                            'https://pbs.twimg.com/profile_images/633813267002036224/citnO0ZW_400x400.jpg'
                        }
                        fit={'cover'}
                        align={'center-center'}
                        w={{ base: '100%', sm: '400px', lg: '500px' }}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Box>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Center>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            David C. Oliver
                        </Heading>
                    </Center>
                    <Text fontSize={'lg'}>
                        David Oliver is the founding and managing member of Greenbrier Properties, LLC. He received a BBA from the University of Georgia in 1999 and a Masters in Accounting from the University of Georgia in 2000. Following graduation, he began at Dawn Properties, Inc. working on acquisitions, dispositions, construction, and property management of multifamily and residential properties. In 2005, he formed Greenbrier Properties, LLC for the purpose of acquiring, renovating, and managing B-range multifamily projects throughout the Southeast. During his career, David has purchased over 10,000 residential units. He has also owned and developed three subdivisions, six residential condo projects, three hotels, and over 150,000 sq. ft. of commercial space. David resides in Hattiesburg, MS with his wife, Kelly, and two kids, Carson and Cecile.
                    </Text>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}
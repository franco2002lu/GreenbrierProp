
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem
} from '@chakra-ui/react'

export default function AcquisitionCriteriaSec() {
    return (
        <Container maxW={'7xl'} w={'full'}>

            <SimpleGrid
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}
                maxW={'full'}>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            Our Strategy
                        </Heading>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider h={'1rem'} borderColor={useColorModeValue('gray.400', 'gray.600')} />
                        }>
                        <SimpleGrid
                            columns={{ base: 1, lg: 2 }}
                            spacing={{ base: '3rem', md: '5rem'}}>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={useColorModeValue("#0D512C", 'gray.400')}
                                    fontSize={'2xl'}
                                    fontWeight={'semibold'}>
                                    Value-Add Approach
                                </Text>
                                <Text fontSize={'lg'}>
                                    Our primary focus is acquiring value-add apartment properties in middle-tier
                                    markets throughout the Southeast.  We have long-standing relationships with lenders
                                    and brokers and excel in identifying off-market opportunities.  Once we have
                                    acquired a property, we place a strong emphasis on implementing capital
                                    improvements, both interior and exterior, to enhance the resident experience.
                                    Our goal is to increase property management efficiency by reducing expenses,
                                    increasing income, and repositioning properties as necessary.  Through these capital
                                    and operational improvements, we grow property values.<br /><br />

                                    In addition to acquiring existing apartment properties, Greenbrier also actively
                                    pursues ground-up multifamily development opportunities in markets with strong job
                                    and population growth.  This includes mixed-use developments, condo projects,
                                    build-to-rent subdivisions, and garden-style apartments.
                                </Text>
                            </VStack>
                            <Image
                                marginLeft={'5rem'}
                                rounded={'md'}
                                alt={'product image'}
                                src={
                                    'https://images1.apartments.com/i2/ViUIkddwHNd9mN7UQZ3BOFA40j39FJprQ_a2Ll2EH7g/111/the-sails-ocean-springs-ocean-springs-ms-exterior.jpg'
                                }
                                fit={'cover'}
                                align={'center'}
                                w={'80%'}
                                h={{ base: '100%', sm: '300px', lg: '400px' }}
                            />
                        </SimpleGrid>
                        <Box bg={'grey.200'}>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue("#0D512C", 'yellow.300')}
                                fontWeight={'semibold'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Benefits of Multifamily
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Reduced exposure to risk than other investment types
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'semibold'}>
                                            •
                                        </Text>{' '}
                                        Growth in demand because of larger market forces
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Increasing difficulty for consumers entering the housing market
                                    </ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Stability in the midst of recessions
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Hedge over inflation
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Ability to leverage depreciation and other tax benefits
                                    </ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue("#0D512C", 'yellow.300')}
                                fontWeight={'semibold'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Acquisition Criteria
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Class B
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        1970’s vintage or newer
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Size of 50 to 500 units
                                    </ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Garden style communities in markets of 50,000 or more people
                                    </ListItem>
                                    <ListItem>
                                        <Text as={'span'} fontWeight={'bold'}>
                                            •
                                        </Text>{' '}
                                        Underperforming or under-managed deals with attractive acquisition capitalization rates
                                    </ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}
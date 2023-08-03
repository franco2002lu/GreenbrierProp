import {
    Button,
    Flex,
    SimpleGrid, Stack,
    Text,
    useBreakpointValue,
    VStack
} from "@chakra-ui/react";
import React from "react";

export default function PropertiesPage() {
    return (
        <SimpleGrid
            w={'full'}
            rows={2}>
            <Flex
                w={'full'}
                h={'25rem'}
                backgroundImage={
                    'url(https://everydayinvestments.com/wp-content/uploads/2021/02/property-management-services.jpg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'center'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={'extrabold'}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl' })}>
                            Investments
                        </Text>
                        <Button
                            onClick={() => window.location.replace('/multifamily')}
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            Learn more
                        </Button>
                    </Stack>
                </VStack>
            </Flex>
            <Flex
                w={'full'}
                h={'25rem'}
                backgroundImage={
                    'url(https://www.mashvisor.com/blog/wp-content/uploads/2019/07/7-Things-You-Need-to-Know-About-Commercial-Real-Estate.jpg)'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'center'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={'extrabold'}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl' })}>
                            Developments
                        </Text>
                        <Button
                            onClick={() => window.location.replace('/development')}
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            Learn more
                        </Button>
                    </Stack>
                </VStack>
            </Flex>
        </ SimpleGrid>
    );
}
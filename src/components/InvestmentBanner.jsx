import { Flex, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function InvestmentBanner() {
    return (
        <Flex
            w={'full'}
            backgroundImage={
                'url(https://www.hattiesburgamerican.com/gcdn/presto/2018/08/18/PHAT/eb2ecb79-6575-4fa4-ae06-3a70b2ff09a6-Hotel_Indigo_1.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                py={'5rem'}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Text
                    color={'white'}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl'})}>
                    Investments
                </Text>
            </VStack>
        </Flex>
    )
}
import {Flex, Text, useBreakpointValue, VStack} from "@chakra-ui/react";


export default function StaffBanner() {
    return (
        <Flex
            w={'full'}
            bg={"#eff3ec"}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8, lg: 12})}
                py={'2rem'}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Text
                    color={'white'}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl'})}>
                    Biography
                </Text>
            </VStack>
        </Flex>

    );
}
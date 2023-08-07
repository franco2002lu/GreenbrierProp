import {Center, Text} from "@chakra-ui/react";


export default function HomeFiller() {
    return (
        <Center
            align={'center'}
            w={'full'}
            bg={"#0D512C"}
            textColor={"#f6f3e7"}
            fontSize={{base: 'xl', md:'x-large', lg: 'xx-large', xl: 'xxx-large' }}
            fontWeight={'bold'}
            p={'3rem'}>
            <Text>
                Unlocking potential, embracing opportunity
            </Text>
        </Center>

    );
}
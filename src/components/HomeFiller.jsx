import {Center, Text} from "@chakra-ui/react";


export default function HomeFiller() {
    return (
        <Center
            bg={"#0D512C"}
            textColor={"#f6f3e7"}
            fontSize={{base: 'md', md:'large', lg: 'xx-large', xl: 'xxx-large' }}
            fontWeight={'bold'}
            p={'4rem'}>
            <Text>
                Unlocking potential, embracing opportunity
            </Text>
        </Center>

    );
}
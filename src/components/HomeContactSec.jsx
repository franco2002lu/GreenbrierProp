import {Heading, Button, VStack, Text} from '@chakra-ui/react'

export default function HomeContactSec() {
    return (
        <VStack textAlign="center" py={'3rem'} px={'1rem'} bg={"#eff3ec"}>
            <Heading
                mb={'1rem'}
                display="inline-block"
                size="xl"
                bg={"black"}
                backgroundClip="text">
                <Text fontWeight={"bold"}>
                    Let's Connect
                </Text>
            </Heading>
            <Button
                onClick={() => window.location.replace('/contact')}
                bg={"#0D512C"}
                color={"#f6f3e7"}
                _hover={{
                    bg: "#8ca968",
                }}
                variant="solid">
                Contact Us
            </Button>
        </VStack>
    )
}
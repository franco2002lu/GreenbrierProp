import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Spacer,
    useToast
} from '@chakra-ui/react';
import {
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import {Form} from "react-router-dom";
import ScrollToTop from "../functions/ScrollToTop";
import { useForm, ValidationError } from '@formspree/react';
import {CheckCircleIcon} from "@chakra-ui/icons";

export default function ContactPage() {
    const [state, handleSubmit] = useForm("mnqkjwgv");

    // todo: implement reCAPTCHA

    ScrollToTop();

    const toast = useToast();
    const showToast = () => {
        toast({title: 'Success',
            description: 'Your email has been sent.',
            duration: 3000,
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <CheckCircleIcon />
        })
    }


    return (
        <Container
            bg={"#C2D4BB"}
            maxW="full"
            maxH={'full'}
            mt={0}
            centerContent
            overflow="hidden"
            paddingY={'2rem'}>
            <Flex>
                <Box
                    bg={"#0D512C"}
                    color={"#f6f3e7"}
                    borderRadius="lg"
                    m={{ sm: 4, md: 6, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: '2rem', md: '2rem', lg: '3rem' }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color={"#f6f3e7"}>
                                        Fill out the form below to contact us.
                                    </Text>
                                    <Box paddingTop={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={7} alignItems="baseline">
                                            <Spacer/>
                                            <HStack>
                                                <MdEmail color={"#8ca968"} size="20px" />
                                                <Text fontWeight={'bold'}>
                                                    davidoliver@greenbrierpropertiesllc.com
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <MdLocationOn color={"#8ca968"} size="20px" />
                                                <Text fontWeight={'bold'}>
                                                    Hattiesburg, MS
                                                </Text>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg={"#eff3ec"} borderRadius="lg">
                                    <Form onSubmit={(val) => {
                                        handleSubmit(val).then(r => showToast());
                                    }
                                        }>
                                        <Box m={8} color="black">
                                            <VStack spacing={3}>
                                                <HStack>
                                                    <FormControl isRequired id="form_name">
                                                        <FormLabel>Your Name:</FormLabel>
                                                        <InputGroup borderColor={"#8ca968"}>
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={<BsPerson color={"gray.800"} />}
                                                            />
                                                            <Input name={'Name'} type="text" size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired id="form_email">
                                                        <FormLabel>E-mail:</FormLabel>
                                                        <InputGroup borderColor={"#8ca968"}>
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={<MdOutlineEmail color={"gray.800"} />}
                                                            />
                                                            <Input name={'Email'} type="text" size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                </HStack>
                                                <FormControl isRequired id="form_subject">
                                                    <FormLabel>Subject:</FormLabel>
                                                    <InputGroup borderColor={"#8ca968"}>
                                                        <Input
                                                            name={'Subject'}
                                                            type="text"
                                                            size="md"
                                                            placeholder={'Enter the subject here'}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="form_message">
                                                    <FormLabel>Message:</FormLabel>
                                                    <Textarea
                                                        name={'Message'}
                                                        minH={'10rem'}
                                                        borderColor={"#8ca968"}
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="Enter your message here"
                                                    />
                                                </FormControl>
                                                <FormControl id="form_button" float="right">
                                                    <Button
                                                        type={'submit'}
                                                        variant="ghost"
                                                        bg={"green.800"}
                                                        color={"#eff3ec"}
                                                        _hover={{bg: '#8ca968'}}>
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Form>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}

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
    Textarea
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import {Form} from "react-router-dom";
import ScrollToTop from "../functions/ScrollToTop";

// for emailing form: https://www.youtube.com/watch?v=0X0kovjzLrw
export default function ContactPage() {
    ScrollToTop();
    return (
        // <Box maxW={'full'}>
        //     <Form method={'post'} action={'https://formsubmit.co/EMAILHERE'}>
        //         <FormControl isRequired mb={'40px'}>
        //             <FormLabel>Subject:</FormLabel>
        //             <Input type={"email"} name={"email"}/>
        //             <FormHelperText>Enter the email subject</FormHelperText>
        //         </FormControl>
        //
        //         <FormControl isRequired mb={'20px'} >
        //             <FormLabel>Message:</FormLabel>
        //             <Textarea placeholder={'Enter your message here'} name={'description'} />
        //         </FormControl>
        //
        //         {/*<FormControl display={'flex'} alignItems={'center'} mb={'40px'}>*/}
        //         {/*    <Checkbox name={'isPriority'} size={'lg'} colorScheme={'purple'}/>*/}
        //         {/*    <FormLabel ml={'10px'} mb={'0px'}>Make this a priority task.</FormLabel>*/}
        //         {/*</FormControl>*/}
        //
        //         <Button type={'submit'}>Submit</Button>
        //     </Form>
        // </Box>

        <Container bg={"#C2D4BB"} maxW="full" maxH={'full'} mt={0} centerContent overflow="hidden" paddingBottom={'2rem'}>
            <Flex>
                <Box
                    bg={"#0D512C"}
                    color={"#f6f3e7"}
                    borderRadius="lg"
                    m={{ sm: 4, md: 6, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color={"#f6f3e7"}>
                                        Fill out the form below to contact us.
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={7} alignItems="baseline">
                                            <HStack>
                                                <MdPhone color={"#8ca968"} size="20px" />
                                                <Text fontWeight={'bold'}>
                                                    NUMBER HERE
                                                </Text>
                                            </HStack>
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
                                    <Form method={'post'} action={'https://formsubmit.co/EMAILHERE'}>
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
                                                            <Input type="text" size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormControl isRequired id="form_email">
                                                        <FormLabel>E-mail:</FormLabel>
                                                        <InputGroup borderColor={"#8ca968"}>
                                                            <InputLeftElement
                                                                pointerEvents="none"
                                                                children={<MdOutlineEmail color={"gray.800"} />}
                                                            />
                                                            <Input type="text" size="md" />
                                                        </InputGroup>
                                                    </FormControl>
                                                </HStack>
                                                <FormControl isRequired id="form_subject">
                                                    <FormLabel>Subject:</FormLabel>
                                                    <InputGroup borderColor={"#8ca968"}>
                                                        <Input
                                                            type="text"
                                                               size="md"
                                                               placeholder={'Enter the subject here'}
                                                        />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="form_message">
                                                    <FormLabel>Message:</FormLabel>
                                                    <Textarea
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
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from '@chakra-ui/react'
import { BsArrowUpRight} from 'react-icons/bs'
import DevelopmentCarousel from "./DevelopmentCarousel";

export default function DevelopmentCard({dev}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Center py={'1rem'} key={dev.id}>
            <Box
                w="xs"
                rounded={'sm'}
                // my={'1rem'}
                mx={[0, 5]}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                // boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
            >
                <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                    <Img
                        src={
                            dev.image[0]
                        }
                        roundedTop={'sm'}
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={'Blog Image'}
                    />
                </Box>
                <Box p={4}>
                    <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
                        <Text fontSize={'xs'} fontWeight="medium">
                            {dev.location}
                        </Text>
                    </Box>
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                        {dev.name}
                    </Heading>
                    {/*<Text color={'gray.500'} noOfLines={2}>*/}
                    {/*    {dev.desc}*/}
                    {/*</Text>*/}
                </Box>
                    <Flex
                        onClick={onOpen}
                        borderTop={'1px'}
                        color={'black'}
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        w="full">
                        <Text fontSize={'md'} fontWeight={'semibold'}>
                            Learn more
                        </Text>
                        <BsArrowUpRight />
                    </Flex>
            </Box>

            <Modal onClose={onClose} size={'2xl'} isOpen={isOpen} borderRadius={'md'}>
                <ModalOverlay />
                <ModalContent>
                    <DevelopmentCarousel img={{image_list: dev.image}}/>
                    <ModalHeader>{dev.name}</ModalHeader>
                    <ModalBody>
                        <Text textColor={'black'}>
                            {dev.desc}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>
    )
}
import {
    Flex,
    Container,
    Stack,
    Image
} from "@chakra-ui/react";
import {useEffect, useState} from "react";

// functions:
import {getPropertyData} from "../functions/PropertyContent";
import InvestmentBanner from "../components/InvestmentBanner";
import InvestmentList from "../components/InvestmentList";
import ScrollToTop from "../functions/ScrollToTop";

export default function MultifamilyPage() {
    const [content, setContent] = useState(undefined);

    ScrollToTop();

    useEffect(() => {
        getPropertyData('multifamily')
            .then(res => {
                setContent(res)
            }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <Container minW={'full'} paddingX={'0px'}>
            <InvestmentBanner/>
            <Stack minH={'30rem'} direction={{ base: 'column', md: 'row' }} paddingY={'2rem'}>
                <Flex p={0} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <InvestmentList content={content} state={'AL'} />
                        <InvestmentList content={content} state={'AR'} />
                        <InvestmentList content={content} state={'CO'} />
                        <InvestmentList content={content} state={'FL'} />
                        <InvestmentList content={content} state={'GA'} />
                        <InvestmentList content={content} state={'IN'} />
                        <InvestmentList content={content} state={'KY'} />
                    </Stack>
                </Flex>
                <Flex flex={1} p={0} align={'self-end'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Image
                            borderRadius={'md'}
                            alt={'Login Image'}
                            objectFit={'scale-down'}
                            src={'https://www.commercialcafe.com/blog/wp-content/uploads/sites/10/shutterstock_224776564_1028x686-compressor.jpg'}
                        />
                        <InvestmentList content={content} state={'LA'} />
                        <InvestmentList content={content} state={'MS'} />
                        <InvestmentList content={content} state={'SC'} />
                        <InvestmentList content={content} state={'TX'} />
                    </Stack>
                </Flex>
            </Stack>
        </Container>
    );

    // return (
    //     <Container minW={'full'} paddingX={'0px'}>
    //         <InvestmentBanner/>
    //         <TableContainer>
    //             <Table variant='simple'>
    //                 <TableCaption>Past Investments by Greenbrier Properties, LLC</TableCaption>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         return (
    //                             <Tr>
    //                                 <Td>{item.community}</Td>
    //                                 <Td>{item.city}</Td>
    //                                 <Td>{item.state}</Td>
    //                                 <Td>{item.numUnits}</Td>
    //                             </Tr>
    //                         )
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //     </Container>
    // );
}

    //     <Container minW={'full'} paddingX={'0px'}>
    //         <InvestmentBanner />
    //         <TableContainer>
    //             <Heading bg={'gray.400'} fontSize={'3xl'}> Alabama </Heading>
    //             <Table variant='simple' colorScheme={"blackAlpha"} >
    //                 <Thead fontWeight={'extrabold'} bg={'gray.200'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'AL') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Arkansas</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'AR') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Colorado</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'CO') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Florida</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'FL') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Georgia</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'GA') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}> Indiana </Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'IN') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Kentucky</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'KY') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Louisiana</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'LA') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Mississippi</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'MS') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>South Carolina</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'SC') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //         <TableContainer>
    //             <Heading fontSize={'3xl'}>Texas</Heading>
    //             <Table variant='simple'>
    //                 <Thead fontWeight={'extrabold'}>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Thead>
    //                 <Tbody>
    //                     {content && content.map(item => {
    //                         if (item.state === 'TX') {
    //                             return (
    //                                 <Tr>
    //                                     <Td>{item.community}</Td>
    //                                     <Td>{item.city}</Td>
    //                                     <Td>{item.state}</Td>
    //                                     <Td>{item.numUnits}</Td>
    //                                 </Tr>
    //                             )
    //                         }
    //                     })}
    //                 </Tbody>
    //                 <Tfoot>
    //                     <Tr>
    //                         <Th>Community</Th>
    //                         <Th>City</Th>
    //                         <Th>State</Th>
    //                         <Th># of Units</Th>
    //                     </Tr>
    //                 </Tfoot>
    //             </Table>
    //         </TableContainer>
    //     </Container>
    // )



    // let curState = ''
    // console.log(content)
    // content.forEach(item => {
    //     if (item.state === curState) {
    //         stateList[stateList.length - 1].push(item);
    //     } else {
    //         changeState(item.state);
    //         stateList.push([]);
    //         stateList[0].push(item);
    //     }
    // })
    // console.log(content.length)
    // for (let i = 0; i < content.length; i++) {
    //     // if content[i].state = curState, add content[i] into the set fo the state
    //     // if content[i].state != curState, create new element in set with the new state, update curstate
    //     if (content[i].state === curState) {
    //         stateList[stateList.length - 1].push(content[i]);
    //     } else {
    //         changeState(content[i].state);
    //         stateList.push([]);
    //         stateList[0].push(content[i]);
    //     }
    // }


    //
    // console.log(stateList)

    // return (
    //     <Container minW={'full'} paddingX={'0px'}>
    //         <InvestmentBanner />
    //
    //         {/*<SimpleGrid spacing={'20px'} minChildWidth={'300px'} p={'30px'} w={'1500px'} alignContent={'Heading'}>*/}
    //         {/*    {content && content.map(item => (*/}
    //         {/*        <Card key={item._id} borderTop={'8px'} borderColor={'green.500'} bg={'white'}>*/}
    //         {/*            <CardHeading>*/}
    //         {/*                <Flex gap={5}>*/}
    //         {/*                    <Box>*/}
    //         {/*                        <Heading as={'h3'} size={'sm'}>{item.community}, {item.city}, {item.state}</Heading>*/}
    //         {/*                        <Text>{item.location}</Text>*/}
    //         {/*                    </Box>*/}
    //         {/*                </Flex>*/}
    //         {/*            </CardHeading>*/}
    //         {/*            <CardBody color={'gray.500'}>*/}
    //         {/*                <Text>{item.description}</Text>*/}
    //         {/*            </CardBody>*/}
    //
    //         {/*            <Divider borderColor={'gray.200'}/>*/}
    //
    //         {/*            <CardFooter>*/}
    //         {/*                <Button onClick={onOpen} variant={'ghost'} leftIcon={<InfoIcon />}>Learn more</Button>*/}
    //         {/*            </CardFooter>*/}
    //
    //         {/*            /!*pop up for every clicked property*!/*/}
    //         {/*            <Modal onClose={onClose} size={'2xl'} isOpen={isOpen}>*/}
    //         {/*                <ModalOverlay />*/}
    //         {/*                <ModalContent>*/}
    //         {/*                    <ModalHeading>Modal Title</ModalHeading>*/}
    //         {/*                    <ModalCloseButton />*/}
    //         {/*                    <ModalBody>*/}
    //         {/*                        {item.description}*/}
    //         {/*                    </ModalBody>*/}
    //         {/*                    <ModalFooter>*/}
    //         {/*                        <Button onClick={onClose}>Close</Button>*/}
    //         {/*                    </ModalFooter>*/}
    //         {/*                </ModalContent>*/}
    //         {/*            </Modal>*/}
    //         {/*        </Card>*/}
    //         {/*    ))}*/}
    //         {/*</SimpleGrid>*/}
    //
    //         <SimpleGrid spacing={'20px'}
    //                     minChildWidth={'300px'}
    //                     p={'30px'}
    //                     w={'1500px'}
    //                     alignContent={'center'}
    //                     columns={2}>
    //             <GridItem>
    //                 <Heading>Alabama</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "AL") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Arkansas</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "AR") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Colorado</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "CO") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Florida</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "FL") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Georgia</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "GA") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Indiana</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "IN") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Kentucky</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "KY") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Louisiana</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "LA") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Mississippi</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "MS") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>South Carolina</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "SC") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //             <GridItem>
    //                 <Heading>Texas</Heading>
    //                 {content && content.map(item => {
    //                     if (item.state === "TX") {
    //                         return (<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);
    //                     }
    //                 })}
    //             </GridItem>
    //
    //             {/*{content && content.map(item => {*/}
    //             {/*    // if (curState !== item.state) {*/}
    //             {/*    //     return <Heading>{states[item.state]}</Heading>;*/}
    //             {/*    // }*/}
    //             {/*    //     return <Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>*/}
    //             {/*    if (curState === item.state) {*/}
    //             {/*        return (*/}
    //             {/*            <SimpleGrid columns={1}*/}
    //             {/*                        autoRows*/}
    //             {/*                        spacing={'1.5rem'}*/}
    //             {/*                        minChildWidth={'300px'}*/}
    //             {/*                        p={'30px'}*/}
    //             {/*                        w={'full'}*/}
    //             {/*                        alignContent={'center'}>*/}
    //             {/*                <GridItem colSpan={'1'}>*/}
    //             {/*                    <Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>*/}
    //             {/*                </GridItem>*/}
    //             {/*            </SimpleGrid>);*/}
    //             {/*    } else {*/}
    //             {/*        // curState = item.state;*/}
    //             {/*        return (*/}
    //             {/*            <Box>*/}
    //             {/*                <Heading>{states[item.state]}</Heading>*/}
    //             {/*                <Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>*/}
    //             {/*            </Box>*/}
    //             {/*        );*/}
    //             {/*    }*/}
    //             {/*}*/}
    //             {/*)}*/}
    //         </SimpleGrid>
    //
    //         {/*idea: make a set of sets, where the inner level contains all the information and the outer level only has states*/}
    //         {/* make a dictionary of the format state: */}
    //         {/*<SimpleGrid spacing={'20px'}*/}
    //         {/*            minChildWidth={'300px'}*/}
    //         {/*            p={'30px'}*/}
    //         {/*            w={'1500px'}*/}
    //         {/*            alignContent={'center'}*/}
    //         {/*            columns={2}>*/}
    //         {/*    {content && content.map(item => {*/}
    //         {/*        // return(<Text>{item.community}, {item.city}, {item.state}, {item.numUnits}</Text>);*/}
    //         {/*        return(<Text>hello</Text>)*/}
    //         {/*        }*/}
    //         {/*    )}*/}
    //         {/*</SimpleGrid>*/}
    //     </Container>
    // );
// }
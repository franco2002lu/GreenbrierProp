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

    const images = [
        {
            image:
                'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/4fc754a847772310eaf96b62428fbae3-full.webp',
        },
        {
            image:
                'https://images.getaroom-cdn.com/image/upload/s--xgRNf3QW--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1676395836/2a10f5f6d5af1aa5757ca75ff7a3ba98ff8f02ac?atc=e7cd1cfa',
        },
        {
            image:
                'https://digital.ihg.com/is/image/ihg/hotel-indigo-hattiesburg-5631485311-2x1',
        },
        {
            image:
                'https://digital.ihg.com/is/image/ihg/hotel-indigo-hattiesburg-5631485311-2x1',
        },
        {
            image:
                'https://digital.ihg.com/is/image/ihg/hotel-indigo-hattiesburg-5631485311-2x1',
        },
    ]

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
                <Stack minH={'30rem'} direction={{base: 'column', md: 'row'}} paddingY={'5rem'} paddingX={'8rem'}>
                    <Flex p={0} flex={1} align={'top'} justify={'center'}>
                        <Stack spacing={'10rem'} w={'fit-content'} maxW={'lg'} >
                            {images.map((item, id) => (
                                <Image
                                    key={id}
                                    borderRadius={'md'}
                                    alt={'Login Image'}
                                    objectFit={'scale-down'}
                                    src={item.image}
                                />
                            ))}
                        </Stack>
                    </Flex>
                    <Flex flex={1} p={0} align={'center'} justify={'center'}>
                        <Stack spacing={6} w={'fit-content'} maxW={'lg'} paddingLeft={'2rem'}>
                            <InvestmentList content={content} state={'AL'}/>
                            <InvestmentList content={content} state={'AR'}/>
                            <InvestmentList content={content} state={'CO'}/>
                            <InvestmentList content={content} state={'FL'}/>
                            <InvestmentList content={content} state={'GA'}/>
                            <InvestmentList content={content} state={'IN'}/>
                            <InvestmentList content={content} state={'KY'}/>
                            <InvestmentList content={content} state={'LA'}/>
                            <InvestmentList content={content} state={'MS'}/>
                            <InvestmentList content={content} state={'SC'}/>
                            <InvestmentList content={content} state={'TX'}/>
                        </Stack>
                    </Flex>
                </Stack>

        </Container>
    );


    // return (
    //     <Container minW={'full'} paddingX={'0px'}>
    //         <InvestmentBanner/>
    //         <Stack minH={'30rem'} direction={{base: 'column', md: 'row'}} paddingY={'2rem'}>
    //             <Flex p={0} flex={1} align={'center'} justify={'center'}>
    //                 <Stack spacing={6} w={'full'} maxW={'lg'}>
    //                     <InvestmentList content={content} state={'AL'}/>
    //                     <InvestmentList content={content} state={'AR'}/>
    //                     <InvestmentList content={content} state={'CO'}/>
    //                     <InvestmentList content={content} state={'FL'}/>
    //                     <InvestmentList content={content} state={'GA'}/>
    //                     <InvestmentList content={content} state={'IN'}/>
    //                     <InvestmentList content={content} state={'KY'}/>
    //                 </Stack>
    //             </Flex>
    //             <Flex flex={1} p={0} align={'self-end'} justify={'center'}>
    //                 <Stack spacing={6} w={'full'} maxW={'lg'}>
    //                     <Image
    //                         borderRadius={'md'}
    //                         alt={'Login Image'}
    //                         objectFit={'scale-down'}
    //                         src={'https://www.commercialcafe.com/blog/wp-content/uploads/sites/10/shutterstock_224776564_1028x686-compressor.jpg'}
    //                     />
    //                     <InvestmentList content={content} state={'LA'}/>
    //                     <InvestmentList content={content} state={'MS'}/>
    //                     <InvestmentList content={content} state={'SC'}/>
    //                     <InvestmentList content={content} state={'TX'}/>
    //                 </Stack>
    //             </Flex>
    //         </Stack>
    //     </Container>
    // );
}
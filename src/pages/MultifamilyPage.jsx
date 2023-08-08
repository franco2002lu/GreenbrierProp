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
    const [screen, setScreen] = useState("")
    ScrollToTop();

    const images = [
        {
            image:
                'https://images.squarespace-cdn.com/content/v1/52cc6178e4b0bdc9af0f726a/1389649472846-JFUT1CCA8TJBA663JSAH/500+Street+View.jpg?format=1500w',
        },
        {
            image:
                'https://images1.loopnet.com/i2/Q2-A9OhocG_E1i7KRIKIfB-Be0r48GPBfLfPwvsRqRE/110/836-838-E-Euclid-Ave-Lexington-KY-Primary-Photo-1-Large.jpg',
        },
        {
            image:
                'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/4fc754a847772310eaf96b62428fbae3-full.webp',
        },
        {
            image:
                'https://images1.apartments.com/i2/K9In5k3DhP-eHzMdlAl49iLS9N5An3NWZqWeisoQUbs/111/collins-mill-apartments-milton-fl-building-photo.jpg',
        },
        {
            image:
                'https://cdn.hotelplanner.com/Common/Images/Hotels/3836593_1.jpg',
        },
        {
            image:
                'https://images1.apartments.com/i2/Pv-7o7EmvFPUhbo6pJSROROYg-C8f57yEl1w7qBpDCE/111/the-gates-at-three-rivers-apartments-gulfport-ms-building-photo.jpg',
        },
        {
            image:
                'https://images1.loopnet.com/i2/4-ccXX72kcJyhVGn4wR3h_JFEDzCFFOvDlQ8etEs7H4/112/image.jpg',
        },
    ]

    useEffect(() => {
        const details = navigator.userAgent;
        const regexp = /android|iphone|kindle|ipad/i;
        const isMobileDevice = regexp.test(details);

        if (isMobileDevice) {
            setScreen("mobile")
        } else {
            setScreen("laptop")
        }
    }, [])

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
                <Stack minH={'30rem'}
                       direction={{base: 'column', md: 'row'}}
                       paddingY={(screen === 'laptop') ? '5rem' : '2rem'}
                       paddingX={(screen === 'laptop') ? '8rem' : '1rem'}>
                    <Flex p={0}
                          flex={1}
                          align={'top'}
                          justify={'center'}
                          display={(screen === 'laptop') ? 'block' : 'none'}>
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
                        <Stack spacing={6}
                               w={'fit-content'}
                               maxW={'lg'}
                               paddingLeft={(screen === 'laptop') ? '2rem' : '0rem'}
                               paddingX={(screen === 'laptop') ? '0rem' : '2rem'}>
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
}
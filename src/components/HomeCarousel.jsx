import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Heading,
    Center,
} from '@chakra-ui/react'

import Slider from 'react-slick'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function HomeCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Greenbrier Properties, LLC',
            image:
                'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/4fc754a847772310eaf96b62428fbae3-full.webp',
        },
        {
            title: 'Greenbrier Properties, LLC',
            image:
                'https://images.getaroom-cdn.com/image/upload/s--xgRNf3QW--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1676395836/2a10f5f6d5af1aa5757ca75ff7a3ba98ff8f02ac?atc=e7cd1cfa',
        },
        {
            title: 'Greenbrier Properties, LLC',
            image:
                'https://digital.ihg.com/is/image/ihg/hotel-indigo-hattiesburg-5631485311-2x1',
        },
    ]

    return (
        <Box position={'relative'} height={'40rem'} width={'full'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                color={'gray.300'}
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <AiOutlineLeft size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right_arrow"
                color={'gray.300'}
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <AiOutlineRight size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'2xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={card.image}
                    >

                        <Center size="container.xxl"
                                   height="640px"
                                   position="relative"
                                   backdropFilter='auto'
                                   backdropBlur='7px'
                                    paddingBottom={'1rem'}>
                            <Heading fontSize={{ base: '4xl', md: '4xl', lg: '5xl', xl:'6xl'}}
                                     fontWeight={'bold'}
                                     color={"#f6f3e7"}>
                                {card.title}
                            </Heading>
                        </Center>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}
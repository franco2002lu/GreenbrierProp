import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Heading,
    Center,
} from '@chakra-ui/react'
// And react-slick as our Carousel Lib
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

export default function DevelopmentCarousel({img}) {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '.5rem', md: '.5rem' })

    return (
        <Box position={'relative'} height={'20rem'} width={'full'} overflow={'hidden'} borderTopRadius={'md'}>
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
                <AiOutlineLeft size="20px" />
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
                <AiOutlineRight size="20px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {img.image_list.map((card, index) => (
                    <Box
                        key={index}
                        height={'sm'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={card}>

                        <Center size="container.xxl"
                                height="640px"
                                position="relative"
                                backdropFilter='auto'
                                paddingBottom={'1rem'}>
                            <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                                     fontWeight={'bold'}
                                     color={"#f6f3e7"}>
                            </Heading>
                        </Center>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}
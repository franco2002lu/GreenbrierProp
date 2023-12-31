import HomeCarousel from "../components/HomeCarousel"
import {Container} from "@chakra-ui/react";
import HomeAboutSec from "../components/HomeAboutSec";
import HomeFiller from "../components/HomeFiller";
import HomeDevelopmentSec from "../components/HomeDevelopmentSec";
import HomeInvestmentSec from "../components/HomeInvestmentSec";
import HomeContactSec from "../components/HomeContactSec";
import ScrollToTop from "../functions/ScrollToTop";

export default function HomePage() {
    ScrollToTop();

    return (
        <Container minW={'full'} paddingX={'0px'}>
            <HomeCarousel />
            <HomeFiller />
            <HomeAboutSec />
            <HomeInvestmentSec />
            <HomeDevelopmentSec />
            <HomeContactSec />
        </Container>
    );
}
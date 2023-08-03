import {Container} from "@chakra-ui/react";
import AboutBanner from "../components/AboutBanner";
import StaffBanner from "../components/StaffBanner";
import AcquisitionCriteriaSec from "../components/AcquisitionCriteriaSec";
import OwnerDescriptionSec from "../components/OwnerDescriptionSec";
import ScrollToTop from "../functions/ScrollToTop";

export default function AboutPage() {
    ScrollToTop();
    return (
        <Container minW={'full'} paddingX={'0px'}>
            <AboutBanner />
            <AcquisitionCriteriaSec />
            <StaffBanner />
            <OwnerDescriptionSec />
        </Container>
    );
}
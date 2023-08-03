import {useEffect, useState} from "react";
import {Container, SimpleGrid} from "@chakra-ui/react";

// functions:
import {getPropertyData} from "../functions/PropertyContent";
import DevelopmentCard from "../components/DevelopmentCard";
import DevelopmentBanner from "../components/DevelopmentBanner";

export default function DevelopmentPage() {
    const [content, setContent] = useState(undefined);

    useEffect(() => {
        getPropertyData('development')
            .then(res => {
                setContent(res)
            }).catch((err) => {console.log(err)})
    }, []);

    return (
        <Container minW={'full'} paddingX={'0px'}>
            <DevelopmentBanner />
            <SimpleGrid
                columns={{ base: 1, sm:2, md:3, lg: 4}}
                autoRows
                spacing={'1.5rem'}
                minChildWidth={'300px'}
                p={'30px'}
                w={'full'}
                alignContent={'center'}
                paddingY={'3.5rem'}>
                {content && content.map(item => (
                    <DevelopmentCard key={item.id} dev={{name: item.name, location: item.location, desc: item.description, image: item.image}} />
                ))}
            </SimpleGrid>
        </Container>
    );
}
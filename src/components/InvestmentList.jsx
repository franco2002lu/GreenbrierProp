import {Container, Heading, List, ListItem, Text, useBreakpointValue} from "@chakra-ui/react";

export default function InvestmentList({state, content}) {
    const states = {
        "AL": "Alabama",
        "AK": "Alaska",
        "AZ": "Arizona",
        "AR": "Arkansas",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DE": "Delaware",
        "FL": "Florida",
        "GA": "Georgia",
        "HI": "Hawaii",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "IA": "Iowa",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Louisiana",
        "ME": "Maine",
        "MD": "Maryland",
        "MA": "Massachusetts",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MS": "Mississippi",
        "MO": "Missouri",
        "MT": "Montana",
        "NE": "Nebraska",
        "NV": "Nevada",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NY": "New York",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PA": "Pennsylvania",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VT": "Vermont",
        "VA": "Virginia",
        "WA": "Washington",
        "WV": "West Virginia",
        "WI": "Wisconsin",
        "WY": "Wyoming"
    }

    return (
        <Container minW={'full'} paddingX={'0px'}>
            {/*<Heading fontSize={'3xl'}>*/}
            {/*    {states[state]}*/}
            {/*</Heading>*/}
            <Heading fontSize={{ base: 'xl', lg: '2xl', xl: '3xl' }} paddingBottom={'2rem'}>
                <Text
                    as={'span'}
                    position={'relative'}
                    _after={{
                        content: "''",
                        width: 'full',
                        height: useBreakpointValue({ base: '10%', md: '20%' }),
                        position: 'absolute',
                        bottom: '-1rem',
                        left: 0,
                        bg: "#8ca968",
                        zIndex: -1,
                    }}>
                    {states[state]}
                </Text>
                <br />{' '}
            </Heading>
            {content && content.map(item => {
                if (item.state===state) {
                    return(
                        <List>
                            <ListItem>{item.community}, {item.city}, {item.state}, {item.numUnits} units</ListItem>
                        </List>);
                } else {
                    return <></>
                }
            })}
        </Container>
    );
}
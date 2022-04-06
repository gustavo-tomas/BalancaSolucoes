import 
{ 
    Box,
    Text,
    Divider,
    Stack,
} from "@chakra-ui/react";

interface BodyProps
{
    title: String,
    text: String,
    color: string,
}

export default function Body({ title, text, color }: BodyProps) {

    return(
        <>

            <Box
                bg={color}
                borderRadius='75px'
                height={{base: '650px', md: '650px', lg: '650px'}}
                width={{base: '350px', md: '350px', lg: '350px'}}
                paddingTop='90px'
                marginLeft='40px'
                marginRight='40px'
            >
                <Text
                    mt={"1rem"}
                    alignContent='center'
                    align='center'
                    color="black"
                    fontSize='32px'
                    mb='30px'
                >
                    {title}
                </Text>

                <Stack
                    align='center'
                >               
                    <Divider 
                        borderColor={'black'}
                        width={'50%'}
                    />
                </Stack>  

                <Text
                    mt='30px'
                    align='center'
                    color="black"
                    paddingLeft='45px'
                    paddingRight='45px'
                    fontSize='24px'
                >
                    {text}
                </Text>
            </Box>
        </>
    )
    
}
import {Box,Flex,Heading,Text} from '@chakra-ui/react'


export default function View({data}){
    if (data.length === 0){ 
    return <Box flex={1} w={'full'} bg={'#18181b'} mr={'4'} mt={'10'} p={'5'} pb={'4'} border={'1px solid'} borderColor={'#303036'} borderRadius={'12'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Heading size={'lg'} color={'gray.600'}>
                Meal History
            </Heading>

        </Flex>
        {
            
            <Flex  mt={'4'} justifyContent={'space-between'} alignItems={'center'}  p={'4'} borderRadius={'8'}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Text ml={'3'} fontWeight={'bold'} color={'gray.600'}>
                       ---
                    </Text>

                </Flex>
                <Text>
                   ---
                </Text>
            </Flex>

        }

    </Box>

    }else{
        return <Box flex={1} w={'full'} bg={'#18181b'}  mt={'10'} p={'5'} pb={'4'} border={'1px solid'} borderColor={'#303036'} borderRadius={'12'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Heading size={'lg'} color={'gray.600'}>
                Meal History
            </Heading>

        </Flex>
        {
            data.map(item=><>
            <Flex mt={'4'} justifyContent={'space-between'} alignItems={'center'}  p={'4'} borderRadius={'8'}>
                <Flex alignItems={'center'} justifyContent={'center'} w={'200px'} overflow={'hidden'}>
                    <Text ml={'3'} fontWeight={'bold'} color={'gray.600'} fontSize={'lg'}>
                        {item.Name}
                    </Text>
                    

                </Flex>
                <Text ml={'3'}  color={'gray.600'} fontSize={'lg'}>
                        Carbs: {item.carbs}g
                    </Text>
                    <Text ml={'3'}  color={'gray.600'} fontSize={'lg'}> 
                        Protein: {item.prote}g
                    </Text>
                    <Text ml={'3'} color={'gray.600'} fontSize={'lg'}>
                        Fat: {item.fat}g
                    </Text>
                <Text ml={'3'} color={'gray.600'} fontSize={'lg'}>
                    Cals: {item.cals}
                </Text>
            </Flex>
            </>)
        }

    </Box>
    }
}
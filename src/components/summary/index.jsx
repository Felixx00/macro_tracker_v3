import {Box,Flex, Heading, Text, Checkbox} from "@chakra-ui/react";
import AddForm from "../add_cal";
import ChartSumm from "../chart";
import { FaBottleWater } from "react-icons/fa6";



export default function Summary({onClose, isOpen, totalCals, totalProte, totalCarbs, totalFat}){
    return <Box p={'6'} border={'1px solid'} borderColor={'#303036'} overflow={'hidden'} borderRadius={"10"} background={'#18181b'} display={'flex'}>
            <Flex w={'full'} justifyContent={'center'} alignItems={'center'} flexDirection={{base:'column', sm:'column', md:'column', lg:'row', xl:'row'}}>
                <Flex flex={1} w={'full'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} ml={'-20'} mr={'-20'}>
                    <Heading size={'md'} mb={'4'} color={'gray.600'}>
                        Total Cals: {totalCals} kcals
                    </Heading>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'#18181b'} w={'full'} h={'100px'}  borderColor={'gray.100'}>
                        <Flex flexDirection={'column'}>
                            <Heading color={'blue.700'}>
                                {totalProte} g.
                            </Heading>
                            <Text color={'gray.600'}>
                                Protein
                            </Text>

                        </Flex>

                    </Flex>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'#18181b'} w={'full'} h={'100px'}  borderColor={'gray.100'}>
                        <Flex flexDirection={'column'}>
                            <Heading color={'blue.700'}>
                                {totalFat} g.
                            </Heading>
                            <Text color={'gray.600'}>
                                Fat
                            </Text>

                        </Flex>

                    </Flex>
                    <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'#18181b'} w={'full'} h={'100px'}  borderColor={'gray.100'}>
                        <Flex flexDirection={'column'}>
                            <Heading color={'blue.700'}>
                                {totalCarbs} g.
                            </Heading>
                            <Text color={'gray.600'}>
                                Carbs
                            </Text>

                        </Flex>

                    </Flex>
                </Flex>


                <Box flex={1} mt={'10'} ml={'-90p'} mr={'5'} width={'300px'} height={'300px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Heading>
                        <ChartSumm protein={totalProte} carbs={totalCarbs} fat={totalFat}></ChartSumm>
                    </Heading>
                </Box>
               
                <Flex flex={0.9} w={'full'} flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} ml={'-20'} mr={'-20'}>
                <Heading size={'md'} mb={'4'} color={'gray.600'}>
                        Water Goal: 2.5L
                </Heading>
                
                <Flex mt={'20px'} mb={'30px'}>
                <FaBottleWater flex={0.8} size={100} color="#007acc"  />
                </Flex>

                
                <Checkbox colorScheme='green'  size={'lg'}/>
        

                </Flex>


                </Flex>
                <AddForm onClose={onClose} isOpen={isOpen}>

                </AddForm>
            </Box>
}
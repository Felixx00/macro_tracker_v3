import {Flex,Heading,Button, useDisclosure} from "@chakra-ui/react"
import { AddIcon, RepeatClockIcon } from '@chakra-ui/icons'
import Summary from '../summary'
import View from '../view'
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context"



export default function Main(){

    const {isOpen, onOpen, onClose} = useDisclosure()
    const {allTrans, setAllTrans, totalCals, setTotalCals,
        totalProte, setTotalProte,
        totalCarbs, setTotalCarbs,
        totalFat, setTotalFat} = useContext(GlobalContext);

    useEffect(()=>{
        let p = 0;
        let f = 0;
        let c = 0;
        let cals = 0;

        allTrans.forEach(item => {
            p += parseFloat(item.prote);
            c += parseFloat(item.carbs);
            f += parseFloat(item.fat);
            cals += parseFloat(item.cals);
        })

        setTotalCarbs(c);
        setTotalCals(cals);
        setTotalFat(f);
        setTotalProte(p);

    }, [allTrans])



    return <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'} backgroundColor={'#0f0f10'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'} mb={'40px'}>
            <Heading color={'#007acc'} display={['none', 'block', 'block','block','block']} size={'2xl'}> 
                Macro Tracker
            </Heading>
            <Flex alignItems={'center'}>
            <Button onClick={() => { setAllTrans([])}} ml={'4'} bg={'#DE3163'}>
                    Reset&nbsp;&nbsp; <RepeatClockIcon boxSize={4} />
                </Button>
                <Button onClick={onOpen} ml={'4'} bg={'blue.500'}>
                    Add New&nbsp;&nbsp; <AddIcon boxSize={3} />
                </Button>

            </Flex>
        </Flex>
        
        <Summary totalCals={totalCals} totalProte={totalProte} totalCarbs={totalCarbs} totalFat={totalFat} isOpen={isOpen} onClose={onClose}>

        </Summary>

        <Flex mb={'30px'} w={'100%'} display={'flex'} justifyContent={'space-between'}>
            <View data={allTrans}>
                
            </View>

            
        </Flex>
    </Flex>
}
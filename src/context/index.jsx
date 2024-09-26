import {createContext, useState } from "react";



export const GlobalContext = createContext(null);

export default function GlobalState({children}){

    const [formData, setFormData] = useState({
        type: 'X',
    })

    const [value, setValue] = useState('protein');
    const [totalCals, setTotalCals] = useState(0);
    const [totalProte, setTotalProte] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [allTrans, setAllTrans] = useState([]);

    function handleFormSubmit(currentFormData){
        //console.log(currentFormData)
        //Aqui hacer check si son numeros y no texto !!
        if(!currentFormData.Name || !currentFormData.cals || !currentFormData.prote || !currentFormData.carbs || !currentFormData.fat) return;

        setAllTrans([...allTrans, {...currentFormData, id: Date.now()}]);
    }

    

    

    return <GlobalContext.Provider
        value={{
            formData, setFormData,
            value, setValue,
            totalCals, setTotalCals,
            totalProte, setTotalProte,
            totalCarbs, setTotalCarbs,
            totalFat, setTotalFat,
            allTrans, setAllTrans,
            handleFormSubmit
        }}
    >{children}</GlobalContext.Provider>
}
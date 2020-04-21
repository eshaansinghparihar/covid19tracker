import axios from 'axios';

export const fetchData=async ()=>{
    const fetchedData=await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
    return fetchedData;
}

export const fetchStates=async ()=>{
    const fetchedData=await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
    const fetchedState= fetchedData.data.data.regional;
    return fetchedState;
}
export const getdetails=async (stateName)=>{
    try{const fetchedData=await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
    const statesarray= fetchedData.data.data.regional;
    statesarray.map((stateElement) => {
    if(stateElement.loc===`${stateName}`)
    {
        const {confirmedCasesIndian,discharged,deaths}=stateElement;
        console.log(`Infected in ${stateName}:${confirmedCasesIndian}`);
        console.log(`Discharged in ${stateName}:${discharged}`);
        console.log(`Deaths in ${stateName}:${deaths}`);
        return stateElement;
    }
})
}
    catch(error){
        console.log(error);
    }
}
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
        return {stateElement};
    }
}

)

}
    catch(error){
        console.log(error);
    }
}
 {/*export const getIndianNews=async ()=>{
    try{
        const fetchedData=await axios.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=2d158b7d7e62488c84288ed9f673f726');
        const newsarray= fetchedData.data.articles;
        return newsarray;
     newsarray.map((news) => {
    {
        console.log(news);
       console.log(`Title is ${news.title} - ${news.source.name}`);
        console.log(`Description is ${news.description} written by ${news.author}`);
    console.log(`Content is ${news.content} published at ${news.publishedAt}`);
        return news;
    }
} 

) 

}
    catch(error){
        console.log(error);
    }
}
*/}
import React from 'react';
import { fetchData, fetchStates ,getdetails} from './apiindex';
import Cards from './Cards';
import StateCards from './StateCards';
import styles from './App.module.css';
class App extends React.Component {
    state = {
            data: {},
            region:{},
          };
    
    async componentDidMount(stateName) {
        const a=await fetchStates();
        console.log(a);
        const {data} = await fetchData();
        console.log({data});
        this.setState({data:{data}});
        console.log('Attempted this setState for data');
        console.log(this.state);
        /*const {details} = await getdetails(stateName);
        console.log({details});
        this.setState({region:{details}});
        console.log('Attempted this setState for Region');
        console.log(this.state);
        const a1=getdetails('Karnataka');
        console.log(a1); */
        {/*console.log(data.data.summary);
        console.log(data.data.regional);
        const statesarray=await fetchStates();
        const getdetails=(stateName)=>{statesarray.map((stateElement) => {
            if(stateElement.loc===`${stateName}`){
                console.log(stateElement.confirmedCasesIndian);
                console.log(stateElement.discharged);
                console.log(stateElement.deaths);
            }
        });
    };*/}
    
}
render(){
    return(
        <div className={styles.container}>
            
            <img className={styles.image} src="https://www.cambridge.edu.in/engineering/assets/sites/2/2019/01/CITLogo.png"/>
            <h1>COVID-19 Tracker</h1>
            <Cards  data={this.state.data}/> 
            <h1>Rendering Completed</h1>
            <StateCards data={getdetails('Karnataka')}/>{/*Error-Run Time*/}
            <StateCards data={getdetails('Uttar Pradesh')}/>{/*Error-Run Time*/}
            {/*<StateCards {this.setState({region:{{getdetails('Uttar Pradesh')}}})}/>{/*Error-Compile Time*/}*/}
            <StateCards data={getdetails('Jammu and Kashmir')}/>{/*Error-Run Time*/}
            
            </div>
    )
}
}
export default App; 
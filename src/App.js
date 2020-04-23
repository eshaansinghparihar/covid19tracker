import React from 'react';
import { fetchData, fetchStates ,getdetails, /*getIndianNews*/ } from './apiindex';
import Cards from './Cards';
import StateCards from './StateCards';
import styles from './App.module.css';
import axios from 'axios';
class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            data: {},
            regional:[],
            IndianNews:[],
            BusinessNews:[],
          };
        }
    async componentDidMount() {
        const {data}=await fetchData();
        console.log({data});
        this.setState({data:{data}});
        console.log('Attempted this setState for data');
        console.log(this.state);
}
componentWillMount(){
    axios('https://api.rootnet.in/covid19-in/stats/latest').then(data=>this.setState({
        regional:data.data.data.regional
    }));
    axios('http://newsapi.org/v2/top-headlines?country=in&apiKey=2d158b7d7e62488c84288ed9f673f726').then(response=>this.setState({
        IndianNews:response.data.articles
    }));
    axios('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2d158b7d7e62488c84288ed9f673f726').then(response=>this.setState({
        BusinessNews:response.data.articles
    }));

}

render(){
    return(
        <div className={styles.container}>
            
            <img className={styles.image} src="https://www.cambridge.edu.in/engineering/assets/sites/2/2019/01/CITLogo.png"/>
            <h1>COVID-19 Tracker</h1>
            <Cards  data={this.state.data}/>
            {this.state.regional.map((region)=> <StateCards data={region} />)}
            
            </div>
    )
}
}
export default App; 
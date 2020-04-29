import React from 'react';
import { fetchData, fetchStates ,getdetails, /*getIndianNews*/ } from './apiindex';
import Cards from './Cards';
import StateCardsTabular from './StateCardsTabular';
import Charts from './Charts'
import StateCards from './StateCards';
import Contacts from './Contacts';
import styles from './App.module.css';
import HospitalBeds from './HospitalBeds'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import News from './NewsIndia';
import cx from 'classnames';

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            card:'home',
            home:true,
            statedata:false,
            hospitals:false,
            news:false,
            key:0,
            data: {},
            regional:[],
            IndianNews:[],
            BusinessNews:[],
            contactstates:[],
            contactsprimary:{},
            history:[],
            hospitalbeds:[],
          };
          this.LabelBottomNavigation=this.LabelBottomNavigation.bind(this);
        }
    async componentDidMount() {
        const {data}=await fetchData();
        this.setState({data:{data}});
        await axios('https://api.rootnet.in/covid19-in/stats/history').then(data=>this.setState({
        history:data.data.data
    }));
        console.log('Attempted this setState for data');
        console.log(this.state);

}
componentWillMount(){
    axios('https://api.rootnet.in/covid19-in/stats/latest').then(data=>this.setState({
        regional:data.data.data.regional
    }));
    axios('https://api.rootnet.in/covid19-in/hospitals/medical-colleges').then(data=>this.setState({
        hospitalbeds:data.data.data.medicalColleges
    }));
    axios('https://api.rootnet.in/covid19-in/contacts').then(data=>this.setState({
        contactstates:data.data.data.contacts.regional
    }));
    axios('https://api.rootnet.in/covid19-in/contacts').then(data=>this.setState({
        contactsprimary:data.data.data.contacts.primary
    }));
    axios('http://newsapi.org/v2/top-headlines?country=in&apiKey=64bdafeb6c6d4018829dfd5ea76bfc9c').then(response=>this.setState({
        IndianNews:response.data.articles
    }));
    axios('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=64bdafeb6c6d4018829dfd5ea76bfc9c').then(response=>this.setState({
        BusinessNews:response.data.articles
    }));    
}   
    LabelBottomNavigation() {
    const [value, setValue] = React.useState('home');
        console.log(value);
    const handleChange = (event, newValue) => {
            setValue(newValue);
            this.setState({card:newValue});
            }

    return (
      <BottomNavigation value={value} onChange={handleChange} width={1.2} height={150} className={styles.nav}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="StateData" value="statedata" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Contact" value="news" icon={<ReceiptIcon />} />
        <BottomNavigationAction label="Hospitals" value="hospitals" icon={<LocalHospitalIcon />} />
      </BottomNavigation>
    );
  }
    render(){
    return(
            <div className={styles.container}>
            <this.LabelBottomNavigation />
            <a href="https://www.cambridge.edu.in/engineering/" target="_blank"><img className={styles.image} src="https://www.cambridge.edu.in/engineering/assets/sites/2/2019/01/CITLogo.png"/></a>
            <h2>COVID-19 TRACKER</h2>
            {this.state.card==='home' && <Cards data={this.state.data}/>}
            {this.state.card==='home' && <Charts  data={this.state.history}/>}
            {/*{this.state.card==='statedata' && <StateCards />}*/}
            {this.state.card==='statedata' && this.state.regional.map((region)=> <StateCardsTabular data={region} />)}
            {this.state.card==='news' && <News data={this.state.contactsprimary}/>}
            {this.state.card==='news' && this.state.contactstates.map((contactstate)=> <Contacts  data={contactstate} />)}
            {this.state.card==='hospitals' && this.state.hospitalbeds.map((bed)=> <HospitalBeds data={bed} />)}
            <a href="https://www.cambridge.edu.in/engineering/" target="_blank"><img width={1.2} className={styles.imagebottom} src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/91641347_2767907469898341_678558618919895040_o.jpg?_nc_cat=103&_nc_sid=825194&_nc_ohc=pYoHY35Yr_gAX9ZUqlP&_nc_ht=scontent.fdel3-1.fna&oh=5c61e461dddf75868bdba71bbb95d639&oe=5EC71CDB" alt="Image Loading"></img></a>
    </div>
    )
}
}
export default App; 
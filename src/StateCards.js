import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { NativeSelect, FormControl } from '@material-ui/core';

import { getdetails } from './apiindex';

import styles from './StateCards.module.css';
class StateCard extends React.Component{
  StateInfo = (regional) => {
  console.log(regional.data);
  const [value, setValue] = React.useState('14');
  console.log(value);
    const handleClick = (event, newValue) => {
            setValue(newValue)
            console.log(newValue);
            }
        return (
    <div className={styles.container}>
     <h2 className={styles.deathsheading}>{123}</h2>
     <FormControl width={1} className={styles.formControl}>
      <NativeSelect width={1} onChange={(e)=>{handleClick(e.target.value)}} >
        <option key={0} value={0}>{regional.data[0].loc}</option>
        <option key={1} value={1}>{regional.data[1].loc}</option>
        <option key={2} value={2}>{regional.data[2].loc}</option>
        <option key={3} value={3}>{regional.data[3].loc}</option>
        <option key={4} value={4}>{regional.data[4].loc}</option>
        <option key={5} value={5}>{regional.data[5].loc}</option>
        <option key={6} value={6}>{regional.data[6].loc}</option>
        <option key={7} value={7}>{regional.data[7].loc}</option>
        <option key={8} value={8}>{regional.data[8].loc}</option>
        <option key={9} value={9}>{regional.data[8].loc}</option>
        <option key={10} value={10}>{regional.data[10].loc}</option>
        <option key={11} value={11}>{regional.data[11].loc}</option>
        <option key={12} value={12}>{regional.data[12].loc}</option>
        <option key={13} value={13}>{regional.data[13].loc}</option>
        <option key={14} value={14}>{regional.data[14].loc}</option>
        <option key={15} value={15}>{regional.data[15].loc}</option>
        <option key={16} value={16}>{regional.data[16].loc}</option>
        <option key={17} value={17}>{regional.data[17].loc}</option>
        <option key={18} value={18}>{regional.data[18].loc}</option>
        <option key={19} value={19}>{regional.data[19].loc}</option>
        <option key={20} value={20}>{regional.data[20].loc}</option>
        <option key={21} value={21}>{regional.data[21].loc}</option>
        <option key={22} value={22}>{regional.data[21].loc}</option>
        <option key={23} value={23}>{regional.data[23].loc}</option>
        <option key={24} value={24}>{regional.data[24].loc}</option>
        <option key={25} value={25}>{regional.data[25].loc}</option>
        <option key={26} value={26}>{regional.data[26].loc}</option>
        <option key={27} value={27}>{regional.data[27].loc}</option>
        <option key={28} value={28}>{regional.data[28].loc}</option>
        <option key={29} value={29}>{regional.data[29].loc}</option>
        <option key={30} value={30}>{regional.data[30].loc}</option>
        <option key={31} value={31}>{regional.data[31].loc}</option>
        {/*<option key={0} value={regional.data[0].loc}>{regional.data[32].loc}</option>*/}
      </NativeSelect>
    </FormControl>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={123} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={123} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={123} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
}
export default StateCard;

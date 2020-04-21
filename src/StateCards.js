import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { NativeSelect, FormControl } from '@material-ui/core';

import { getdetails } from './apiindex';

import styles from './StateCards.module.css';
const StateInfo = (data) => {
    console.log(data);
  if ((data.value)===undefined) {
    return 'Loading...';
  }

        return (
    <div className={styles.container}>
    {/*<FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" >
        <option value="">Global</option>
        {array.map((state,i) => <option key={i} value={state}>abcd</option>)}
      </NativeSelect>
    </FormControl>*/}
    
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
              {data.confirmedCasesIndian}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={100} duration={2.75} separator="," />
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
              <CountUp start={0} end={100} duration={2.75} separator="," />
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
              <CountUp start={0} end={100} duration={2.75} separator="," />
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
export default StateInfo;

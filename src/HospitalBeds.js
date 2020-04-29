import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './HospitalBeds.module.css';

const StateTableInfo = (bed) => {
  if(bed.data===undefined){
    return(<div><h2>Loading...</h2></div>)
  }

return(
<div className={styles.container}>
      <Grid container spacing={0} justify="center">
      <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.state)}>
          <CardContent item xs={4} md={4}>
            <Typography variant="h5" component="h2">
            {bed.data.state}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.state)}>
          <CardContent item xs={4} md={4}>
            <Typography variant="h5" component="h2">
              {bed.data.name}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.state)}>
          <CardContent item xs={4} md={4}>
            <Typography variant="h5" component="h2">
              {bed.data.city}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent item xs={4} md={4}>
          <Typography color="textSecondary" gutterBottom>
              Beds
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={bed.data.hospitalBeds} duration={2.75} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent item xs={4} md={4}>
          <Typography color="textSecondary" gutterBottom>
              Capacity
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={bed.data.admissionCapacity} duration={2.75} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent item xs={4} md={4}>
          <Typography color="textSecondary" gutterBottom>
              Owner
            </Typography>
            <Typography variant="h5" component="h2">
            {bed.data.ownership}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
);
}
export default StateTableInfo;

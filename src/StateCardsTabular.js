import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { NativeSelect, FormControl } from '@material-ui/core';

import { getdetails } from './apiindex';

import styles from './StateCardsTabular.module.css';
const StateTableInfo = (region) => {

        return (
    <div className={styles.container}>
      <Grid container spacing={0} justify="center">
      <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.state)}>
          <CardContent item xs={4} md={4}>
            <Typography variant="h5" component="h2">
              {region.data.loc}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent item xs={4} md={4}>
          <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={region.data.confirmedCasesIndian} duration={2.75} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent item xs={4} md={4}>
          <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={region.data.discharged} duration={2.75} separator="," />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} md={4} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent item xs={4} md={4}>
          <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={region.data.deaths} duration={2.75} separator="," />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default StateTableInfo;

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Contacts.module.css';

const ContactInfo = (contactstate) => {
return (
    <div className={styles.container}>
        <Grid container spacing={0} justify="center">
      <Grid width={1} item xs={12} md={12} component={Card} className={cx(styles.card, styles.state)}>
          <CardContent item xs={4} md={4}>
            <Typography variant="h5" component="h2">
            {contactstate.data.loc}
            </Typography>
          </CardContent>
        </Grid>
        <Grid width={1} item xs={12} md={12} component={Card} className={cx(styles.card, styles.number)}>
          <CardContent item xs={4} md={4}>
            <Typography variant="h5" component="h2">
            {contactstate.data.number}
            </Typography>
          </CardContent>
        </Grid>
        </Grid>
    </div>
  );
};
export default ContactInfo;
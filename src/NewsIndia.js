import React from 'react';
import { Card, CardContent, Typography, Grid ,CardMedia} from '@material-ui/core';
import cx from 'classnames';
import { NativeSelect, FormControl } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import styles from './NewsIndia.module.css';
const NewsIndiaInfo = (contact) => {
    console.log(contact);
        return (
    <div className={styles.container}>
        
        <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.infected)}>
        <CardContent item xs={12} md={12}>
        <h2>PM Cares Fund</h2>
        <Typography variant="h5" component="h2">
            Bank Name:<h4>SBI,NEW DELHI MAIN BRANCH</h4>
            Account Name:<h4>PM CARES</h4>
            Savings Bank Account Number:<h4>2121PM20202</h4>
            IFSCode:<h4>SBIN0000691</h4>
            </Typography>
          <h2>Contact Details</h2>
            <Typography variant="h5" component="h2">
            {contact.data.email}
            </Typography>
          </CardContent>
          <CardContent item xs={12} md={12}>
            <Typography variant="h5" component="h2">
            {contact.data.number}
            </Typography>
           
          </CardContent>
          <a href="https://www.facebook.com/MoHFWIndia" target="_blank"><FacebookIcon classNames={styles.icon} fontSize="large" color="primary" justify="center"/></a>
          <a href="https://twitter.com/MoHFW_INDIA" target="_blank"><TwitterIcon classNames={styles.icon} fontSize="large" color="secondary" justify="center"  /></a>
        </Grid>
        </Grid>
    </div>
  );
};
export default NewsIndiaInfo;

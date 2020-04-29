import React from 'react';
import cx from 'classnames';
import {Line} from 'react-chartjs-2';
import styles from './Charts.module.css';
const ShowChart=(history)=>{
  const arr=history.data;
  const ind=arr.length;
  const currdata=arr[ind-1];
  const {day,summary}=currdata;
      const line=(
        
        <Line height={225} className={styles.graph}
        data={{
          labels: history.data.map((date)=>date.day),
          datasets: [{
            data: history.data.map((date)=>date.summary.total),
            label: 'Infected',
            borderColor: '#0000FF',
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            fill: true,
          }, {
            data: history.data.map((date)=>date.summary.deaths),
            label: 'Deaths',
            borderColor: '#FF0000',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          {
            data: history.data.map((date)=>date.summary.discharged),
            label: 'Discharged',
            borderColor: '#00FF00',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
      );
return(

    <div  className={styles.container}>
        {line}
    </div>
);
}
export default ShowChart;

import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import styles from './Smallcards.module.css'
import CountUp from 'react-countup'
//import { size } from 'polished';
import cx from 'classnames';


const cardMakerFN = (confirmed,recovered,deaths,lastUpdateDate, district,zone) => {

   const returnable = (
     <Grid item component={Card} xs={12} md={1}  className={cx(styles.card,     (zone==="Green")? styles.greencard : (  (zone==="Orange")? styles.orangecard : styles.redcard )          )}>
         <CardContent>

            <Typography variant="h5" className={styles.confirmed} >
                <CountUp start={0} end={confirmed} duration={2.5} separator=","/>
            </Typography>
            <Typography variant="h6" className={styles.recovered}>
                <CountUp start={0} end={recovered} duration={2.5} separator=","/>
            </Typography>
            <Typography variant="h6" className={styles.deceased} >
                <CountUp start={0} end={deaths} duration={2.5} separator=","/>
            </Typography>
           
            <Typography variant={fontsize(district,6)} >{district}</Typography>
        </CardContent>
     </Grid>
                      );//const returnable ends

    return returnable;
   }

const fontsize = (text, maxsize) =>  //size of text drops h6 h7 h8, so this is actually the maxsize
{
    const individualWords = text.split(" "); let size = maxsize;
    individualWords.forEach(element => {

        if(element.length > 9)
        size=maxsize+1;
        
    });

    return "h"+size.toString();
}


const Smallcards = (props) => { 

   if(!props.districtfourdataarray.a) return ''; // dont know why the F is a required :::: the array object on which amp is to be run should be nested inside an object.
   
   let districtCard = props.districtfourdataarray.a.map((data)=>{return cardMakerFN(data.confirmed, data.recovered, data.deceased, null , data.districtName, data.zone) })
  
   let totalReturnable = ( 
        <div>
            <Grid  container spacing={1} justify="center" className={styles.container}>
            {districtCard}
            </Grid>
        </div>
    );
return totalReturnable;
}

export default Smallcards;
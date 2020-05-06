import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames';

const cardMakerFN = (cardname, finalNumber, lastUpdatedate, countryyy,) => {
    //setting the variables
    countryyy=(countryyy && countryyy!=='Global')?(("in "+countryyy)):'across Globe';
    //css card class being set below
    let cssclass = styles.infectedcard;
    if(cardname=== "Recovered")     cssclass = styles.recoveredcard;
    if(cardname=== "Deaths")           cssclass = styles.deathscard;
    if(cardname=== "Active")           cssclass = styles.activecard;
  
    const returnable = (
     <Grid item component={Card} xs={12} md={2} className={cx(styles.card, cssclass )}>
         <CardContent>
            <Typography color="textSecondary" gutterbottom>{cardname}</Typography>
            <Typography variant="h5" >
                <CountUp start={0} end={finalNumber} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">As on {new Date(lastUpdatedate).toDateString()}</Typography>
            <Typography variant="body2">No. of {cardname} cases of COVID19</Typography>
            <Typography variant="h6" >{countryyy}</Typography>
        </CardContent>
     </Grid>
                      );//const returnable ends

    return returnable;
    
}

const Cards = (props) => {
    if(!props.data.confirmed) return '';

    //#1-defining the cards below by calling cardMakerFN()
    let infCard       = cardMakerFN( "Infected",  props.data.confirmed, props.data.lastUpdate, props.country);
    let recoveredCard = cardMakerFN( "Recovered", props.data.recovered, props.data.lastUpdate, props.country);
    let deathsCard    = cardMakerFN( "Deaths",    props.data.deaths,    props.data.lastUpdate, props.country);
    let activeCard    = cardMakerFN( "Active",    props.data.confirmed-props.data.recovered-props.data.deaths, props.data.lastUpdate, props.country);
    
    //#1 
    //if data isnt availaible yet, show 'loading'
   

   //Grid tag is necessary wrapper to all three cards. So all cards are returned inside it <Grid  container....
    let totalReturnable = ( 
        <div>
            <Grid  container spacing={2} justify="center" className={styles.container}>
            {infCard} {activeCard} {recoveredCard} {deathsCard}
            </Grid>
        </div>
    );
return totalReturnable;
}

export default Cards
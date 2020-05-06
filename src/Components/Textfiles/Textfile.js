import React from 'react';
import {Typography, Box} from '@material-ui/core';
import styles from './Textfile.module.css'

const Textfiles = (props) => {

    let textactual = ""

    const textslib = {
        Indiadetailsintro: "INDEPTH | Track covid-19 across India",
        GoogleMaps       : "Red Containment Zones Across India",
        NewsCards        : "Keeping up with the world",
    }

    if(props.type==="indiaDetailsIntro")
    textactual = textslib.Indiadetailsintro;

    if(props.type==="GoogleMaps")
    textactual = textslib.GoogleMaps;

    if(props.type==="NewsCards")
    textactual = textslib.NewsCards;


    const returnable = (
        <div>
            <Typography variant="h4" className={styles.container}>
                  <Box fontWeight="fontWeightLight" letterSpacing={5}>{textactual}</Box>
            </Typography>
        </div>
    )

    return returnable;
    
}
export default Textfiles;
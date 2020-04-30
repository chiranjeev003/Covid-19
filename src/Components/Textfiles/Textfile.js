import React from 'react';
import {Typography, Box} from '@material-ui/core';


const Textfiles = (props) => {

    let textactual = ""

    const textslib = {
        Indiadetailsintro: "INDEPTH | Track covid across districts",
    }

    if(props.type==="indiaDetailsIntro")
    textactual = textslib.Indiadetailsintro;


    const returnable = (
        <div>
            <Typography variant="h4" >
                  <Box fontWeight="fontWeightLight" letterSpacing={5}>{textactual}</Box>
            </Typography>
        </div>
    )

    return returnable;
    
}
export default Textfiles;
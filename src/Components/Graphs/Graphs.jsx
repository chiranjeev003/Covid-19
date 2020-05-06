import React from 'react';
import styles from './Graphs.module.css';
import {Chart} from 'grommet';
 
const graphmaker = (data)=>{

       // const datapoints = data.map((datae)=>({value: [datae.confirmed,datae.date ], label: 'one' }) )
        const datapoints = data.map((datae,i)=>({value: [i, datae.value ], label: datae.value }) )
        const returnable = (
            <div>
                    <Chart gap = "medium" size={{"width" : "auto"} } thickness="xsmall"
                        // bounds={[[0, 200], [0, 60000]]}
                        
                        values = {datapoints}
                        aria-label="chart"
                    />
            </div>
        )

        return returnable;
    }


export const Graphs = (props)=>
    {   
         if(props.dailyArray.a===undefined) return 'aa';
     console.log(props.dailyArray.a.date-"30 January")
     const confirmedData = props.dailyArray.a.map((data)=>({value:data.totalconfirmed, date:data.date-"30 January"}))
     const recoveredData = props.dailyArray.a.map((data)=>({value:data.totalrecovered, date:data.date}))
     const deceasedData  = props.dailyArray.a.map((data)=>({value:data.totaldeceased,  date:data.date}))
        //  console.log(deceasedData);
        const returnable = (
            <div className={styles.container} >
                {graphmaker(confirmedData)}
                {graphmaker(recoveredData)}
                {graphmaker(deceasedData)}
            </div>
        )
        return returnable;
    }//Graphs()

export default Graphs

import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line} from 'react-chartjs-2';
import styles from './Charts.module.css'


const Charts = () => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(
                ()=>{
                    const fetchAPI = async () => { setDailyData( await fetchDailyData()) }
                    fetchAPI();
                    },
                    [setDailyData]
            );

   const label = dailyData.map(({date})=>date)//returns an array with RHS of => as each element

   const lineChart = (

        dailyData[0]?(<Line data={{labels : label, datasets : [{
            /////////////////////////////////
            data: dailyData.map(({confirmed})=>(confirmed)),
            label: 'infected',
            fill : true,
            borderColor : '#3333ff',                          },{

            ////////////////////////////////
            data: dailyData.map(({deaths})=>(deaths)),
            label: 'deathcount',
            fill : true,
            borderColor : '#ff0000',
            backgroundColor: 'rgba(255,0,0,0.7)'
                                                               }]   }} 
            ///////////////////////////option
            options = {{
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }   
                    }]
                }
            }}
            ///////////////////////////////                                                   
                                                               />): null );
            ////////////////////////////////

   return <div className={styles.container}> {lineChart} </div>
}

export default Charts

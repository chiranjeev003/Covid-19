//api folder index.js file.
import React from 'react'
//import axios from 'axios';

//const url = 'https://covid19.mathdro.id/api/daily';
// const urll = "https://cat-fact.herokuapp.com/facts";



export const fetchData =  () => {

    try{
        
      //  const response =    await  axios.get(url);
       
        
    //      const modifiedResponse = {
    //        confirmed : response.confirmed,
    //        recovered : response.recovered,
    //        deaths    : response.deaths,
    //        lastUpdate: response.lastUpdate
    //    }

        ///////////////
        //eslint-disable-next-line
        const modifiedResponsee = {
            confirmed : 1,
            recovered : 2,
            deaths    : 3,
            lastUpdate: 4
        }

        return modifiedResponsee;

       } catch (error) {
           console.log("could not fetch")

           return 0;
    }
}

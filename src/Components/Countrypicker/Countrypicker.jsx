import styles from './Countrypicker.module.css'
import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountryList} from '../../api'; 
const Countrypicker = (props) => {

    const [countryList, setCountryList] = useState([]);

    useEffect (

           () => {  
                    const fetchAPIcountry = async () => { setCountryList(await fetchCountryList() ) }
                    fetchAPIcountry();
                 }, 
                 [setCountryList]    
              );
   
        return <div className={styles.container}>

                <FormControl className={styles.formControl}>
                    <NativeSelect default='' onChange={(event)=>props.handleCountryChange(event.target.value)} >
                         <option value="India"> Select country here</option>
                         { countryList.map( (name,i)=><option key={i} value={name}> {name} </option> )}
                    </NativeSelect>
                </FormControl>
               </div>
}

export default Countrypicker
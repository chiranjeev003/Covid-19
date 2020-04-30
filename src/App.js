import React, {Component} from 'react';
import {Cards, Charts, Countrypicker, Textfile} from './Components'
import {fetchData, fetchDistrictData} from './api';
import styles from './App.module.css'
import image from './images/image.png'
import Dropdowntag from './Components/Dropdown/Dropdowntag'

class App extends Component { 
    state = {
        stateData : {},
        stateCountry : 'Global',
        stateGlobalData : {},  //global data is stored for global cards
        stateDistrictData: {},
    }

    async componentDidMount () {
        const fetchedData = await fetchData();
      //  const districtdata = await fetchDistrictData();
      this.setState({stateGlobalData : fetchedData, stateCountry:'Global'})  
      //this.setState({stateGlobalData : fetchedData, stateCountry:'Global', stateDistrictData: districtdata})
      // console.log(this.state);
    }

    handleCountryChange = async (country) =>    {
       //console.log(country);
      const countryData = await fetchData(country);
      // console.log(countryData);
       this.setState({stateData:countryData, stateCountry: country})
       //console.log(this.state)
    }

    render() {  
        return <div className={styles.container}>
                    <img src={image} alt="covid19LOGO" className={styles.image}/>
                    <Cards data={this.state.stateGlobalData} country="Global" />
                    <Countrypicker handleCountryChange={this.handleCountryChange} />
                    <Cards data={this.state.stateData} country={this.state.stateCountry} />
                    <Textfile type="indiaDetailsIntro"></Textfile>
                    <Dropdowntag/>
                    <Charts></Charts>
              </div>;
    }
}
export default App;
//     <p>developed and maintained by Piyush Eklavya</p>
//  <Dropdowntag passdata={this.state.stateDistrictData} ></Dropdowntag>
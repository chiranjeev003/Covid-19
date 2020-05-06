import React, {Component} from 'react';
import {Cards, Countrypicker, Textfile, Smallcards, Googlenews, Graphs} from './Components'
import {fetchData, fetchStateData, fetchNews, fetchIndiaGraphData} from './api';
import styles from './App.module.css'
import image from './images/image.png'
import Dropdowntag from './Components/Dropdown/Dropdowntag'

class App extends Component { 
    state = {
        stateCountryOrGlobeData : {},
        stateCountry : 'Global',
        stateGlobalData : {},  //global data is stored for global cards
        stateDistrictData: {},
        stateProvinceName : 'None Selected',
        stateGoogleNews : {},
        stateIndiaGraphsData : {}
    }

   

    async componentDidMount () {
        //data loading for initial render
        const fetchedData = await fetchData();
        const stateCountryOrGlobeData   = await fetchStateData();
        const news = await fetchNews();
        const mountIndiaGraphsData = await fetchIndiaGraphData();

        this.setState({stateGlobalData      : fetchedData,
                       stateCountry         : 'Global',
                       stateStateData       : stateCountryOrGlobeData,
                       stateIndiaGraphsData : {a: mountIndiaGraphsData, b: ''},
                       stateGoogleNews      :{a: news, b: ''}})
        //console.log(this.state.stateIndiaGraphsData)
      
      
        //###########
    this.handleCountryChange("India")
       this.handleProvinceChange("Jharkhand");

    }

    handleCountryChange = async (country) =>    {
       //console.log(country);
      const countryData = await fetchData(country);
      // console.log(countryData);
       this.setState({stateCountryOrGlobeData:countryData, stateCountry: country})
       //console.log(this.state)
    }

    handleProvinceChange = async (provinceofindia) =>
    {   
       // console.log("state in app js is")
        this.setState({stateProvinceName:provinceofindia});
      // console.log(this.state.stateProvinceName);
       let districtFourDataArray = await fetchStateData(provinceofindia);
       this.setState({stateDistrictData : {a: districtFourDataArray} });
    }

   

    render() { // console.log(this.state.stateProvinceName);

    return <div className={styles.container}>
               <img src={image} alt="covid19LOGO" className={styles.image}/>

               <Cards data={this.state.stateGlobalData} country="Global" />

               <Countrypicker handleCountryChange={this.handleCountryChange} />

               <Cards data={this.state.stateCountryOrGlobeData} country={this.state.stateCountry} />

               <Textfile type="indiaDetailsIntro"></Textfile>

              

               <Dropdowntag droplist={this.state.stateStateData} handleProvinceChangeAppjs={this.handleProvinceChange} />

               <Smallcards districtfourdataarray={this.state.stateDistrictData} aa="gogo" ></Smallcards> 

               <Textfile type="NewsCards"></Textfile>

               <Googlenews newsArraypassed={this.state.stateGoogleNews} ></Googlenews> 

               
           </div>;
        
    }
}
export default App;
//     <p>developed and maintained by Piyush Eklavya</p>
//    <Googlenews newsArraypassed={this.state.stateGoogleNews} ></Googlenews>
// <Smallcards districtfourdataarray={this.state.stateDistrictData} aa="gogo" ></Smallcards>
//  <Graphs dailyArray={this.state.stateIndiaGraphsData} ></Graphs>
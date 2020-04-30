import axios from 'axios';

const url = 'http://covid19.mathdro.id/api'
const districturl = "https://api.covid19india.org/v2/state_district_wise.json";

export const fetchData = async (country) => { //used by cards

   try{
        let countryurl = url;
        if(country && country!=='Global')
        {
          countryurl = countryurl+"/countries/"+country;
        }
        const {data} = await axios.get(countryurl); //destructuring. url has a child "data"
        const modifiedData = {
            confirmed : data.confirmed.value,
            recovered : data.recovered.value,
            deaths    : data.deaths.value,
            lastUpdate: data.lastUpdate
        }
      
        return modifiedData;

      } catch (error) 
      { console.log('an error occured in src/api/index.js fetchData()'); console.log(error); }
}

export const fetchDailyData = async () => {

  try{

       const {data} = await axios.get(url+'/daily'); 
      // console.log(data)
       const extractorfunc = (data) => ({ confirmed : data.confirmed.total, deaths: data.deaths.total, date: data.reportDate})
      
       const chartData = data.map(extractorfunc);
       //console.log(chartData)
       return chartData;

     } catch (error)
     { console.log('an error occured in src/api/index.js fetchDailyData()'); console.log(error);}
}

export const fetchCountryList = async () => {
  try
  {

    const {data} = await axios.get(url+'/countries'); // {data} isnt random, its name of the property to save
    const extractorfunc = (countries) => (countries.name)
    const countryNameArray = data.countries.map(extractorfunc); // run map on a var that has no further children rather, just array beneath
    return countryNameArray;

  } catch(error)
  {console.log('an error occured in src/api/index.js fetchDailyData()'); console.log(error); }
}

export const fetchDistrictName = async () => {
  try
  {

    const {data} = await axios.get(districturl)
   console.log(data); // raw data
   if(!data) return; //just in case data isn downloaded
    const extractorFN = (data) => (data.state) // for map
    const newda = data.map((data) => (data.state))
    console.log(newda)
    return newda;
  } catch(error)
  {console.log('an error occured in src/api/index.js fetchDistrictData()'); console.log(error); }

}
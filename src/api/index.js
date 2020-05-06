import axios from 'axios';

const url = 'http://covid19.mathdro.id/api'
const provinceUrl = "https://api.covid19india.org/v2/state_district_wise.json";
const googleNewsURL = ('https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=7544ed84f91846708f0efe66fd114521' );
const zoneURL = "https://api.covid19india.org/zones.json";
const indiaGraphsDataURL = 'https://api.covid19india.org/data.json' ;


export const fetchIndiaGraphData = async ()=> {
  try {

        const dataDownloaded = await axios.get(indiaGraphsDataURL);
      //  console.log(dataDownloaded.data)

        return dataDownloaded.data.cases_time_series;
    
      } catch (error) { console.log('an error occured in src/api/index.js fetchIndiaGraphData()'); console.log(error); }
    
}//fetchGraphData()

export const fetchNews = async () => {

  try {

        const {data} = await axios.get(googleNewsURL);
     //   console.log(googleNewsURL);
        
        const filteredData = data.articles.map((data)=>({title  : data.title,
                                                   description  : data.description,
                                                     imagelink  : data.urlToImage , 
                                                       article  : data.content,
                                                 linktoarticle  : data.url }))
          return filteredData;


     } catch (error) { console.log('an error occured in src/api/index.js fetchNews()'); console.log(error); }

}//fetchNews()

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
       const extractorfunc = (data) => ({ confirmed : data.confirmed.total, deaths: data.deaths.total, date: data.reportDate})     
       const chartData = data.map(extractorfunc);
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

export const fetchStateData = async (province) => {

  try
  { const zonedata = await axios.get(zoneURL);
    const {data}   = await axios.get(provinceUrl)
    if(!data || !zonedata) return;
    
    if(!province) // fetching provinceNameList for initial reender of dropdown
      {
        const provincenamearray = data.map((data) => (data.state))
        return provincenamearray;
      }
    else
    { 
      let districtsObject = {}; //let zoneOfDistrict = "Data NA";

      var zonemap = new Map();
    //  console.log(zonedata.data)
      zonedata.data.zones.map((data)=>{return zonemap.set(data.district, data.zone)});
   //   console.log(zonemap) 

     for (let index = 0; index < data.length; index++) {
        if(data[index].state===province) 
          {
              districtsObject = data[index].districtData.map(data=>
  
                      { 
                       let zoneOfDistrict=(zonemap.get(data.district)===undefined)? undefined : zonemap.get(data.district) 
                        return { confirmed : data.confirmed, deceased     : data.deceased,
                                 recovered : data.recovered, districtName : data.district,
                                 zone      : zoneOfDistrict,
                               }
                      }
                     
                                                                );//.map()
            
          }
        
      }
      districtsObject=districtsObject.sort((a,b) => ((a.confirmed>b.confirmed)? -1 : 1));

      //console.log(districtsObject)
      return districtsObject;
    }

 
  } catch(error)
  {console.log('an error occured in src/api/index.js fetchDistrictData()'); console.log(error); }

}
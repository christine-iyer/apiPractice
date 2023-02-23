const Asset = require('../../models/assetSchema')

require('dotenv').config()



module.exports = {
  getResults, 
  index
};

const getResults = async () => {
    try {
      const response = await fetch('https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI', {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
      })
      const data = await response.json()
      res.locals.data.quoteResponse.results = data.quoteResponse.results
      
        next()

    } catch (e) {
      console.error(e);
      return e.message
    } 
    return data
  }



   

async function index(req, res) {
  try{

    const result = response =>{
      const mergedData = [...Asset,...data]
      res.json(mergedData)
    }
  }
    catch(e){
    res.status(400).json({ msg: e.message });
  }  }



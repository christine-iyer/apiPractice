
import React, {useState,useEffect} from 'react'

function Investing() {
  const url = 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
const [CryptoNews, setCryptoNews]= useState()
  useEffect(()=> {
     fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
  },[])
  


  return (
    <div className="Investing">
      <header className="Investing-header">
        
        <p>
          Edit <code>src/Investing.js</code> and save to reload.
        </p>
   
      </header>
    </div>
  );
}

export default Investing;

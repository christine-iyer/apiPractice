import { useState, useEffect } from 'react'

import './App.css';

import Display from './components/display/Display';


function App() {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("");

      const getResults = async () => {
          try {
            const response = await fetch('https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI', {
              method: "GET",
              headers: {
                'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
                'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
              }
            })
            const data = await response.json()
            setResults(data.quoteResponse.result)
            return data
          } catch (e) {
            console.error(e);
            setErrorMessage(e.message);
            return e.message
          }
        }
        useEffect(() => {
          getResults()
      }, [])
  return (
    <div className="App">
      <header className="App-header">

     <Display results={results}/>
   

 
      </header>
    </div>
  );
}

export default App;

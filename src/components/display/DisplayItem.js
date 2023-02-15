import React from "react";
import DisplayTicker from "./DisplayTicker";

const DisplayItem = ({ result}) => {
     return (
          <div className="card">
               <div className="card-inner">
                    <div className="card-front">
                    <h3 className="sym-card">{result.fullExchangeName}</h3>
                         <p className="sym-card">{result.longName}</p>
                    </div>
                    <div className="card-back">
                         <h3>{result.symbol}</h3>
                         <p>{result.regularMarketDayHigh}</p>
                    </div>


               </div>


          </div>     
     )
}
export default DisplayItem;










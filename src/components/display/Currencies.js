// Index Page
// import { Link } from "react-router-dom";

export default function Currencies() {
  const currencies = [
    { symbol: "GOOGL", purchasePrice: 146.42, purchaseDate: "December 22, 2021", sharesPurchased: 40 },
    { symbol: "GOOGL", purchasePrice: 141.53, purchaseDate: "February 09, 2022", sharesPurchased: 60 },
    { symbol: "AMZN", purchasePrice: 160.00, shares: 80 },
    { symbol: "BA", purchasePrice: 102.24 },
    { symbol: "GOOGL", purchasePrice: 99.37 },
    { symbol: "AMZN", purchasePrice: 102.24 },
    { symbol: "GOOGL", purchasePrice: 99.37 },
    { symbol: "AMZN", purchasePrice: 102.24 },
    { symbol: "GOOGL", purchasePrice: 99.37 },
    { symbol: "AMZN", purchasePrice: 102.24 },
    { symbol: "GOOGL", purchasePrice: 99.37 },
    { symbol: "AMZN", purchasePrice: 102.24 },
    { symbol: "GOOGL", purchasePrice: 99.37 },
    { symbol: "AMZN", purchasePrice: 102.24 },
    { symbol: "GOOGL", purchasePrice: 99.37 },
    { symbol: "AMZN", purchasePrice: 102.24 },
    
  ];

  return (
   <div className="currencies">
     {currencies.map((coin) => {
       const {  symbol } = coin;
       return (
         <div key={symbol} to={`/price/${symbol}`}>
           <h2>jhgbjhb</h2>
         </div>
       );
     })}
   </div>
  );
}

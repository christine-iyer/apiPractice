import React from 'react'
import DisplayItem from './DisplayItem'

const Display = ({ results, errorMessage }) => {
  return (
     !results ? errorMessage : (<section className='section'>
          {results.map((result) =>(
               
               <DisplayItem key={result.symbol} result={result} />


          ))}

          
     </section>)
  
  )
}

export default Display
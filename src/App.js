import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from './components/display/SortableItem';

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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <Container className="p-3" style={{"width": "50%"}} align="center">
            <h3>The best portfolio!</h3>
            <SortableContext
              items={results}
              strategy={verticalListSortingStrategy}
            >
              {/* We need components that use the useSortable hook */}
              {results.map(result => <SortableItem key={result.symbol} result={result}/>)}
            </SortableContext>
          </Container>
        </DndContext>
      );
    
      function handleDragEnd(event) {
        console.log("Drag end called");
        const {active, over} = event;
        console.log("ACTIVE: " + active.id);
        console.log("OVER :" + over.id);
    
        if(active.id !== over.id) {
          setResults((items) => {
            const activeIndex = items.indexOf(active.id);
            const overIndex = items.indexOf(over.id);
            console.log(arrayMove(items, activeIndex, overIndex));
            return arrayMove(items, activeIndex, overIndex);
            // items: [2, 3, 1]   0  -> 2
            // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
          });
          
        }
      }

}

export default App;
  // return (<div className="App">
  //     <header className="App-header">

  //    <Display className='body' 
  //    results={results}/>
  //  </header>
  //   </div>
  // );
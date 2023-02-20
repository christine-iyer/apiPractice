import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {assets} from './Assets'
import Card from 'react-bootstrap/Card';

export function SortableItem({ result }) {
    

    // result.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: result.symbol });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
console.log(assets)
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card >
                <Card.Body>
                    {assets.symbol === result.symbol ? 
                <h1 >test: {assets.symbol}</h1>  : ""  
                }
                    <Card.Title>{result.symbol} </Card.Title>
                    <Card.Subtitle>{result.fullExchangeName}</Card.Subtitle>
                    <Card.Text>{result.regularMarketDayHigh} you paid __________ </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
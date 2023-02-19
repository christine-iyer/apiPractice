import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';

export function SortableItem({result}) {
    // result.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: result.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card

style={{
     width: '15rem',
     backgroundColor: "blue",
     display: "grid",
     alignText: "left",
     gap: "1rem"
}}>
<Card.Body>
     <Card.Title>{result.symbol}</Card.Title>
     <Card.Subtitle>{result.fullExchangeName}</Card.Subtitle>
     <Card.Text>{result.regularMarketDayHigh}</Card.Text>
</Card.Body>
</Card>
        </div>
    )
}
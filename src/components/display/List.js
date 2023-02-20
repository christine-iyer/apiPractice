import { assets } from './Assets';
import Card from 'react-bootstrap/Card';

export default function List({ results }) {
	let newAssets = []
	newAssets = [{ ...results, ...assets }]
	const listItems = assets.map((asset) => (

		<li key={asset.symbol}>
			<Card body className="p-3" style={{ "width": "20%" }} align="center">
				{console.log(newAssets)}

				<b>{asset.symbol}:</b>
				{' ' +
					asset.shares +
					' shares @ $' +
					asset.purchasePrice +
					' cost $' +
					asset.purchasePrice * asset.shares.toFixed(2)}
			</Card>
		</li>
	));
	return (
		<article>
			<h1>Scientists</h1>
			<ul>{listItems}</ul>
		</article>
	);
}
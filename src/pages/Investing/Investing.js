import { assets } from './components/data';

export default function List() {
	const listItems = assets.map((asset) => (
		<li key={asset.symbol}>
			<p>
				<b>{asset.symbol}:</b>
				{' ' +
					asset.shares +
					' shares @ $' +
					asset.purchasePrice +
					' cost $' +
					asset.purchasePrice * asset.shares.toFixed(2)}
			</p>
		</li>
	));
	return (
		<article>
			<h1>Scientists</h1>
			<ul>{listItems}</ul>
		</article>
	);
}
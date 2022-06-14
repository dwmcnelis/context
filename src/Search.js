import './Search.css'
import { useStore } from './SearchStore'

const Search = () => {
	// Subscribe to searh store state:
	const { search } = useStore()
	const { kinds } = search

	return (
		<div className="Search">
			{kinds.map((kind) => {
				return (<span key={kind} style={{ padding: 2 }} > {kind}</span>)
			})}
		</div >
	)
}

export default Search

/*

*/

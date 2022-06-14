import './App.css'
import { SearchStore, initialState } from './SearchStore'
import Filters from './Filters'
import Search from './Search'

const App = () => {
	return (
		<div className="App">
			<SearchStore state={initialState}>
				<Search />
				<Filters />
			</SearchStore>
		</div>
	)
}

export default App

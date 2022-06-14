import './Filters.css'
import FilterButton from './FilterButton'

const Filters = () => {
	return (
		<div className="Filters">
			<FilterButton label="Earth" kind="earth" />
			<FilterButton label="Wind" kind="wind" />
			<FilterButton label="Fire" kind="fire" />
			<FilterButton label="Water" kind="water" />
		</div>
	)
}

export default Filters

import './FilterButton.css'
import { useState } from 'react'
import { useDispatch, action } from './SearchStore'

const FilterButton = ({ label, kind }) => {
	// Create private selection state
	const [selected, setSelected] = useState(false)

	// Subscribe to search store dispatch function
	const dispatch = useDispatch()

	const toggle = () => {
		// Toggle private selection state
		setSelected(!selected)

		// Dispatch change action to search store
		if (!selected) {
			dispatch(action.addKind(kind))
		} else {
			dispatch(action.removeKind(kind))
		}

	}
	return (
		<div className={selected ? 'FilterButton' : 'FilterButtonSelected'} onClick={toggle}>{label}</div>
	)
}

export default FilterButton


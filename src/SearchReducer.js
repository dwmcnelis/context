import update from 'immutability-helper'

// Example mini redux-like reducer pattern.
//
// 

// Initial state:
export const initialState = {
	search: {
		kinds: []
	}
}

// Action functions:
export const action = {
	reset: () => ({ type: 'search.reset' }),
	addKind: (kind) => ({
		type: 'search.addKind',
		payload: kind
	}),
	removeKind: (kind) => ({
		type: 'search.removeKind',
		payload: kind
	})
}

// Reducer to apply action to state (immutabley):
export const reducer = (state, action) => {
	const { type, payload } = action

	switch (type) {
		case 'search.reset': {
			return initialState
		}
		case 'search.addKind': {
			const kind = payload
			console.log('search.addKind: kind: ', kind)
			return update(state, {
				search: (search) => update(search, { kinds: { $push: [kind] } })
			})
		}
		case 'search.removeKind': {
			const kind = payload
			const itemIndex = state.search.kinds.findIndex((k) => k === kind)
			console.log('search.removeKind: kind: ', kind, ', itemIndex: ', itemIndex)
			if (itemIndex >= 0) {
				return update(state, {
					search: (search) => update(search, { kinds: { $splice: [[itemIndex, 1]] } })
				})
			}
			return state
		}
		default: {
			return state
		}
	}
}

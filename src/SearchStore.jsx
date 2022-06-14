import React, { createContext, useContext, useReducer } from 'react'
import { initialState, action, reducer } from './SearchReducer'

// Re-export from reducer as a convience:
export { action, initialState }

// Example mini redux-like store pattern using two useContext hooks
// combined with a userReducer hook.
//
// The first context holds the state for the store and uses the reducer
// to manage the state.
//
// The second context holds the reducer dispatch function, to dispatch
// action function to trigger state change.
// 
// By using separate contexts, components can subscribe either to the store
// state or the dispatch function or both. This help improve performance by
// eliminating unecessary render cycles.
//

// The state and dispatch contexts:
const SearchStateContext = createContext(initialState)
const SearchDispatchContext = createContext((value) => null)

// The corresponding provider components:
const { Provider: SearchStateProvider } = SearchStateContext
const { Provider: SearchDispatchProvider } = SearchDispatchContext

// Wrap children in both providers:
export const SearchStore = ({ state: initialState, children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<SearchStateProvider value={state}>
				<SearchDispatchProvider value={dispatch}>
					{children}
				</SearchDispatchProvider>
			</SearchStateProvider>
		</>
	)
}

// Hook to subscribe to store/state
export function useStore() {
	return useContext(SearchStateContext)
}

// Hook to subscribe to store/dispatch
export function useDispatch() {
	return useContext(SearchDispatchContext)
}

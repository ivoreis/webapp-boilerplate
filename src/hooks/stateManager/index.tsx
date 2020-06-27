import React, { createContext, FunctionComponent } from 'react'
import { useEffectReducer, EffectReducerExec } from 'use-effect-reducer'
import { PublicConfig } from '~/config/client'

export interface StateManagerState {
  count: number
  profile: {
    name: string
  }
  config: PublicConfig
}

export type StateManagerReducerEventType = 'INC'

export interface StateManagerReducerEvent {
  type: StateManagerReducerEventType
  payload?: Partial<StateManagerState>
}

export interface StateManagerContextProps {
  initialState: StateManagerState
}

export interface StateManagerValueProps {
  state: StateManagerState
  dispatch: React.Dispatch<StateManagerReducerEvent>
}

export const StateManagerContext = createContext<StateManagerValueProps>(
  {} as StateManagerValueProps,
)

//https://github.com/davidkpiano/useEffectReducer
const reducer = (
  state: StateManagerState,
  event: StateManagerReducerEvent,
  exec: EffectReducerExec<
    StateManagerState,
    StateManagerReducerEvent,
    StateManagerReducerEvent
  >,
) => {
  switch (event.type) {
    case 'INC':
      exec(() => console.log('Going up!')) // "Execute" a side-effect here

      return {
        ...state,
        count: state.count + 1,
      }

    default:
      return state
  }
}

const StateManager: FunctionComponent<StateManagerContextProps> = (props) => {
  const { children, initialState } = props
  const [state, dispatch] = useEffectReducer<
    StateManagerState,
    StateManagerReducerEvent,
    StateManagerReducerEvent
  >(reducer, {
    ...initialState,
    count: 0,
  })

  return (
    <StateManagerContext.Provider value={{ state, dispatch }}>
      {children}
    </StateManagerContext.Provider>
  )
}

export default StateManager

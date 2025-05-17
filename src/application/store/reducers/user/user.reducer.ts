import { User } from '@/application/dtos/user.dto'
import { UserActions } from './user.action'
import UserActionTypes from './user.action-types'

export interface InitialState {
  currentUser: User | null
  isAuthenticated: boolean
  theme: string
}

const initialState: InitialState = {
  currentUser: null,
  isAuthenticated: false,
  theme: 'light',
}

const userReducer = (
  state = initialState,
  action: UserActions,
): InitialState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        theme: action.payload.themme,
      }
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        theme: 'light',
      }
    default:
      return state
  }
}

export default userReducer

// Reducer escuta pelas actions e atualiza o estado global

// sempre retornar um objeto novo }

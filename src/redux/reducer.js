import { configureStore } from '@reduxjs/toolkit'
const initialState = {
    username: 'hello', 
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USERNAME': return {
        ...state,
        username: action.payload
      };
      default:
      return state;

    }
}

export default configureStore({
  reducer
});
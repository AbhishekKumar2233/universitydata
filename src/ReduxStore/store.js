import { createStore } from "redux";

const initialState = {
  selectedCountry: "India",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "India":
      return {
        ...state,
        selectedCountry: "India",
      };
    case "UnitedStates":
      return {
        ...state,
        selectedCountry: "United+States",
      };
    case "China":
      return {
        ...state,
        selectedCountry: "China",
      };
    case "Germany":
      return {
        ...state,
        selectedCountry: "Germany",
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;

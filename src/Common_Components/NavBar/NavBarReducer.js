import { changeNavbarStartDate, changeNavbarEtfName } from "./NavBarActions";

const initialState = {
  startDate: "20200608",
  ETF: "XLK",
};

const NavBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeNavbarStartDate: {
      return { ...state, startDate: action.payload.value };
    }

    case changeNavbarEtfName: {
      return { ...state, ETF: action.payload.value };
    }

    default: {
      return state;
    }
  }
};

export default NavBarReducer;

import {
  changeNavbarStartDate,
  changeNavbarEtfName,
  changeHolidayList,
} from "./NavBarActions";

const initialState = {
  startDate: "20200608",
  ETF: "XLK",
  holidayList: [],
};

const NavBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeNavbarStartDate: {
      return { ...state, startDate: action.payload.value };
    }

    case changeNavbarEtfName: {
      return { ...state, ETF: action.payload.value };
    }
    case changeHolidayList: {
      return { ...state, holidayList: action.payload.value };
    }

    default: {
      return state;
    }
  }
};

export default NavBarReducer;

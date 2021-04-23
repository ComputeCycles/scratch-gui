const SET_SECOND_SAT = 'setSecondSat';
const SET_THIRD_SAT = 'setThirdSat';
const SET_FOURTH_SAT = 'setFourthSat';
const SET_FIRST_SAT = 'setFirstSat';


const initialState = {
    satelliteOne: '',
    satelliteTwo: '',
    satelliteThree: '',
    satelliteFour: ''
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
      case SET_FIRST_SAT:
        return Object.assign({}, state, {
            satelliteOne: action.value,
        });
    case SET_SECOND_SAT:
        return Object.assign({}, state, {
            satelliteTwo: action.value,
        });
    case SET_THIRD_SAT:
        return Object.assign({}, state, {
            satelliteThree: action.value,
        });
    case SET_FOURTH_SAT:
        return Object.assign({}, state, {
            satelliteFour: action.value,
        });
    default:
        return state;
    }
};

const setFirstSatellite = function (satelliteName) {
  return {
    type: SET_FIRST_SAT,
    value: satelliteName
  }
};

const setSecondSatellite = function (satelliteName) {
  return {
    type: SET_SECOND_SAT,
    value: satelliteName
  }
};

const setThirdSatellite = function (satelliteName) {
  return {
    type: SET_THIRD_SAT,
    value: satelliteName
  }
};

const setFourthSatellite = function (satelliteName) {
  return {
    type: SET_FOURTH_SAT,
    value: satelliteName
  }
};

export {
    reducer as default,
    initialState as satsInitialState,
    setSecondSatellite,
    setThirdSatellite,
    setFourthSatellite,
    setFirstSatellite
};
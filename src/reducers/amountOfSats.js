const INCREASE_BY_ONE = 'increaseOne';
const DECREASE_BY_ONE =  'decreaseOne';
const RESET_SAT_COUNT = 'resetCount';

const AMOUNT = 'amount';

const initialState = {
  amount: 1,
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case INCREASE_BY_ONE: {
      if (state.amount === 4) {
        return Object.assign({}, state, {
          amount: state.amount,
          });
      } else {
        return Object.assign({}, state, {
            amount: state.amount+1,
        });
      }
    }
    case DECREASE_BY_ONE: {
      if (state.amount === 1) {
        return Object.assign({}, state, {
          amount: state.amount,
          });
      } else {
        return Object.assign({}, state, {
            amount: state.amount-1,
        });
      }
    }
    case RESET_SAT_COUNT: {
      return Object.assign({}, state, {
      amount: 1,
      });
    }
    default:
        return state;
    }
};

const increaseSatCount = function () {
    return {
      type: INCREASE_BY_ONE
    };
};

const decreaseSatCount = function () {
  return {
      type: DECREASE_BY_ONE
  };
};

const resetSatCount = function () {
  return {
      type: RESET_SAT_COUNT
  };
}

export {
    reducer as default,
    initialState as InitialSatCount,
    increaseSatCount,
    decreaseSatCount,
    resetSatCount
};
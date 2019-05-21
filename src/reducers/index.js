import BigNumber from "bignumber.js"

const INITIAL_STATE = {
  money: BigNumber(0),
  total_money: BigNumber(0),
  owned_upgrades: [0, 0, 0, 0, 0, 0, 0, 0],
  total_inc_per_second: BigNumber(0)
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREASE_MONEY":
      return {
        ...state,
        money: state.money.plus(action.payload)
      }
    case "DECREASE_MONEY":
      return {
        ...state,
        money: state.money.minus(action.payload)
      }
    case "INCREASE_TOTAL_MONEY":
      return {
        ...state,
        total_money: state.total_money.plus(action.payload)
      }
    case "INCREASE_TOTAL_INC_PER_SECOND":
      return {
        ...state,
        total_inc_per_second: state.total_inc_per_second.plus(action.payload)
      }
    case "INCREMENT_UPGRADE":
      return {
        ...state,
        owned_upgrades: state.owned_upgrades.map((upg, i) =>
          i === action.payload ? upg + 1 : upg
        )
      }
    default:
      return state
  }
}

export default reducer

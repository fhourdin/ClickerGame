import BigNumber from "bignumber.js"
import UPGRADES from "enums/upgrades_enum"

export const increaseMoney = (value) => ({
	type: "INCREASE_MONEY",
	payload: value
})
export const decreaseMoney = (value) => ({
	type: "DECREASE_MONEY",
	payload: value
})
export const increaseTotalMoney = (value) => ({
	type: "INCREASE_TOTAL_MONEY",
	payload: value
})
export const increaseTotalIncPerSecond = (value) => ({
	type: "INCREASE_TOTAL_INC_PER_SECOND",
	payload: value
})
export const incrementUpgrade = (upg_index) => ({
	type: "INCREMENT_UPGRADE",
	payload: upg_index
})

export const buyUpgrade = (index) => {
	return (dispatch, getState) => {
		const { owned_upgrades } = getState()

		const upg = UPGRADES[index]
		const price = upg.base_cost.times(
			upg.multiplier.pow(owned_upgrades[index])
		)

		dispatch(decreaseMoney(price))
		dispatch(incrementUpgrade(index))
		dispatch(increaseTotalIncPerSecond(upg.base_income_rate))
	}
}

export const handleClick = () => {
	return (dispatch, getState) => {
		const { owned_upgrades } = getState()
		const gain = BigNumber(1).plus(owned_upgrades[0])

		dispatch(increaseMoney(gain))
		dispatch(increaseTotalMoney(gain))
	}
}

export const handleTick = () => {
	return (dispatch, getState) => {
		const { total_inc_per_second } = getState()

		dispatch(increaseMoney(total_inc_per_second))
		dispatch(increaseTotalMoney(total_inc_per_second))
	}
}

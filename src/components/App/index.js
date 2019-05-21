import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import BigNumber from "bignumber.js"
import clone from "lodash/clone"

import Main from "components/Main"
import UpgradeList from "components/UpgradeList"

import UPGRADES from "enums/upgrades_enum"

const styles = {
	container: {
		height: "100vh",
		width: "100vw",
		display: "flex",
		backgroundColor: "#ecf0f1"
	}
}

const App = ({ classes }) => {
	const [money, setMoney] = useState(BigNumber(0))
	const [total_money, setTotalMoney] = useState(BigNumber(0))
	const [owned_upgrades, setOwnedUpgrades] = useState([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	])
	const [total_inc_per_second, setTotalIncPerSecond] = useState(BigNumber(0))

	const onTick = () => {
		setMoney(money.plus(total_inc_per_second))
		setTotalMoney(total_money.plus(total_inc_per_second))
	}

	useEffect(() => {
		console.log("coucou")

		return () => {
			console.log("beuh")
		}
	})

	// componentDidMount() {
	// 	this.ticker = setInterval(() => {
	// 		this.onTick()
	// 	}, 100)
	// }

	// componentWillUnmount() {
	// 	clearInterval(this.ticker)
	// }

	const buyUpgrade = (index) => {
		let new_owned_upgrades = clone(owned_upgrades)
		const upg = UPGRADES[index]

		new_owned_upgrades[index] += 1
		const price = upg.base_cost.times(
			upg.multiplier.pow(owned_upgrades[index])
		)

		setMoney(money.minus(price))
		setOwnedUpgrades(new_owned_upgrades)
		setTotalIncPerSecond(total_inc_per_second.plus(upg.base_income_rate))
	}

	const handleClick = () => {
		const gain = BigNumber(1).plus(owned_upgrades[0])

		setMoney(money.plus(gain))
		setTotalMoney(total_money.plus(gain))
	}

	return (
		<div className={classes.container}>
			<Main
				money={money}
				handleClick={handleClick}
				total_money={total_money}
				total_inc_per_second={total_inc_per_second}
				gain_per_click={BigNumber(1).plus(owned_upgrades[0])}
			/>
			<UpgradeList
				money={money}
				owned_upgrades={owned_upgrades}
				buyUpgrade={buyUpgrade}
			/>
		</div>
	)
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

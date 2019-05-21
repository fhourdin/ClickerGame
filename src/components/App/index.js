import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import BigNumber from "bignumber.js"
import clone from "lodash/clone"
import reduce from "lodash/reduce"

import Main from "components/Main"
import UpgradeList from "components/UpgradeList"
import TickCounter from "components/TickCounter"

import UPGRADES from "enums/upgrades_enum"

const styles = {
	container: {
		height: "100vh",
		width: "100vw",
		display: "flex",
		backgroundColor: "#ecf0f1"
	}
}

class App extends React.Component {
	ticker = null
	state = {
		money: BigNumber(0),
		total_money: BigNumber(0),
		owned_upgrades: [0, 0, 0, 0, 0, 0, 0, 0],
		total_inc_per_second: BigNumber(0)
	}

	onTick() {
		const { total_inc_per_second, money, total_money } = this.state
		this.setState({
			money: money.plus(total_inc_per_second),
			total_money: total_money.plus(total_inc_per_second)
		})
	}

	componentDidMount() {
		this.ticker = setInterval(() => {
			this.onTick()
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.ticker)
	}

	buyUpgrade = (index) => {
		const { money, owned_upgrades, total_inc_per_second } = this.state

		let new_owned_upgrades = clone(owned_upgrades)
		const upg = UPGRADES[index]

		new_owned_upgrades[index] += 1
		const price = upg.base_cost.times(
			upg.multiplier.pow(owned_upgrades[index])
		)

		this.setState({
			money: money.minus(price),
			owned_upgrades: new_owned_upgrades,
			total_inc_per_second: total_inc_per_second.plus(
				upg.base_income_rate
			)
		})
	}

	handleClick = () => {
		const { money, total_money, owned_upgrades } = this.state
		const gain = BigNumber(1).plus(owned_upgrades[0])

		this.setState({
			money: money.plus(gain),
			total_money: total_money.plus(gain)
		})
	}

	render() {
		const {
			money,
			owned_upgrades,
			total_money,
			total_inc_per_second
		} = this.state
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<Main
					money={money}
					handleClick={this.handleClick}
					total_money={total_money}
					total_inc_per_second={total_inc_per_second}
					gain_per_click={BigNumber(1).plus(owned_upgrades[0])}
				/>
				<UpgradeList
					money={money}
					owned_upgrades={owned_upgrades}
					buyUpgrade={this.buyUpgrade}
				/>
			</div>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

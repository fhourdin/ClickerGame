import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import BigNumber from "bignumber.js"

import Main from "components/Main"
import UpgradeList from "components/UpgradeList"
import TickCounter from "components/TickCounter"

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
		owned_upgrades: [0, 0, 0, 0, 0, 0, 0, 0]
	}

	onTick() {
		const { nb_of_ticks } = this.state
	}

	componentDidMount() {
		this.ticker = setInterval(() => {
			this.onTick()
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.ticker)
	}

	handleClick = () => {
		const { money, owned_upgrades } = this.state

		const newMoney = money.plus(BigNumber(2).pow(owned_upgrades[0]))
		this.setState({ money: newMoney })
	}

	render() {
		const { nb_of_ticks, money } = this.state
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<Main money={money} handleClick={this.handleClick} />
				<UpgradeList />
			</div>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

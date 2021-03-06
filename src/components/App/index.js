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
		display: "flex"
	}
}

class App extends React.Component {
	ticker = null
	state = {
		nb_of_ticks: 0,
		money: BigNumber(0),
		owned_upgrades: [0, 0, 0, 0, 0, 0, 0, 0]
	}

	onTick() {
		const { nb_of_ticks } = this.state
		this.setState({
			nb_of_ticks: nb_of_ticks + 1
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

	render() {
		const { nb_of_ticks } = this.state
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<Main />
				<UpgradeList />
				<TickCounter nb_of_ticks={nb_of_ticks} />
			</div>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"

import Main from "components/Main"
import UpgradeList from "components/UpgradeList"
import { handleTick } from "actions"

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

	componentDidMount() {
		const { handleTick } = this.props

		this.ticker = setInterval(() => {
			handleTick()
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.ticker)
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<Main />
				<UpgradeList />
			</div>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	money: state.money,
	total_money: state.total_money,
	total_inc_per_second: state.total_inc_per_second,
	owned_upgrades: state.owned_upgrades
})

const mapDispatchToProps = (dispatch) => ({
	handleTick: () => dispatch(handleTick())
})

const StylesComponent = withStyles(styles)(App)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StylesComponent)

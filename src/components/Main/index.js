import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import AppTitle from "components/AppTitle"
import Wallet from "components/Wallet"
import ClickableZone from "components/ClickableZone"
import Statistics from "components/Statistics"

const styles = (theme) => ({
	container: {
		height: "100%",
		flex: 3,
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#3498db",
		marginRight: 10,
		boxShadow: "0 0 5px"
	}
})

const Main = (props) => {
	const { classes, money, handleClick } = props

	return (
		<div className={classes.container}>
			<AppTitle />
			<Wallet money={money} />
			<ClickableZone handleClick={handleClick} />
			<Statistics />
		</div>
	)
}

Main.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)

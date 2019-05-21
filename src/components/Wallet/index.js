import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = (theme) => ({
	container: {
		padding: theme.spacing.unit * 2,
		alignSelf: "flex-end",
		display: "flex"
	},
	coin: {
		backgroundColor: "#e67e22",
		border: "2px solid #d35400",
		borderRadius: "50%",
		height: 20,
		width: 20,
		marginLeft: 10
	}
})

const Wallet = (props) => {
	const { classes, money } = props

	return (
		<div className={classes.container}>
			<Typography variant="h6">{money.toFixed(3)}</Typography>
			<div className={classes.coin} />
		</div>
	)
}

Wallet.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Wallet)

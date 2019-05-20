import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	container: {
		alignSelf: "flex-end",
		display: "flex",
		alignItems: "center",
		marginRight: 5
	},
	coin: {
		backgroundColor: "#e67e22",
		border: "1px solid #d35400",
		borderRadius: "50%",
		height: 10,
		width: 10,
		marginLeft: 5
	},
	disabled: {
		color: "#7f8c8d"
	}
})

const Price = (props) => {
	const { classes, value, disabled } = props

	return (
		<div className={classes.container}>
			<Typography
				classes={{
					root: `${disabled ? classes.disabled : ""}`
				}}
			>
				{value.toExponential(2)}
			</Typography>
			<div className={classes.coin} />
		</div>
	)
}

Price.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Price)

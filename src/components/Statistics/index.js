import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = (theme) => ({
	container: {
		paddingBottom: theme.spacing.unit * 2
	}
})

const Statistics = (props) => {
	const { classes, total_inc_per_second, gain_per_click, total_money } = props

	return (
		<div className={classes.container}>
			<Typography>
				Total money : {total_money.toExponential(2)}
			</Typography>
			<Typography>
				Gain per second : {total_inc_per_second.toExponential(2)}
			</Typography>
			<Typography>
				Gain per click : {gain_per_click.toExponential(2)}
			</Typography>
		</div>
	)
}

Statistics.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Statistics)

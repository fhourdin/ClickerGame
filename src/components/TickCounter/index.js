import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'

const styles = {
	container: {
		position: "absolute",
		right: 0,
		bottom: 0
	}
}

const TickCounter = (props) => {
	const { classes, nb_of_ticks } = props

	return (
		<Typography className={classes.container}>
			Nb of ticks : {nb_of_ticks}
		</Typography>
	)
}

TickCounter.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TickCounter)

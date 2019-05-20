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
	const { classes } = props

	return <div className={classes.container}>Statistics</div>
}

Statistics.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Statistics)

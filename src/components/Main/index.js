import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = {
	container: {
		height: "100%",
		flex: 3
	}
}

const Main = (props) => {
	const { classes } = props

	return (
		<div className={classes.container}>
			<Typography>Main</Typography>
		</div>
	)
}

Main.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Main)

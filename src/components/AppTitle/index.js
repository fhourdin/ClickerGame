import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = (theme) => ({
	container: {
		padding: theme.spacing.unit * 2
	}
})

const AppTitle = (props) => {
	const { classes } = props

	return (
		<Typography variant="h3" classes={{ root: classes.container }}>
			AppTitle
		</Typography>
	)
}

AppTitle.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppTitle)

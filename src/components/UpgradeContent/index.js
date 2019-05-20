import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = {
	container: {
	}
}

const UpgradeContent = (props) => {
	const { classes } = props

	return (
		<div className={classes.container}>
			<Typography>UpgradeContent</Typography>
		</div>
	)
}

UpgradeContent.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeContent)

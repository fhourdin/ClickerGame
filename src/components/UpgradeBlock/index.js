import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = {
	container: {}
}

const UpgradeBlock = (props) => {
	const { classes } = props

	return (
		<div className={classes.container}>
			<Typography>UpgradeBlock</Typography>
		</div>
	)
}

UpgradeBlock.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeBlock)

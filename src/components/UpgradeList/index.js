import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = {
	container: {
		height: "100%",
		flex: 2
	}
}

const UpgradeList = (props) => {
	const { classes } = props

	return (
		<div className={classes.container}>
			<Typography>UpgradeList</Typography>
		</div>
	)
}

UpgradeList.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeList)

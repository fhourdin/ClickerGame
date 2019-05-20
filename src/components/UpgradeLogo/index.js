import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = {
	container: {}
}

const UpgradeLogo = (props) => {
	const { classes } = props

	return <Typography>UpgradeLogo</Typography>
}

UpgradeLogo.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeLogo)

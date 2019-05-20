import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = (theme) => ({
	container: {
		display: "flex"
	},
	img: {
		margin: 4
	},
	disabled: {
		opacity: 0.5
	}
})

const UpgradeLogo = (props) => {
	const { classes, img_url, disabled } = props

	return (
		<div className={classes.container}>
			<img
				src={img_url}
				className={`${classes.img} ${disabled ? classes.disabled : ""}`}
			/>
		</div>
	)
}

UpgradeLogo.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeLogo)

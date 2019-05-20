import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Price from "components/Price"

const styles = {
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	title: {
		flex: 1
	},
	subcontent: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between"
	},
	disabled: {
		color: "#7f8c8d"
	}
}

const UpgradeContent = (props) => {
	const { classes, title, disabled } = props

	return (
		<div className={classes.container}>
			<Typography
				variant="h6"
				classes={{
					root: `${classes.title} ${disabled ? classes.disabled : ""}`
				}}
			>
				{title}
			</Typography>
			<div className={classes.subcontent}>
				<Typography>btm_left_content</Typography>
				<Price value={0} disabled={disabled} />
			</div>
		</div>
	)
}

UpgradeContent.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeContent)

import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import UpgradeBlock from "components/UpgradeBlock"
import UPGRADES from "enums/upgrades_enum"

const styles = (theme) => ({
	container: {
		height: "100%",
		flex: 2,
		backgroundColor: "#2980b9",
		overflowY: "scroll",
		overfloxX: "hidden",
		boxShadow: "0 0 5px"
	}
})

const UpgradeList = (props) => {
	const { classes } = props

	return (
		<div className={classes.container}>
			{UPGRADES.map((upgrade, key) => (
				<UpgradeBlock key={key} upgrade={upgrade} />
			))}
		</div>
	)
}

UpgradeList.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeList)

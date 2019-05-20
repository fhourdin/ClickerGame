import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import UpgradeLogo from "components/UpgradeLogo"
import UpgradeContent from "components/UpgradeContent"

const styles = {
	container: {
		margin: 10,
		backgroundColor: "#3498db",
		borderRadius: 5,
		boxShadow: "0 0 3px",
		display: "flex"
	},
	disabled: {
		backgroundColor: "#95a5a6"
	}
}

const UpgradeBlock = (props) => {
	const { classes, upgrade, affordable } = props

	return (
		<div
			className={`${classes.container} ${
				!affordable ? classes.disabled : ""
			}`}
		>
			<UpgradeLogo img_url={upgrade.img_url} disabled={!affordable} />
			<UpgradeContent title={upgrade.title} disabled={!affordable} />
		</div>
	)
}

UpgradeBlock.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeBlock)

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
	const { classes, money, owned_upgrades, buyUpgrade } = props

	return (
		<div className={classes.container}>
			{UPGRADES.map((upgrade, index) => {
				const price = upgrade.base_cost.times(
					upgrade.multiplier.pow(owned_upgrades[index])
				)
				return (
					<UpgradeBlock
						key={index}
						upgrade={upgrade}
						nb_owned={owned_upgrades[index]}
						price={price}
						upg_index={index}
						affordable={money.gte(price)}
						buyUpgrade={buyUpgrade}
					/>
				)
			})}
		</div>
	)
}

UpgradeList.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UpgradeList)

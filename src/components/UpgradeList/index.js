import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import UpgradeBlock from "components/UpgradeBlock"
import UPGRADES from "enums/upgrades_enum"
import { connect } from "react-redux"

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
			{UPGRADES.map((upgrade, index) => {
				return (
					<UpgradeBlock key={index} upgrade={upgrade} index={index} />
				)
			})}
		</div>
	)
}

UpgradeList.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	money: state.money,
	owned_upgrades: state.owned_upgrades
})

const mapDispatchToProps = (dispatch) => ({})

const StylesComponent = withStyles(styles)(UpgradeList)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StylesComponent)

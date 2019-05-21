import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import UpgradeLogo from "components/UpgradeLogo"
import UpgradeContent from "components/UpgradeContent"
import { buyUpgrade } from "actions"
import { connect } from "react-redux"

const styles = {
	container: {
		margin: 10,
		backgroundColor: "#3498db",
		borderRadius: 5,
		boxShadow: "0 0 3px",
		display: "flex",
		cursor: "pointer"
	},
	disabled: {
		backgroundColor: "#95a5a6",
		cursor: "not-allowed"
	}
}

const UpgradeBlock = (props) => {
	const {
		classes,
		upgrade,
		index,
		nb_owned,
		price,
		money,
		buyUpgrade
	} = props

	const affordable = money.gte(price)

	return (
		<div
			onClick={() => affordable && buyUpgrade(index)}
			className={`${classes.container} ${
				!affordable ? classes.disabled : ""
			}`}
		>
			<UpgradeLogo img_url={upgrade.img_url} disabled={!affordable} />
			<UpgradeContent
				title={upgrade.title}
				price={price}
				nb_owned={nb_owned}
				disabled={!affordable}
			/>
		</div>
	)
}

UpgradeBlock.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	price: ownProps.upgrade.base_cost.times(
		ownProps.upgrade.multiplier.pow(state.owned_upgrades[ownProps.index])
	),
	nb_owned: state.owned_upgrades[ownProps.index],
	money: state.money
})

const mapDispatchToProps = (dispatch) => ({
	buyUpgrade: (index) => dispatch(buyUpgrade(index))
})

const StylesComponent = withStyles(styles)(UpgradeBlock)
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StylesComponent)

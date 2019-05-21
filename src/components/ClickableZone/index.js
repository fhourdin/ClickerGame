import React, { useState } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

const styles = {
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "center"
	},
	content: {
		height: 200,
		width: 200,
		alignSelf: "center",
		border: "10px solid #d35400",
		borderRadius: "50%",
		backgroundColor: "#e67e22",
		padding: 0
	},
	hover: {
		backgroundColor: "#f39c12",
		border: "10px solid #e67e22"
	},
	mouseDown: {
		padding: 10
	}
}

const ClickableZone = (props) => {
	const { classes, handleClick } = props
	const [hover, setHover] = useState(false)
	const [mouse_down, setMouseDown] = useState(false)

	return (
		<div className={classes.container}>
			<div
				className={`${classes.content} ${hover ? classes.hover : ""} ${
					mouse_down ? classes.mouseDown : ""
				}`}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				onMouseDown={() => setMouseDown(true)}
				onMouseUp={() => setMouseDown(false)}
				onClick={() => handleClick()}
			/>
		</div>
	)
}

ClickableZone.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ClickableZone)

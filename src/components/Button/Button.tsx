import React from "react";

import { ButtonProps } from "./Button.types";
import StyledButton from "./StyledButton.styled";

const Button = React.forwardRef<unknown, ButtonProps>((props, ref) => {
	const { role = "button", isLoading, children, ...rest } = props;

	console.dir(document.styleSheets);

	return (
		<StyledButton ref={ref} {...rest}>
			{children}
		</StyledButton>
	);
});

export default Button;

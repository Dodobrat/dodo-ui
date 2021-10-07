import React from "react";

import { ButtonProps } from "./Button.types";
import StyledButton from "./StyledButton.styled";

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props) => {
	const { role = "button", isLoading, children, ...rest } = props;

	console.log(isLoading);

	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

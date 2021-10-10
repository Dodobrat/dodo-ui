import React from 'react';
import cn from 'classnames';

import { ButtonProps } from "./Button.types";
import StyledButton from "./StyledButton.styled";

const Button = React.forwardRef<unknown, ButtonProps>((props, ref) => {
	const { role = "button", isLoading, children, className, ...rest } = props;

	return (
		<StyledButton {...rest} className={cn('dui__btn', className)} ref={ref}>
			{children}
		</StyledButton>
	);
});

export default Button;

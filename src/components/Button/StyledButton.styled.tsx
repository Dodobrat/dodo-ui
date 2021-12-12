import styled from "styled-components";

const StyledButton = styled.button`
	display: inline-block;
	position: relative;

	margin: 0;
	padding: calc(1em * 0.625) 1em;

	font-weight: normal;
	font-size: 1rem;
	text-decoration: none;
	vertical-align: middle;

	overflow: hidden;
	outline: none;
	user-select: none;
	border: none;

	&:disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	&:not(:disabled) {
		cursor: pointer;
	}
`;

export default StyledButton;

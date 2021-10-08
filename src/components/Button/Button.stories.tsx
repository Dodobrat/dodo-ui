import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
	title: "Components/Button",
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { isLoading: true, as: "p" };

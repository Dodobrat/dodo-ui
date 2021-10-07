import { ElemType } from "../../types";

type Globals = ElemType;

export interface ButtonProps extends Globals {
	role?: string;
	isLoading?: boolean;
}

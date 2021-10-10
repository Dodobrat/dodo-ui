import { CnCh, ElemType } from "../../types";

type Globals = ElemType & CnCh;

export interface ButtonProps extends Globals {
	role?: string;
	isLoading?: boolean;
}

import React from "react";
interface PasswordProps {
    value: string;
    valueAgain?: string;
    minLength?: number;
    iconSize?: number;
    validColor?: string;
    invalidColor?: string;
    onChange?: (isValid: boolean) => any;
}
export declare type RuleNames = "length" | "specialChar" | "number" | "capital" | "match";
export interface ReactPasswordChecklistProps extends PasswordProps {
    className?: string;
    style?: React.CSSProperties;
    rules: Array<RuleNames>;
}
declare const ReactPasswordProps: React.FC<ReactPasswordChecklistProps>;
export default ReactPasswordProps;

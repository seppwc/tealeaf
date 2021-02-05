import { Variants } from "../lib/compileBaseClassFromTheme";

export type TealValueObject = { [key: string]: { [key: string]: string } };

export interface ConfigInterface {
  options?: OptionsInterface;
  theme: Partial<ThemeInterface>;
  variants?: VariantsInterface;
  classNames?: ClassInterface;
}

export interface OptionsInterface {
  [key: string]: any;
}
export interface ThemeInterface {
  [key: string]: Specific<TealThemeParamInterface>;
}

export type TealThemeParamInterface = {
  [key: string]: any | ((any) => any);
};

export type Variants = "responsive" | "hover" | "focus" | "visited";

const Specific = <T>() => <U extends T>(argument: U) => argument;
export interface VariantsInterface {
  [key: string]: Variants[];
}

export interface ClassInterface {
  [key: string]: string;
}

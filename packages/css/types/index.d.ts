import { Variants } from "../lib/compileBaseClassFromTheme";

export type TealValueObject = { [key: string]: { [key: string]: string } };

export type TealThemeParamInterface = {
  [key: string]: { [key: string]: string } | ((any) => any);
};

export interface ConfigInterface {
  options?: OptionsInterface;
  theme: Parital<ThemeInterface>;
  variants?: VariantsInterface;
  classNames?: ClassInterface;
}

export interface OptionsInterface {
  [key: string]: any;
}
export interface ThemeInterface {
  screens: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    [key: string]: string;
  };
  colors: {
    transparent: string;
    current: string;
    [key: string]: TealValueObject | string;
  };
  opacity: {
    [key: number]: string;
    0: string;
    5: string;
    10: string;
    20: string;
    25: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    75: string;
    80: string;
    90: string;
    95: string;
    100: string;
  };
  spacing: {
    [key: string]: string;
  };
  boxShadow: { [key: string]: string };
  borderWidth: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
  };
  backgroundColor: TealThemeParamInterface;
  backgroundOpacity: TealThemeParamInterface;
  gap: TealThemeParamInterface;
  height: TealThemeParamInterface;
  minHeight: TealThemeParamInterface;
  maxHeight: TealThemeParamInterface;
  width: TealThemeParamInterface;
  minWidth: TealThemeParamInterface;
  maxWidth: TealThemeParamInterface;
  padding: TealThemeParamInterface;
  margin: TealThemeParamInterface;
  textColor: TealThemeParamInterface;
  textOpacity: TealThemeParamInterface;
}

export type Variants = "responsive" | "hover" | "focus" | "visited";

export interface VariantsInterface {
  [key: string]: Variants[];
}

export interface ClassInterface {
  [key: string]: string;
}

export function WrapWithMediaQuery(data: string, screen: string) {
  return `@media only screen and (min-width: ${screen}){${data}}`;
}

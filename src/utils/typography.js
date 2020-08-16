import Typography from "typography";
import funstonTheme from "typography-theme-funston";

funstonTheme.baseFontSize = '16px';
const typography = new Typography(funstonTheme);

export const { rhythm } = typography
export default typography
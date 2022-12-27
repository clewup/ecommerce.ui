import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { render } from "@testing-library/react";

const renderHelper = (children: any) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
export default renderHelper;

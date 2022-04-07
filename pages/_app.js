import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import {
  createGlobalStyle,
  ThemeProvider,
  Preflight,
  ColorModeProvider,
  th,
} from "@xstyled/styled-components";

import { theme } from "../config/theme";
const GlobalStyle = createGlobalStyle`
  ${th("global")}
`;
import TinaProvider from "../.tina/components/TinaDynamicProvider";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyle />
        <TinaProvider>
          <Component {...pageProps} />
        </TinaProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

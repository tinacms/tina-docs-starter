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

const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

const branch = process.env.NEXT_PUBLIC_EDIT_BRANCH || "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyle />
        <TinaEditProvider
          editMode={
            <TinaCMS
              mediaStore={async () => {
                const pack = await import("next-tinacms-cloudinary");
                return pack.TinaCloudCloudinaryMediaStore;
              }}
              apiURL={apiURL}
              documentCreatorCallback={{
                /**
                 * After a new document is created, redirect to its location
                 */
                onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                  const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
                  return (window.location.href = relativeUrl);
                },
                /**
                 * Only allows documents to be created to the `Blog Posts` Collection
                 */
                filterCollections: (options) => {
                  return options.filter(
                    (option) => option.label === "Documentation"
                  );
                },
              }}
            >
              <Component {...pageProps} />
            </TinaCMS>
          }
        >
          <Component {...pageProps} />
        </TinaEditProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;

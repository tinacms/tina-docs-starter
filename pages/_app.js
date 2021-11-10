
   
import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
import {
  createGlobalStyle,
  ThemeProvider,
  Preflight,
  ColorModeProvider,
  th,
} from '@xstyled/styled-components'

import { theme } from '../config/theme'
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";
const GlobalStyle = createGlobalStyle`
  ${th('global')}
`

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <Preflight />
      <GlobalStyle />
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            mediaStore={TinaCloudCloudinaryMediaStore}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
            )}
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
            
            {...pageProps}
          >
            {(livePageProps) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App

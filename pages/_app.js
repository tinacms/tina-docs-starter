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
            organization={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
            )}
            documentCreatorCallback={{
              onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                const relativeUrl = `/${slug}/${breadcrumbs.join("/")}`;
                return (window.location.href = relativeUrl);
              },}}
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
import '../styles/globals.scss'
import '../styles/Header.scss'
import '../styles/Basic.scss'
import '../styles/Intro.scss'
import '../styles/effect.scss'
import '../styles/footer.scss'
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// export default MyApp
export default wrapper.withRedux(MyApp);

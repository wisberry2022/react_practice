import './commonCss/mainVisual.scss';
import '../styles/global.scss';
import './commonCss/gnb.scss';
import '../styles/semiGlobal.scss';
import '../styles/mediaQuery.scss';
import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);

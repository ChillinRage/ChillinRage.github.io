import Header from '../jsx-components/Header.jsx';
import { Helmet } from "react-helmet";

function Layout({ children, title }) {
  return (
    <div style={{maxWidth: '650px', margin: 'auto', padding: '0 5px'}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      <Header />

      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

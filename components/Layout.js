import Header from './Header'
import Head from 'next/head';

const Layout = (props) => (
   <React.Fragment>
      <Head>
         <title>Letlo Vin :: { props.title }</title>
         <meta charSet='utf-8' />
         <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      {props.children}
   </React.Fragment>
)
export default Layout

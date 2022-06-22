import { ApolloProvider } from '@apollo/client'
import client from '../src/config/initApollo'
import 'antd/dist/antd.css'
import Layout from '../src/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp

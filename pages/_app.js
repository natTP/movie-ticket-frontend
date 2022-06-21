import { ApolloProvider } from '@apollo/client'
import client from '../src/configs/initApollo'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp

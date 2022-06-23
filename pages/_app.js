import { ApolloProvider } from '@apollo/client'
import client from '../src/config/initApollo'
import 'antd/dist/antd.css'
import Layout from '../src/components/Layout'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../src/redux/store'
import { Spin } from 'antd'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spin tip='กำลังโหลด...' size='large' />}
        persistor={persistor}
      >
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp

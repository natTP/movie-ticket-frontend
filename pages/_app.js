require('../styles/variables.less')
import '../styles/SeatPicker.css'
import { ApolloProvider } from '@apollo/client'
import client from '../src/config/initApollo'
import Layout from '../src/components/common/Layout'
import AuthVerify from '../src/components/common/authVerify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../src/redux/store'
import { ConfigProvider, Spin } from 'antd'
import thTH from 'antd/lib/locale/th_TH'
import 'moment/locale/th'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spin tip='กำลังโหลด...' size='large' />}
        persistor={persistor}
      >
        <ApolloProvider client={client}>
          <ConfigProvider locale={thTH}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
          <AuthVerify />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp

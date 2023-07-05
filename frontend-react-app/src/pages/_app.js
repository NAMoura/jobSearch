import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
      <Toaster />
    </AppLayout>
  )
}

import Layout from '@/components/Layout/Layout'
import ShiftsForm from '@/components/ShiftsForm/ShiftsForm'
import Head from 'next/head'
import { ShiftsContextProvider } from '@/contexts/ShiftsContext'
import ShiftsList from '@/components/ShiftsList/ShiftsList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dyżury</title>
      </Head>
      <Layout heading="Dyżury">
        <ShiftsContextProvider>
          <ShiftsForm />
          <ShiftsList />
        </ShiftsContextProvider>
      </Layout>
    </>
  )
}

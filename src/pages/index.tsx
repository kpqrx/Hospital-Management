import Layout from '@/components/Layout/Layout'
import RecentSalaryWidget from '@/components/RecentSalaryWidget/RecentSalaryWidget'
import TimeChartWidget from '@/components/TimeChartWidget/TimeChartWidget'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Panel pracownika</title>
      </Head>
      <Layout heading="Panel pracownika">
        <TimeChartWidget />
        <RecentSalaryWidget />
      </Layout>
    </>
  )
}

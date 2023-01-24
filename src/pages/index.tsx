import Layout from '@/components/Layout/Layout'
import TimeChartWidget from '@/components/TimeChartWidget/TimeChartWidget'

export default function Home() {
  return (
    <Layout heading="Panel pracownika">
      <TimeChartWidget />
    </Layout>
  )
}

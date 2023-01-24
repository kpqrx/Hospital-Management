import Layout from '@/components/Layout/Layout'
import RecentSalaryWidget from '@/components/RecentSalaryWidget/RecentSalaryWidget'
import TimeChartWidget from '@/components/TimeChartWidget/TimeChartWidget'

export default function Home() {
  return (
    <Layout heading="Panel pracownika">
      <TimeChartWidget />
      <RecentSalaryWidget />
    </Layout>
  )
}

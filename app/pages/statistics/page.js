import Statistics from "@/_components/statistics/Statistics"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Статистика оплат`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const StatisticsPage = () => {
  return <Statistics />
}

export default StatisticsPage

import BalanceHistory from "@/_components/balance/history/BalanceHistory"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | История пополнений`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const BalanceHistoryPage = () => {
  return <BalanceHistory />
}

export default BalanceHistoryPage
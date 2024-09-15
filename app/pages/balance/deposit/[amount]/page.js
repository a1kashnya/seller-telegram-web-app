import BalanceDepositPayment from "@/_components/balance/deposit/BalanceDepositPayment"

export const metadata = {
  title: "SellerWebApp | Balance deposit cost",
  description: "SellerWebApp",
}

const BalanceDepositAmountPage = ({ params }) => {
  return (
    <BalanceDepositPayment amount={params.amount}/>
  )
}

export default BalanceDepositAmountPage
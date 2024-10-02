import Requests from "@/_components/requests/Requests"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Запросы на проверку`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const RequestsPage = () => {
  return <Requests />
}

export default RequestsPage

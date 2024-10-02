import AdvertentieCreate from "@/_components/advertentie/create/AdvertentieCreate"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Создание объявления`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const AdvertentieCreatePage = () => {
  return <AdvertentieCreate />
}

export default AdvertentieCreatePage
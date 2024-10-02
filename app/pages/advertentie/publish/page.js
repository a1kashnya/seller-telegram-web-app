import AdvertentiePublish from "@/_components/advertentie/publish/AdvertentiePublish"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Публикация объявления/акции`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const AdvertentiePublishPage = () => {
  return <AdvertentiePublish />
}

export default AdvertentiePublishPage
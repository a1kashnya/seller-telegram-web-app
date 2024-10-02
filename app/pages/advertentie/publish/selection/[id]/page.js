import AdvertentieSelection from "@/_components/advertentie/publish/selection/AdvertentieSelection"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Редактирование`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const AdvertentieSelectionPage = ({ params }) => {
  return (
    <AdvertentieSelection id={params.id}/>
  )
}

export default AdvertentieSelectionPage
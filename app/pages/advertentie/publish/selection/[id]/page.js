import AdvertentieSelection from "@/_components/advertentie/publish/selection/AdvertentieSelection"

export const metadata = {
  title: "SellerWebApp | Edit publication",
  description: "SellerWebApp",
}

const AdvertentieSelectionPage = ({ params }) => {
  return (
    <AdvertentieSelection id={params.id}/>
  )
}

export default AdvertentieSelectionPage
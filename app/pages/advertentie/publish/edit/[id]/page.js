import AdvertentieEdit from "@/_components/advertentie/publish/edit/AdvertentieEdit"

export const metadata = {
  title: "SellerWebApp | Edit publication",
  description: "SellerWebApp",
}

const AdvertentieEditPage = ({ params }) => {
  return (
    <AdvertentieEdit id={params.id}/>
  )
}

export default AdvertentieEditPage
import PublicationSelection from "@/_components/publication/publish/selection/PublicationSelection"

export const metadata = {
  title: "SellerWebApp | Edit publication",
  description: "SellerWebApp",
}

const PublicationSelectionPage = ({ params }) => {
  return (
    <PublicationSelection id={params.id}/>
  )
}

export default PublicationSelectionPage
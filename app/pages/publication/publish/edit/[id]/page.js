import PublicationEdit from "@/_components/publication/publish/edit/PublicationEdit"

export const metadata = {
  title: "SellerWebApp | Edit publication",
  description: "SellerWebApp",
}

const PublicationEditPage = ({ params }) => {
  return (
    <PublicationEdit id={params.id}/>
  )
}

export default PublicationEditPage
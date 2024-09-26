import PublicationManagementIndex from "@/_components/publicate/management/PublicationManagementIndex"

export const metadata = {
  title: "SellerWebApp | Publication Index page",
  description: "SellerWebApp",
}

const PublicationIndexPage = ({id}) => {
  return (
    <PublicationManagementIndex id={id} />
  )
}

export default PublicationIndexPage
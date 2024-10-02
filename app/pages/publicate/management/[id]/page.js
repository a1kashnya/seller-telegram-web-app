import PublicationManagementIndex from "@/_components/publicate/management/PublicationManagementIndex"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Управление публикациями`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const PublicationIndexPage = ({id}) => {
  return (
    <PublicationManagementIndex id={id} />
  )
}

export default PublicationIndexPage
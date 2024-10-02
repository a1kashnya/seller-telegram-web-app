import PublicationManagement from "@/_components/publicate/management/PublicationManagement"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Управление публикациями`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const PublicationManagementPage = () => {
  return <PublicationManagement />
}

export default PublicationManagementPage
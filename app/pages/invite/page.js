import Invite from "@/_components/invite/Invite"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Приглашения`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
  }

const InvitePage = () => {
  return <Invite />
}

export default InvitePage
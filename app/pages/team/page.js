import Team from "@/_components/team/Team"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Моя команда`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const TeamPage = () => {
  return <Team />
}

export default TeamPage

import TeamUsersAdd from "@/_components/team/TeamUsersAdd"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Добавление пользлвателя`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const TeamUsersAddPage = () => {
  return <TeamUsersAdd />
}

export default TeamUsersAddPage

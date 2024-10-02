import Profile from "@/_components/profile/Profile"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Профиль`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const ProfilePage = () => {
  return <Profile />
}

export default ProfilePage

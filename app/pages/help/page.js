import Help from "@/_components/help/Help"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Помощь`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const HelpPage = () => {
  return <Help />
}

export default HelpPage
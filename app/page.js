import Home from "@/_components/home/Home"

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} | Главная страница`,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

const HomePage = () => {
  return <Home />
}

export default HomePage
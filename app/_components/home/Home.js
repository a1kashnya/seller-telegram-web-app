import Title from "@/_components/_ui/Title"
import Button from "@/_components/_ui/Button"
import Section from "@/_components/_ui/Section"

import MenuData from '@/_data/HomeMenu.json'

const Home = () => {
    return (
        <Section title="Главное меню" backButton={false}>
            {MenuData && MenuData.map(({ id, name, icon, url }) => (
                <Button key={id} type="link" name={name} icon={icon} url={url} />
            ))}
        </Section>
    )
}

export default Home
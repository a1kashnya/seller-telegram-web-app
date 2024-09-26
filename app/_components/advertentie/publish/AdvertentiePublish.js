import Section from "@/_components/_ui/Section"
import Table from "@/_components/_ui/Table"

import columns from "@/_data/tables/advertentie"
import { getAdvertentieById } from "@/_services/database"

const AdvertentiePublish = async () => {
    const data = await getAdvertentieById('123')

    return (
        <Section title="Опубликовать объявление/акцию" url="/">
            <Table columns={columns} data={data} type="advertentie"/>
        </Section>
    )
}

export default AdvertentiePublish
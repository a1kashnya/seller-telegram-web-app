import Section from "@/_components/_ui/Section"
import Form from "@/_components/_ui/Form"

import fields from "@/_data/forms/CreateForm"

const AdvertentieForm = ({ handle, formData, setFormData }) => {
    return (
        <Section title="Заполните форму" url="/">
            <Form 
                fields={fields} 
                handle={handle} 
                formData={formData} 
                setFormData={setFormData} 
                buttonName="Сохранить" 
                buttonIcon="CheckIcon" 
                redirectTo="/" 
            />
        </Section>
    )
}

export default AdvertentieForm
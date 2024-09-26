import Button from '@/_components/_ui/Button'
import Input from '@/_components/_ui/Input'

const Form = ({ fields, formData, setFormData, handle, buttonName, buttonIcon }) => {
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <form onSubmit={handle} className="flex flex-col gap-5 border-l-[5px] border-blue-500 bg-[#3b82f630] p-5 rounded-xl text-white">
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col">
                    <label className='text-xs mb-2 text-center text-blue-100'>{field.label}</label>
                    <Input type={field.type} name={field.name} id={field.name} value={formData[field.name] || ''} onChange={handleChange} required={field.required} placeholder={field.placeholder}/>
                </div>
            ))}
            <Button type="button" name={buttonName} icon={buttonIcon}/>
        </form>
    );
}

export default Form
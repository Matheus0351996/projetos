import { useState } from "react";

const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);

    const onChange = (event) => {
        const {name,value} =event.target;
        setForm({...form,[name]:value});
    };

    const cleanFields = () => {
        setForm(initialValues);
    };

    return {form , onChange, cleanFields};
};

export default useForm;
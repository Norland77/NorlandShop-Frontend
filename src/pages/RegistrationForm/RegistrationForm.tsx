import React, {useCallback, useEffect, useState} from 'react';
import "./RegistrationForm.css";
import {useTelegram} from "../../hooks/useTelegram";
interface FormValues {
    name: string;
    email: string;
    password: string;
    region: string;
    city: string;
    street: string;
    postalCode: string;
}

const RegistrationForm: React.FC = () => {
    const {tg} = useTelegram();
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Зареєструватися'
        })
    }, [tg.MainButton]);



    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        email: '',
        password: '',
        region: '',
        city: '',
        street: '',
        postalCode: '',
    });

    useEffect( () => {
        if (formValues.name === ''||
            formValues.email === ''||
            formValues.password === ''||
            formValues.region === ''||
            formValues.city === ''||
            formValues.street === ''||
            formValues.postalCode === '') {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [formValues.name, formValues.email, formValues.password, formValues.region, formValues.city, formValues.street, formValues.postalCode, tg.MainButton])

    const onSendData = useCallback( () => {
        console.log("SEND DATA");
        Telegram.WebApp.sendData(JSON.stringify(formValues));
    }, [formValues])
    
    useEffect( () => {
        Telegram.WebApp.onEvent('mainButtonClicked', onSendData)
        return () => {
            Telegram.WebApp.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
            />
            <label htmlFor="region">Region:</label>
            <input
                type="text"
                id="region"
                name="region"
                value={formValues.region}
                onChange={handleChange}
            />
            <label htmlFor="city">City:</label>
            <input
                type="text"
                id="city"
                name="city"
                value={formValues.city}
                onChange={handleChange}
            />
            <label htmlFor="street">Street:</label>
            <input
                type="text"
                id="street"
                name="street"
                value={formValues.street}
                onChange={handleChange}
            />
            <label htmlFor="postalCode">Postal Code:</label>
            <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formValues.postalCode}
                onChange={handleChange}
            />
        </form>
    );
};

export default RegistrationForm;
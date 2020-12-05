import React from 'react'
import Button from './Button'
import Checkbox from './Checkbox'
import InputWithLabel from './InputWithLabel'
import { useForm } from 'react-hook-form'

import * as Yup from 'yup';

const BookingForm = () => {
    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <form className="columns is-multiline" onSubmit={handleSubmit(onSubmit)}>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="Name *"
                    name="name"
                    register={register({
                        required: {
                            value: true,
                            message: "This field cannot be empty"
                        },
                    })}
                    error={errors.name}
                />
            </div>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="Surname *"
                    name="surname"
                    register={register({
                        required: {
                            value: true,
                            message: "This field cannot be empty"
                        },
                    })}
                    error={errors.surname}
                />
            </div>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="Email *"
                    name="email"
                    register={register({
                        required: {
                            value: true,
                            mzssage: "This field cannot be empty!"
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Enter a valid e-mail address",
                        },
                        // validate: (input) => isEmail(input),
                    })}
                    error={errors.email}
                />
            </div>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="Telephone *"
                    name="telephone"
                    register={register({
                        required: {
                            value: true,
                            message: "This field cannot be empty"
                        },
                    })}
                    error={errors.telephone}
                />
            </div>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="Address"
                    name="address"
                    register={register}
                    error={errors.address}
                />
            </div>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="City"
                    name="city"
                    register={register}
                    error={errors.city}
                />
            </div>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="Country"
                    name="country"
                    register={register}
                    error={errors.country}
                />
            </div>
            <div className="column is-half">
                <InputWithLabel
                    type="text"
                    label="ZIP"
                    name="zipcode"
                    register={register}
                    error={errors.zipcode}
                />
            </div>
            <div className="column is-full">
                <InputWithLabel
                    type="textarea"
                    label="Requests"
                    name="requests"
                    register={register}
                    error={errors.requests}
                />
            </div>
            <div className="column is-full">
                <InputWithLabel
                    type="text"
                    label="Arrival"
                    name="arrival"
                    register={register}
                    error={errors.arrival}
                />
            </div>
            <div className="column is-full">
                <InputWithLabel
                    type="text"
                    label="Coupon"
                    name="coupon"
                    register={register}
                    error={errors.coupon}
                />
            </div>
            <div className="column is-full">
                <Checkbox
                    register={register({
                        required: "Accept the terms first"
                    })}
                    name="acceptTerms"
                    id="acceptTerms"
                >Terms and Conditions *</Checkbox>
            </div>

            <div className="column">
                <Button text="CHECKOUT" type="submit" />
            </div>
        </form>
    )
}

export default BookingForm

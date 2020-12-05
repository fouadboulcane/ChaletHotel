import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import './CustomDatepicker.scss'

const CustomDatepicker = (props) => {




    const ExampleCustomInput = ({ value, onClick }) => (
        <img src="/images/icon-down-arrow-grey.svg" width="13px" alt="" onClick={onClick} />
    );

    return (
        <div>
            <DatePicker
                // selected={startDate}
                onChange={(date) => props.onChange(date)}
                customInput={<ExampleCustomInput />}
                calendarClassName="calendaros"
                orientation="bottom left auto"
                popoverAttachment='bottom'
                popoverTargetAttachment='bottom'

            />
        </div>
    )
}

export default CustomDatepicker

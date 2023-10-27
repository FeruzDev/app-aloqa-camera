import React from 'react';
import {DatePicker} from "antd"
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const Calendar = () => {
    return (
        <div>
            <RangePicker
                defaultValue={[dayjs('2023/01/01', dateFormat), dayjs('2023/01/01', dateFormat)]}
                format={dateFormat}
            />
        </div>
    );
};

export default Calendar;
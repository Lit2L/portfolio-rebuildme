import React from 'react'
import { DatetimePicker } from '@/components/ui/datetime-picker'

export const DatetimePickerDemo = () => {
	return (
		<DatetimePicker
			className='w-full border-4 flex space-x-1'
			format={[
				['months', 'days', 'years'],
				['hours', 'minutes', 'am/pm']
			]}
		/>
	)
}

export default DatetimePickerDemo

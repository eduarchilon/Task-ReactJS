import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { parse } from 'date-fns'

export default function DateSetter({ onChange, dueDate }) {
  const [value, setValue] = useState()

  useEffect(() => {
    setValue(parse(dueDate, 'dd/MM/yyyy', new Date()))
  }, [dueDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          console.log(newValue)
          setValue(newValue)
          onChange(newValue)
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

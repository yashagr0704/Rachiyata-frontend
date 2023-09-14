import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import StyledSelect from './StyledSelect'

const menuList = [
  {
    label: 'English',
    value: 'NO',
  },
  {
    label: 'Hindi',
    value: 'PO',
  },
]

const SelectLanguage = () => {
  const methods = useForm({ defaultValues: { language: menuList[0].value } })

  return (
    <FormProvider {...methods}>
      <StyledSelect menuList={menuList} name="language" />
    </FormProvider>
  )
}

export default SelectLanguage

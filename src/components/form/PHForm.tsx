import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const PHForm = ({onSubmit,children}) => {
     const methods=useForm();
  return (
    <FormProvider {...methods}>
    <form onClick={methods.handleSubmit(onSubmit)}>
      {children}
    </form>
    </FormProvider>
  )
}


export default PHForm
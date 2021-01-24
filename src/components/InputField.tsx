import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea
} from '@chakra-ui/react'
import { useField } from 'formik'
import React from 'react'

// import { Container } from './styles';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  textArea?: boolean
}

export const InputText: React.FC<InputFieldProps> = ({
  label,
  textArea,
  size: _,
  ...props
}) => {
  let InputOrTextarea = Input

  if (textArea) {
    InputOrTextarea = Textarea
  }
  const [field, { error }] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  )
}

import { Form, Formik } from 'formik'
import React from 'react'
import { InputText, Wrapper } from '../components'

// import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <InputText
              name="username"
              placeholder="username"
              label="Username"
            />
            <InputText
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default pages

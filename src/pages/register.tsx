import { Box, Button } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { useMutation } from 'urql'
import { InputText, Wrapper } from '../components'

// import { Container } from './styles';

const REGISTER_MUT = `
mutation Register($username: String!, $password: String!) {
  register(options: { username: $username, password: $password }) {
    user {
      id
      username
    }
    errors {
      field
      message
    }
  }
}`

const Register = () => {
  const [, register] = useMutation(REGISTER_MUT)
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          return register(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
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
            </Box>
            <Button
              mt={4}
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Register

import { Box, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import React, { useState } from 'react'
import { Wrapper, InputText } from '../components'
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from '../utils/createUrqlClient'
import { useForgotPasswordMutation } from '../generated/graphql'

// import { Container } from './styles';

const ForgotPassword: React.FC = () => {
  const [complete, setcomplete] = useState(false)
  const [, forgotPassword] = useForgotPasswordMutation()
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: '' }}
        onSubmit={async (values) => {
          await forgotPassword(values)
          setcomplete(true)
        }}
      >
        {({ isSubmitting }) =>
          complete ? (
            <Box>if an account with that email, we sent you an email</Box>
          ) : (
            <Form>
              <InputText
                name="email"
                placeholder="email"
                label="Email"
                type="email"
              />

              <Button
                mt={4}
                type="submit"
                colorScheme="teal"
                isLoading={isSubmitting}
              >
                Forgot Password
              </Button>
            </Form>
          )
        }
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient)(ForgotPassword)

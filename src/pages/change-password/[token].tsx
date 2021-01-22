import { Box, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { NextPage } from 'next'
import router from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { Wrapper, InputText } from '../../components'
import { toErrorMap } from '../../utils/toErrorMap'
import login from '../login'

// import { Container } from './styles';

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, { setErrors }) => {
          // const response = await login(values)
          // if (response.data?.login.errors) {
          //   setErrors(toErrorMap(response.data.login.errors))
          // } else if (response.data?.login.user) {
          //   router.push('/')
          // }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mt={4}>
              <InputText
                name="newPassword"
                placeholder="new password"
                label="New Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string
  }
}

export default ChangePassword

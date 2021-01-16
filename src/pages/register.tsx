import { Box, Button } from '@chakra-ui/react'
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

export default pages

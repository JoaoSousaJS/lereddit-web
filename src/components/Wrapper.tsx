import { Box } from '@chakra-ui/react'
import React from 'react'

// import { Container } from './styles';

type WrapperProps = {
  children: React.ReactNode
  variant?: 'small' | 'regular'
}

export const Wrapper = ({ children, variant = 'regular' }: WrapperProps) => {
  return (
    <Box
      maxW={variant === 'regular' ? '800px' : '400px'}
      w="100%"
      mt={8}
      mx="auto"
    >
      {children}
    </Box>
  )
}

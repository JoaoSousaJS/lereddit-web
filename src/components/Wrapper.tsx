import { Box } from '@chakra-ui/react'
import React from 'react'

// import { Container } from './styles';

export type WrapperVariant = 'small' | 'regular'

type WrapperProps = {
  children: React.ReactNode
  variant?: WrapperVariant
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

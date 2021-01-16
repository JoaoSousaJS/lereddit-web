import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

// import { Container } from './styles';

export const NavBar: React.FC = () => {
  return (
    <Flex bg="tomato" p={4}>
      <Box ml={'auto'}>
        <NextLink href="/login">
          <Link mr={4}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </Box>
    </Flex>
  )
}

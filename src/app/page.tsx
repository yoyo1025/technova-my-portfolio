'use client'

import { Avatar, Box, Button, Center, Flex, Heading, Input, Spacer, useColorMode, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Center gap='50' marginTop='10'>
        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                name='Yosei Tadano'
                boxSize={['100px', '150px', '170px']}
                src="/my-face.jpg"
              />
            </WrapItem>
          </Wrap>
        </Box>
        <Box>
            <Text fontSize={['2xl', '3xl', '4xl']}>Yosei Tadano</Text>
            <Text fontSize={['xs', 'xl', 'xl']}>SIT Electronics Information</Text>
        </Box>
      </Center>
    </>
  )
}

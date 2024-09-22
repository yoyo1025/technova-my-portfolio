'use client'

import { Avatar, Box, Button, Center, Flex, Heading, Input, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode, useColorModeValue, Wrap, WrapItem } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Center gap="50px" mt={10} bg='#daede3' padding='5'>
        <Box>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Yosei Tadano"
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

      <Tabs variant="soft-rounded" colorScheme="green" mt={10}>
        <TabList>
          <Tab marginLeft='10'>About</Tab>
          <Tab marginLeft='10'>Career</Tab>
          <Tab marginLeft='10'>Tools</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>one!</Text>
          </TabPanel>
          <TabPanel>
            <Text>two!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
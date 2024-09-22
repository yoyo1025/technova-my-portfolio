'use client'

import { InfoIcon } from "@chakra-ui/icons";
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
            <Flex alignItems='center' gap="10px">
              <InfoIcon boxSize={8}/>
              <Text>私について</Text>
            </Flex>
            <Box bg='#dce0dd' borderRadius='5' padding='8' marginTop='5'>
                芝浦工業大学三年生の只野陽生と申します。
                長期やサマーインターンシップ、技術系イベント、サークルなどを通じて新たな技術を学んだり、
                スキルを伸ばしたりしています。バックエンド・フロントエンド共に学習中ですが、チーム開発では
                バックエンドを担当することが多いです。
                <br/>
                <br/>
                普段は株式会社Donutsのミクチャエンジニアチームで長期インターンに取り組んでいます。以前は業務で
                ミクチャの社内管理ツールのバックエンドを担当することが多かったのですが、最近はそれに加えて
                WebフロントやDBのパフォーマンス改善を担当しています。
            </Box>
          </TabPanel>
          <TabPanel>
            <Text>two!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
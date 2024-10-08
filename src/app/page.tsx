'use client'

import { AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import { Avatar, Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap, WrapItem, HStack, Icon, Link, Image } from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    <Text mt={2}  fontWeight="bold" fontSize={['xl', '2xl', '2xl']} marginLeft={2}>Wellcome to My Page!</Text>
      <Center gap="50px" mt={2} bg='#daede3'>
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
          <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">Yosei Tadano</Text>
          <Text fontSize={['xs', 'xl', 'xl']} color={"#939794"} fontWeight="bold">SIT student ・ Donuts Inc.</Text>
        </Box>
      </Center>

      <Tabs variant="soft-rounded" colorScheme="green" mt={10}>
        <TabList>
          <Tab marginLeft='10'>About</Tab>
          <Tab marginLeft='10'>Career</Tab>
          <Tab marginLeft='10'>Tools</Tab>
          <Tab marginLeft='10'>LINK</Tab>
          <Tab marginLeft='10'>Activity</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex alignItems='center' gap="10px">
              <InfoIcon boxSize={8}/>
              <Text  fontWeight="bold" color={"#3d3d3d"}>私について</Text>
            </Flex>
            <Box bg='#daede3' borderRadius='5' padding='8' marginTop='5' >
              <Text  fontWeight="bold" color={"#3d3d3d"}>
                芝浦工業大学三年生の只野陽生と申します。
                長期やサマーインターンシップ、技術系イベント、サークルなどを通じて新たな技術を学んだり、
                スキルを伸ばしたりしています。バックエンド・フロントエンド共に学習中ですが、チーム開発では
                バックエンドを担当することが多いです。
                <br/>
                <br/>
                普段は株式会社Donutsのミクチャエンジニアチームで長期インターンに取り組んでいます。以前は業務で
                ミクチャの社内管理ツールのバックエンドを担当することが多かったのですが、最近はそれに加えて
                WebフロントやDBのパフォーマンス改善、既存アプリのGoへのリプレイスを担当しています。
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Flex alignItems='center' gap="10px">
              <AtSignIcon boxSize={8}/>
              <Text fontWeight="bold">Career</Text>
            </Flex>
            <Box bg='#83ebc1' borderRadius='5' padding='3' marginTop='5'>
              <Box bg="#dff7ee" padding='2' borderRadius='5' fontWeight="bold" color={"#3d3d3d"}>2022年4月 <br/> 芝浦工業大学 システム理工学部 電子情報システム学科　入学</Box>
              <Box bg="#dff7ee" padding='2' borderRadius='5' marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2022年5月<br/> ナビ個別指導学院　入社</Box>
              <Box bg="#dff7ee" padding='2' borderRadius='5' marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2024年3月<br/> ナビ個別指導学院　退社</Box>
              <Box bg="#dff7ee" padding='2' borderRadius='5' marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2026年3月<br/> 芝浦工業大学大学院システム理工学専攻　卒業予定</Box>
            </Box>
            <Flex alignItems='center' gap="10px"　 paddingTop='5'>
              <AtSignIcon boxSize={8}/>
              <Text fontWeight="bold">InternShip</Text>
            </Flex>
            <Box bg='#72cef2' borderRadius='5' padding='3' marginTop='5'>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5' fontWeight="bold" color={"#3d3d3d"}>2024年2月<br/> 株式会社Donuts　（長期インターンで現在も就業中）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5' marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2024年7月<br/> 株式会社BuySell Technologies（サマーインターン）</Box> 
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2024年8月<br/> 合同会社DMM.com　（サマーインターン）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2024年8月<br/> 株式会社三菱UFJインフォメーションテクノロジー　（サマーインターン）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2024年8月<br/> 株式会社KDDIアジャイル　（サマーインターン）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2024年9月<br/> 株式会社NECソリューションイノベータ　（サマーインターン）</Box>                
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3} fontWeight="bold" color={"#3d3d3d"}>2024年9月<br/> 株式会社Carta Holdings　（サマーインターン）</Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Flex alignItems='center' gap="10px">
              <SettingsIcon boxSize={8}/>
              <Text fontWeight="bold">Exprerience</Text>
            </Flex>
            <Text fontWeight="bold" marginTop={3}>・Front</Text>
            <Box bg='#83ebc1' borderRadius='5' padding='5'>
              <Text fontWeight="bold" color={"#3d3d3d"} >TypeScript / React / Next.js</Text>
            </Box>
            <Text fontWeight="bold" marginTop={3}>・Back</Text>
            <Box bg='#72cef2' borderRadius='5' padding='5'>
              <Text fontWeight="bold" color={"#3d3d3d"}>Go / Echo</Text>
              <Text fontWeight="bold" color={"#3d3d3d"}>Java / SpringBoot</Text>
            </Box>
            <Text fontWeight="bold" marginTop={3}>・DB</Text>
            <Box bg='#c2a3f7' borderRadius='5' padding='5'>
              <Text fontWeight="bold" color={"#3d3d3d"}>RDBMS (MySQL / PostgreSQL)</Text>
            </Box>
            <Text fontWeight="bold" marginTop={3}>・Infra / other</Text>
            <Box bg='#cccccc' borderRadius='5' padding='5'>
              <Text fontWeight="bold" color={"#3d3d3d"}>Git / GitHub</Text>
              <Text fontWeight="bold" color={"#3d3d3d"}>Docker</Text>
              <Text fontWeight="bold" color={"#3d3d3d"}>AWS</Text>
              <Text fontWeight="bold" color={"#3d3d3d"}>Firebase</Text>
              <Text fontWeight="bold" color={"#3d3d3d"}>Render</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text fontWeight="bold" color={"#939794"} >
              I use Github, Twitter, instagram and Discord. Here are my accounts.
              Please follow me.
            </Text>
            <HStack mt={7}>
              <Text fontSize={24}>・</Text>
              <Link href="https://github.com/yoyo1025" isExternal>
                <HStack>
                  <Icon as={IoLogoGithub} boxSize={8} />
                  <Text fontWeight="bold">GitHub</Text>
                </HStack>
              </Link>
            </HStack>

            <HStack mt={7}>
              <Text fontSize={24}>・</Text>
              <Link href="https://twitter.com/yoyo_021025" isExternal>
                <HStack>
                  <Icon as={IoLogoTwitter} boxSize={8} />
                  <Text fontWeight="bold">Twitter</Text>
                </HStack>
              </Link>
            </HStack>
          </TabPanel>
          <TabPanel>
            <Center>
            <Flex gap={10}>
            <Box mt={5}>
              <Image src="/my-app-1.png" alt="My App 1" width="500px" height="350px" />
            </Box>
            <Box mt={5}>
              <Image src="/my-app-2.png" alt="My App 2" width="500px" height="350px" />
            </Box>
            </Flex>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
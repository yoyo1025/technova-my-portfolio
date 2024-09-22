'use client'

import { AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import { Avatar, Box, Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Wrap, WrapItem } from "@chakra-ui/react";
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
            <Box bg='#daede3' borderRadius='5' padding='8' marginTop='5'>
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
            <Flex alignItems='center' gap="10px">
              <AtSignIcon boxSize={8}/>
              <Text>経歴</Text>
            </Flex>
            <Box bg='#83ebc1' borderRadius='5' padding='3' marginTop='5'>
              <Box bg="#dff7ee" padding='2' borderRadius='5' >2022年4月 <br/> 芝浦工業大学 システム理工学部 電子情報システム学科　入学</Box>
              <Box bg="#dff7ee" padding='2' borderRadius='5' marginTop={3}>2022年5月<br/> ナビ個別指導学院　入社</Box>
              <Box bg="#dff7ee" padding='2' borderRadius='5' marginTop={3}>2024年3月<br/> ナビ個別指導学院　退社</Box>
              <Box bg="#dff7ee" padding='2' borderRadius='5' marginTop={3}>2026年3月<br/> 芝浦工業大学大学院システム理工学専攻　卒業予定</Box>
            </Box>
            <Flex alignItems='center' gap="10px"　 paddingTop='5'>
              <AtSignIcon boxSize={8}/>
              <Text>インターン</Text>
            </Flex>
            <Box bg='#72cef2' borderRadius='5' padding='3' marginTop='5'>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'>2024年2月<br/> 株式会社Donuts　（長期インターンで現在も就業中）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5' marginTop={3}>2024年7月<br/> 株式会社BuySell Technologies（サマーインターン）</Box> 
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3}>2024年8月<br/> 合同会社DMM.com　（サマーインターン）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3}>2024年8月<br/> 株式会社三菱UFJインフォメーションテクノロジー　（サマーインターン）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3}>2024年8月<br/> 株式会社KDDIアジャイル　（サマーインターン）</Box>
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3}>2024年9月<br/> 株式会社NECソリューションイノベータ　（サマーインターン）</Box>                
              <Box  bg="#dcf3fc" padding='2' borderRadius='5'marginTop={3}>2024年9月<br/> 株式会社Carta Holdings　（サマーインターン）</Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Flex alignItems='center' gap="10px">
              <SettingsIcon boxSize={8}/>
              <Text>使用可能技術</Text>
            </Flex>
            ・フロントエンド
            <Box bg='#daede3' borderRadius='5' padding='5'>
              <Text>TypeScript / React / Next.js</Text>
            </Box>
            ・バックエンド
            <Box bg='#daede3' borderRadius='5' padding='5'>
              <Text>Go / Echo</Text>
              <Text>Java / SpringBoot</Text>
            </Box>
            ・データベース
            <Box bg='#daede3' borderRadius='5' padding='5'>
              <Text>RDBMS (MySQL / PostgreSQL)</Text>
            </Box>
            ・インフラ/その他
            <Box bg='#daede3' borderRadius='5' padding='5'>
              <Text>Git / GitHub</Text>
              <Text>Docker</Text>
              <Text>AWS</Text>
              <Text>Firebase</Text>
              <Text>Render</Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
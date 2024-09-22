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
            <Flex alignItems='center' gap="10px">
              <AtSignIcon boxSize={8}/>
              <Text>経歴</Text>
            </Flex>
            <Box bg='#dce0dd' borderRadius='5' padding='8' marginTop='5'>
              <Text>2022年4月　芝浦工業大学 システム理工学部 電子情報システム学科　入学</Text>
              <Text>2022年5月　ナビ個別指導学院　入社</Text>
              <Text>2024年3月　ナビ個別指導学院　退社</Text>
              <Text>2026年3月　芝浦工業大学大学院システム理工学専攻　卒業予定</Text>
            </Box>
            <Flex alignItems='center' gap="10px"　 paddingTop='5'>
              <AtSignIcon boxSize={8}/>
              <Text>インターン</Text>
            </Flex>
            <Box bg='#dce0dd' borderRadius='5' padding='8' marginTop='5'>
              <Text>2024年2月　株式会社Donuts　（長期インターンで現在も就業中）</Text>
              <Text>2024年7月　株式会社BuySell Technologies（サマーインターン）</Text>
              <Text>2024年8月　合同会社DMM.com　（サマーインターン）</Text>
              <Text>2024年8月　株式会社三菱UFJインフォメーションテクノロジー　（サマーインターン）</Text>
              <Text>2024年8月　株式会社KDDIアジャイル　（サマーインターン）</Text>
              <Text>2024年9月　株式会社NECソリューションイノベータ　（サマーインターン）</Text>                <Text>2024年9月　株式会社Carta Holdings　（サマーインターン）</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Flex alignItems='center' gap="10px">
              <SettingsIcon boxSize={8}/>
              <Text>使用可能技術</Text>
            </Flex>
            ・フロントエンド
            <Box bg='#dce0dd' borderRadius='5' padding='5'>
              <Text>TypeScript / React / Next.js</Text>
            </Box>
            ・バックエンド
            <Box bg='#dce0dd' borderRadius='5' padding='5'>
              <Text>Go / Echo</Text>
              <Text>Java / SpringBoot</Text>
            </Box>
            ・データベース
            <Box bg='#dce0dd' borderRadius='5' padding='5'>
              <Text>RDBMS (MySQL / PostgreSQL)</Text>
            </Box>
            ・インフラ/その他
            <Box bg='#dce0dd' borderRadius='5' padding='5'>
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
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme(); // Material UI のテーマを作成

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider>
                {/* <ThemeProvider theme={theme}> */}
                    {children}
                {/* </ThemeProvider> */}
            </ChakraProvider>
        </CacheProvider>
    )
}

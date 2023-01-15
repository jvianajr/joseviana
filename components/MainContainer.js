import React from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'  
import { Container, Box, Flex } from '@chakra-ui/react'
  


export default function MainContainer({ children }) {
    return (
        <>
        <Navbar />
        <Flex     
        height="100%"
        direction="column"
        justifyContent="center"
        alignItems="center"
        pt="50px"
        pb="50px"
        bgGradient="linear(purple.50 0%, blue.50 25%, purple.50 50%, white.50 80%)"> 
    
            <main>{children}</main>

        </Flex>
        <Footer />
        </>
    )
}

import Head from 'next/head'
import Link from 'next/link'
import {
  Container, Heading, Text, Stack, Box
} from '@chakra-ui/react'
import Image from 'next/image'


export default function Home({ quant }) {
  return (
    <>
      <Head>
        <title>José Viana</title>
        <meta name="keywords" content="joseviana"></meta>
        <meta name="description" content="José Viana"></meta>
      </Head>
      <Container maxW='4xl'>
        <Stack spacing={4} pt="20">
        <Box align="center">
            <Image src="/images/2018_delirioemriomar[print-video]joseviana.png" width="500" height="333" alt="Ilha. José Viana, 2012."/>
            <Text pt="5" fontSize="xs" color="gray.600"><i>Delírio em Rio Mar</i>. Print de vídeo, 2019.</Text>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

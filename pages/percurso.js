import Head from 'next/head'
import Image from 'next/image'
import { Container, Stack, Text, Heading, Box } from '@chakra-ui/react'

export default function Percurso() {
    return (
        <>
     <Head>
  <title>Percurso de José Viana</title>
  <meta name="keywords" content="jose-viana"></meta>
  <meta name="description" content="José Viana, artista, educador, pesquisador"></meta>
</Head>
<Container maxW='4xl'>
        <Stack spacing={2}>
        <Text pt="14">Percurso de José Viana.</Text>
        <Image src="/images/2018_delirioemriomar[print-video]joseviana.png" width="500" height="333" alt="Ilha. José Viana, 2012."/>
        </Stack>
    </Container>
    </>
    )
}
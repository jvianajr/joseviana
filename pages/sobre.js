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
        <Box align="center" pt="20">
        <Image src="/images/JoseViana [foto-RodrigoJose].jpg" width="600" height="400" alt="Retrato de José Viana, por Rodrigo José, 2019."/>
        </Box>
        <Text pt="3" fontSize="sm"><b>José Viana</b>, Belém, Pará, 1988.</Text> 
        <Text fontSize="sm">Artista, educador e pesquisador brasileiro. Vive e trabalha entre Belém e São Paulo. Sua investigação gira em torno dos conceitos de paisagem, matéria, cotidiano e espaço. Em sua trajetória, da imagem técnica à ilusão do movimento, quis tocar o mundo ao seu redor. Passou a coletar elementos variados - materiais e imateriais, ficcionalizando o espaço como o possível para a manifestação das forças poéticas. Surgem instalações que integram pesquisas em suportes diferentes - da pintura à escultura, do som à palavra. Seu interesse atual reside no chamado à presença.</Text>
        </Stack>
    </Container>
    </>
    )
}



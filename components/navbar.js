import Link from 'next/link'
import Image from 'next/image'
import { Box, Text, Flex, Spacer, HStack } from '@chakra-ui/react'


export default function Navbar() {
    return (
    <>
    <Flex p="5">
        <Box><Link href="/">
        <Text><b>José Viana</b></Text></Link></Box>
        <Spacer />
        <Box><HStack spacing='24px'>
       <Link legacyBehavior href="/percurso">
                <a>percurso</a>
            </Link>
            <Link legacyBehavior href="/trabalhos">
            <a>trabalhos</a>
            </Link>
            <Link legacyBehavior href="/sobre">
            <a>sobre</a>
            </Link>
            <Link legacyBehavior href="/contato">
            <a>contato</a>
            </Link>
            </HStack>
            </Box>
    </Flex>
    </>
    )
}
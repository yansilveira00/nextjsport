import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou José Despreocupado </Name>
        <Function>Desenvolvedor Web</Function>
        <Intro>Graduado em Bacharelado em Sistemas de Informação, pelo IFNMG Campus Salinas
          em 2023, tenho experiência em desenvolvimento Web
          (React, Asp, JS e outros), mobile e criação de conteúdo para o YouTube.
        </Intro>
        <Link href="projects" passHref>
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
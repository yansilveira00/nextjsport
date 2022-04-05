import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSidebar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            José Despreocupado
          </Title>
          <SubTitle>
            Portfolio Pessoal
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSidebar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSidebar}><FaTimes /></CloseSidebar>
          <Link href="/" passHref>
            <Ancora className={activeLink('')} onClick={showSidebar}>Home</Ancora>
          </Link>
          <Link href="projects" passHref>
            <Ancora className={activeLink('projects')} onClick={showSidebar}>Projetos</Ancora>
          </Link>
          <Link href="contact" passHref>
            <Ancora className={activeLink('contact')} onClick={showSidebar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}

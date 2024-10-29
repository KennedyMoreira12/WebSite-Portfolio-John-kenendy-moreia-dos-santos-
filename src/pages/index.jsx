import { FaArrowRight } from 'react-icons/fa';
import { Container, Content, Infos, Name, Function, Intro, Logo, Img } from '../../styles/indexStyle';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    background-color: #005bb5;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const RoundedImg = styled(Img)`
  border-radius: 50%;
`;

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, Sou John Kennedy Moreira Dos Santos</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Graduado em Sistemas de Informação, tenho experiência em desenvolvimento Web (React | JS | Python | PHP | C | JAVA), mobile e criação de projetos de Robótica e mais.
          </Intro>
          <LinkContainer>
            <Link href="/projects" passHref>
              <StyledButton>
                PROJETOS <FaArrowRight style={{ marginLeft: '5px' }} />
              </StyledButton>
            </Link>
            <StyledButton href="/Curriculo/Currículo.pdf" download>
              Download CV
            </StyledButton>
          </LinkContainer>
        </Infos>
        <Logo>
          <RoundedImg src="/images/logo.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  );
}

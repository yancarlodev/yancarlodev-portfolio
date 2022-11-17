import type { NextPage } from 'next'
import Link from 'next/link'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import SEO from '../components/SEO'
import * as S from '../styles'

const Home: NextPage = () => {
    return (
        <>
        <SEO title='Início' description='Sou apaixonado por resolver problemas e propor soluções funcionais e criativas, sempre buscando as melhores práticas do mercado.'/>
        
        <S.Container>
            <Header/>
            
            <S.Main>
                <S.Wrapper to='text'>
                    <S.PageIdentifier>INÍCIO</S.PageIdentifier>
                    <S.Title>Olá, meu nome é Yan Carlo e sou um dev Full-stack!</S.Title>
                    <S.subTitle>Sou apaixonado por resolver problemas e propor soluções funcionais e criativas, sempre buscando as melhores práticas do mercado.</S.subTitle>
                </S.Wrapper>

                <S.Wrapper to='button'>
                    <Link href='./contato'>
                        <S.Button color='red'>Contato</S.Button>
                    </Link>
                    <Link href='./projetos'>
                        <S.Button color='transparent'>Projetos</S.Button>
                    </Link>
                </S.Wrapper>
            </S.Main>
            
            <BackgroundImage/>
        </S.Container>
        </>
    )
}

export default Home

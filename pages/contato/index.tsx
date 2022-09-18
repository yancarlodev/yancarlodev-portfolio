import Header from "../../components/Header";
import SEO from "../../components/SEO";
import * as Shared from '../../styles/'
import { SiWhatsapp, SiGmail, SiLinkedin, SiGithub } from 'react-icons/si'
import * as TechShared from '../tecnologias/styles'
import BackgroundImage from "../../components/BackgroundImage";

const iconsInfo = [
    {
        id: 1,
        icon: SiWhatsapp,
        title: 'Whatsapp',
        size: 45,
        href: 'https://api.whatsapp.com/send?phone=5545998110952&text=Ol%C3%A1%20Yan%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!'
    },
    {
        id: 2,
        icon: SiGmail,
        title: 'Gmail',
        size: 45,
        href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=yancarlodc@gmail.com'
    },
    {
        id: 3,
        icon: SiLinkedin,
        title: 'Linkedin',
        size: 45,
        href: 'https://www.linkedin.com/in/yancarlodev/'
    },
    {
        id: 4,
        icon: SiGithub,
        title: 'Github',
        size: 45,
        href: 'https://github.com/yancarlodev'
    }
]

export default function Contato() {
    return(
        <>
        <SEO title='Tecnologias' description='Estou em constante busca de conhecimento, então essa lista só tende a crescer!'/>
        
        <Shared.Container>
            <Header/>
            
            <Shared.Main page='contact'>
                <Shared.Wrapper to='text'>
                    <Shared.PageIdentifier>CONTATO</Shared.PageIdentifier>
                    <Shared.Title>Vamos construir coisas maravilhosas juntos!</Shared.Title>
                    <Shared.subTitle>Atualmente estou procurando por uma oportunidade de trabalho, então aguardo ansiosamente seu contato!</Shared.subTitle>
                </Shared.Wrapper>

                <Shared.Wrapper to='icons' as='ul'>
                    {
                        iconsInfo.map(({icon: Icon, id, title, size, href}) =>
                            <a key={id} href={href} target='_blank' rel="noopener noreferrer">
                                <TechShared.IconContainer type='contact'>
                                    <Icon size={size}/>
                                    <TechShared.IconTitle type='contact'>{title}</TechShared.IconTitle>
                                </TechShared.IconContainer>
                            </a>
                        )
                    }
                </Shared.Wrapper>
            </Shared.Main>
            
            <BackgroundImage/>
        </Shared.Container>
        </>
    )
}
import Header from "../../components/Header";
import SEO from "../../components/SEO";
import * as Shared from '../../styles/'
import * as Tech from './styles'
import { SiTypescript, SiGit, SiReact, SiTailwindcss, SiSass, SiNextdotjs } from 'react-icons/si'
import BackgroundImage from "../../components/BackgroundImage";

const iconsInfo = [
    {
        id: 1,
        icon: SiNextdotjs,
        title: 'NextJS',
        size: 65
    },
    {
        id: 2,
        icon: SiReact,
        title: 'React',
        size: 65
    },
    {
        id: 3,
        icon: SiTypescript,
        title: 'Typescript',
        size: 65
    },
    {
        id: 4,
        icon: SiSass,
        title: 'Sass',
        size: 65
    },
    {
        id: 5,
        icon: SiTailwindcss,
        title: 'Tailwind',
        size: 65
    },
    {
        id: 6,
        icon: SiGit,
        title: 'Git',
        size: 65
    }
]

export default function Tecnologias() {
    return(
        <>
        <SEO title='Tecnologias' description='Estou em constante busca de conhecimento, então essa lista só tende a crescer!'/>
        
        <Shared.Container>
            <Header/>
            
            <Shared.Main page='tech'>
                <Shared.Wrapper to='text'>
                    <Shared.PageIdentifier>TECNOLOGIAS</Shared.PageIdentifier>
                    <Shared.Title>Essas são as tecnologias que domino no momento</Shared.Title>
                    <Shared.subTitle>Estou em constante busca de conhecimento, então essa lista só tende a crescer!</Shared.subTitle>
                </Shared.Wrapper>

                <Shared.Wrapper to='icons' as='ul'>
                    {
                        iconsInfo.map(({icon: Icon, id, title, size}) =>
                            <Tech.IconContainer key={id}>
                                <Icon size={size}/>
                                <Tech.IconTitle>{title}</Tech.IconTitle>
                            </Tech.IconContainer>
                        )
                    }
                </Shared.Wrapper>
            </Shared.Main>
            
            <BackgroundImage/>
        </Shared.Container>
        </>
    )
}
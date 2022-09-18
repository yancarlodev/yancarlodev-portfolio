import BackgroundImage from "../../components/BackgroundImage"
import Header from "../../components/Header"
import ProjectCard from "../../components/ProjectCard"
import SEO from "../../components/SEO"
import * as Shared from '../../styles/'
import { projects } from "../../services/db"

export default function Projetos() {
    return(
        <>
        <SEO title='Tecnologias' description='Estou em constante busca de conhecimento, então essa lista só tende a crescer!'/>
        
        <Shared.Container>
            <Header/>
            
            <Shared.Main page='tech'>
                <Shared.Wrapper to='text'>
                    <Shared.PageIdentifier>PROJETOS</Shared.PageIdentifier>
                    <Shared.Title>Aqui estão alguns projetos que desenvolvi</Shared.Title>
                    <Shared.subTitle>Espero que gostem, e estou sempre aberto a feedbacks!</Shared.subTitle>
                </Shared.Wrapper>

                <Shared.Wrapper to='carrousel' as='ul'>
                    {
                    projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))
                    }
                </Shared.Wrapper>
            </Shared.Main>
            
            <BackgroundImage/>
        </Shared.Container>
        </>
    )
} 
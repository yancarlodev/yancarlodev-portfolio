import Image from 'next/image'
import * as S from './styles'
import * as Shared from '../../styles/index'
import ProjectInfo from '../ProjectInfo'
import { IProject } from '../../services/db'

interface IProjectCardProps {
    project: IProject
}

export default function ProjectCard({project}: IProjectCardProps) {
    return(
        <S.Container>
            <ProjectInfo title={project.name} description={project.description} tech={project.tech}/>

            <Image src={project.img} alt='Project' quality={100} width={284} height={176}/>

            <Shared.Wrapper to='button'>
                <S.Link href={project.deploy} target='_blank' rel="noopener noreferrer">
                    <Shared.Button size='small' color='red'>Demo</Shared.Button>
                </S.Link>

                <S.Link href={project.baseCode} target='_blank' rel="noopener noreferrer">
                    <Shared.Button size='small' color='transparent'>Código Fonte</Shared.Button>
                </S.Link>
            </Shared.Wrapper>
        </S.Container>
    )
}
import * as Popover from '@radix-ui/react-popover'
import * as S from './styles'

interface IProjectInfoProps {
    title: string,
    description: string,
    tech: string[]
}

export default function ProjectInfo({ title, description, tech }: IProjectInfoProps) {
    return(
        <Popover.Root>
            <S.Trigger asChild>
                <S.ButtonIcon aria-label="Open Popover">
                    <S.InfoIcon/>
                </S.ButtonIcon>
            </S.Trigger>
            <Popover.Anchor />
            <Popover.Portal>
            <S.Content>
                <Popover.Close asChild>
                    <S.Close/>
                </Popover.Close>

                <S.PopTextWrapper>
                    <S.PopTextWrapper type='subWrapper'>
                        <S.PopTitle>{title}</S.PopTitle>
                        <S.PopDescription>{description}</S.PopDescription>
                    </S.PopTextWrapper>

                    <S.PopTextWrapper type='subWrapper'>
                        <S.PopSubTitle>Tecnologias</S.PopSubTitle>
                        
                        <S.TechList>
                            {
                                tech.map((name, index) => (
                                    <S.TechTag key={name+index}>{name}</S.TechTag>
                                ))
                            }
                        </S.TechList>
                    </S.PopTextWrapper>
                </S.PopTextWrapper>
            </S.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
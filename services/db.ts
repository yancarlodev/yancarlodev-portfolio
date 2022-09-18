export interface IProject {
    name: string,
    description: string,
    tech: string[],
    deploy: string,
    baseCode: string,
    img: string
}

export const projects: IProject[] = [
    {
        name: 'Nexus GameStand',
        description: 'Aplicação web para conectar plataformas de games',
        tech: ['NextJS', 'React', 'Typescript', 'Sass', 'TailwindCSS'],
        deploy: 'https://nexusgamestand.com',
        baseCode: 'https://github.com/projetofinal-campeoes/nexus-gamestand',
        img: '/nexus-gamestand.svg'
    },
    {
        name: 'Kenzie Hub',
        description: 'Aplicação web para registrar, editar e excluir tecnologias conhecidas pelo dev',
        tech: ['React', 'Typescript', 'Styled-components', 'Axios'],
        deploy: 'https://react-entrega-s2-formulario-de-cadastro-yancarlodev.vercel.app/',
        baseCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Hub-Yan',
        img: '/kenzie-hub.svg'
    },
    {
        name: 'Burguer Kenzie',
        description: 'Aplicação web onde é possível pesquisar por itens, adicionar ao carrinho, e remover',
        tech: ['React', 'Styled-components', 'Axios'],
        deploy: 'https://react-entrega-s1-hamburgueria-da-kenzie-yancarlodev-3bphpzufg.vercel.app/',
        baseCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/Burguer-Kenzie-Yan',
        img: '/burguer-kenzie.svg'
    },
    {
        name: 'Nu Kenzie',
        description: 'Aplicação web para controle financeiro onde é possível adicionar entradas e despesas',
        tech: ['React', 'Styled-components', 'Axios'],
        deploy: 'https://react-entrega-s1-nu-kenzie-yancarlodev.vercel.app/',
        baseCode: 'https://github.com/Kenzie-Academy-Brasil-Developers/Nu-Kenzie-Yan',
        img: '/nu-kenzie.svg'
    },
    {
        name: 'ToYouDo',
        description: 'Aplicação mobile para gerenciar tarefas a serem feitas',
        tech: ['React Native', 'Styled-components'],
        deploy: 'https://github.com/yancarlodev/ToYouDo',
        baseCode: 'https://github.com/yancarlodev/ToYouDo',
        img: '/toyoudo.svg'
    }
]
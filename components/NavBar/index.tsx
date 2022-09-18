import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as S from './styles';
import Link from 'next/link'
import { useRouter } from 'next/router';

const information = [{
        id: 1,
        href: '/',
        anchorText: 'Início'
    },
    {
        id: 2,
        href: '/tecnologias',
        anchorText: 'Tecnologias'
    },
    {
        id: 3,
        href: '/projetos',
        anchorText: 'Projetos'
    },
    {
        id: 4,
        href: '/contato',
        anchorText: 'Contato'
    },
]

export default function NavBar() {
    const { pathname } = useRouter()

    return(
    <NavigationMenu.Root>
        <S.List>
            {
            information.map(link => 
                <NavigationMenu.Item key={link.id}>
                    <Link href={link.href} passHref>
                        <S.Link active={pathname === link.href}>{link.anchorText}</S.Link>
                    </Link>
                </NavigationMenu.Item>
            )
            }
        </S.List>
    </NavigationMenu.Root>
    )
}
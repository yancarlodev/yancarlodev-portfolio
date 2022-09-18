import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '../../stitches.config';

export const List = styled(NavigationMenu.List, {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px 40px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
})

export const Link = styled(NavigationMenu.Link, {
    fontSize: 18,
    fontWeight: 400,
    transition: '300ms ease-in-out',
    color: '$grey',
    '&:hover': {
        color: '$selectedColor'
    },
    '&[data-active]': {
        color: '$selectedColor'
    }
})
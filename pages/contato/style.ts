import { styled } from "@stitches/react";

export const Link = styled('a', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    transition: '300ms ease-in-out',
    '&:hover': {
        'transform': 'scale(1.1)'
    },
    cursor: 'pointer'
})
import { styled } from "@stitches/react";

export const IconTitle = styled('h3', {
    width: 'max-content',
    fontWeight: 400,
    variants: {
        type: {
            contact: {
                fontSize: 16
            }
        }
    }
})

export const IconContainer = styled('li', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    transition: '300ms ease-in-out',
    '&:hover': {
        'transform': 'scale(1.1)'
    },
    variants: {
        type: {
            contact: {
                cursor: 'pointer'
            }
        }
    }
})
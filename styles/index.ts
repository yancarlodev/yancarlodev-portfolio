import { keyframes } from "@stitches/react";
import { styled } from "../stitches.config";

const toLeftShowsUp = keyframes({
    '0%': {
        transform: 'translateX(-5%)',
        opacity: 0
    },
    '100%': {
        transform: 'translateX(0)',
        opacity: 1
    }
})

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100vh'
})

export const Main = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    marginTop: 175,
    gap: 56,
    paddingBottom: 40,
    animation: `${toLeftShowsUp} 1.2s`,
    variants: {
        page: {
            tech: {
                marginTop: 111,
                '@media screen and (max-width: 426px)': {
                    marginTop: 80,
                }
            },
            contact: {
                gap: 40
            }
        }
    },
    '@media screen and (max-width: 426px)': {
        width: '90%',
        marginTop: 100,
    }
})

export const Wrapper = styled('section', {
    display: 'flex',
    variants: {
        to: {
            text: {
                gap: 24,
                flexDirection: 'column',
                maxWidth: 625
            },
            button: {
                gap: 16
            },
            icons: {
                display: 'grid',
                width: 'max-content',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: 64,
                alignItems: 'center',
                justifyContent: 'center',
                '@media screen and (max-width: 768px)': {
                    gridTemplateColumns: '1fr 1fr 1fr'
                },
                '@media screen and (max-width: 426px)': {
                    gridTemplateColumns: '1fr 1fr',
                    margin: 'auto'
                }
            },
            carrousel: {
                gap: 24,
                maxWidth: '100%',
                overflowX: 'auto',
                paddingBottom: 16
            }
        }
    }
})

export const PageIdentifier = styled('h3', {
    fontSize: 16,
    fontWeight: 400,
    color: '$grey'
})

export const Title = styled('h1', {
    fontSize: 48,
    fontWeight: 700,
    color: 'white'
})

export const subTitle = styled('h2', {
    fontSize: 18,
    fontWeight: 400,
    color: '$grey',
    maxWidth: 475
})

export const Button = styled('button', {
    padding: '16px 40px',
    fontSize: 16,
    fontWeight: 400,
    width: 'max-content',
    cursor: 'pointer',
    color: 'white',
    '&:hover': {
        filter: 'brightness(0.8)'
    },
    transition: '300ms ease-in-out',
    variants: {
        color: {
            red: {
                backgroundColor: '$primaryColor',
                border: '1px solid $primaryColor'
            },
            transparent: {
                border: '1px solid white',
                backgroundColor: 'transparent'
            }
        },
        size: {
            small: {
                fontSize: 14,
                padding: '8px 0px',
                width: '100%'
            }
        }
    }
})
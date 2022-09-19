import { keyframes, styled } from "@stitches/react";

const BackgroundAnimation = keyframes({
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    backgroundColor: '#333333',
    zIndex: -1,
    variants: {
        filter: {
            blur: {
                filter: 'blur(6px)'
            },
            none: {}
        }
    }
})

export const BottomShadow = styled('div', {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    zIndex: 0,
    animation: `${BackgroundAnimation} 1.2s`,
    background: 'linear-gradient(360deg, rgba(15,0,0,0.7539390756302521) 0%, rgba(15,255,255,0) 35%, rgba(15,212,255,0) 100%)'
})

export const TopShadow = styled('div', {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    zIndex: 1,
    animation: `${BackgroundAnimation} 1.2s`,
    background: 'linear-gradient(180deg, rgba(15,0,0,0.7539390756302521) 0%, rgba(15,255,255,0) 35%, rgba(15,212,255,0) 100%)'
})

export const LeftShadow = styled('div', {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    zIndex: 1,
    animation: `${BackgroundAnimation} 1.2s`,
    background: 'linear-gradient(90deg, rgba(15,0,0,0.7987570028011204) 0%, rgba(15,255,255,0) 35%, rgba(15,212,255,0) 100%)'
})

export const CentralRadialShadow = styled('div', {
    width: '60%',
    height: '100%',
    position: 'fixed',
    right: 0,
    zIndex: 1,
    animation: `${BackgroundAnimation} 1.2s`,
    background: 'radial-gradient(circle, rgba(15,0,0,0) 40%, rgba(15,0,0,0.75) 75%, rgba(15,0,0,0.70) 100%)',
    '@media screen and (max-width: 1024px)': {
        width: '100%'
    }
})

export const LeftScreenShadow = styled('div', {
    width: '40%',
    height: '100%',
    position: 'fixed',
    left: 0,
    zIndex: 1,
    animation: `${BackgroundAnimation} 1.2s`,
    backgroundColor: 'rgba(15,0,0,0.75)',
    '@media screen and (max-width: 1024px)': {
        width: '100%'
    }
})

export const LeftRadialShadow = styled('div', {
    marginLeft: '5%',
    width: '50%',
    height: '100%',
    position: 'fixed',
    left: 0,
    zIndex: 1,
    animation: `${BackgroundAnimation} 1.2s`,
    background: 'radial-gradient(circle, rgba(15,0,0,0.9) 35%, rgba(15,0,0,0) 65%, rgba(15,0,0,0) 100%)',
    '@media screen and (max-width: 1024px)': {
        display: 'none'
    }
})

export const BackgroundEffect = styled('div', {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    backgroundColor: 'rgba(15,0,0,0.75)',
    zIndex: 0
})
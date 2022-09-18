import { keyframes, styled } from "@stitches/react";
import { MdInfo } from "react-icons/md";
import { IoClose } from 'react-icons/io5'
import * as Popover from '@radix-ui/react-popover'

const PopoverAnimation = keyframes({
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
})

export const Root = styled(Popover.Root, {
    position: 'relative'
})

export const Trigger = styled(Popover.Trigger, {
    position: 'absolute',
    zIndex: 1,
    top: 32,
    left: 8,
})

export const Arrow = styled(Popover.Arrow, {
    borderColor: 'white'
})

export const InfoIcon = styled(MdInfo, {
    zIndex: 1,
    top: 31,
    left: 9,
    fontSize: 28,
    backgroundColor: '#333333',
    borderRadius: '50%',
    cursor: 'pointer'
})

export const Content = styled(Popover.Content, {
    position: 'absolute',
    zIndex: 1,
    left: -95,
    top: 35,
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    width: 200,
    borderRadius: 6,
    gap: 4,
    backgroundColor: 'white',
    animation: `${PopoverAnimation} 300ms`

})

export const Close = styled(IoClose, {
    fontSize: 20,
    alignSelf: 'end',
    color: '#333333',
    cursor: 'pointer'
})

export const PopTextWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    variants: {
        type: {
            subWrapper: {
                gap: 8
            }
        }
    }
})

export const PopTitle = styled('h2', {
    fontSize: 18,
    fontWeight: 700,
    color: '$selectedColor'
})

export const PopDescription = styled('p', {
    fontSize: 12,
    color: '#333333'
})

export const PopSubTitle = styled('h3', {
    fontSize: 16,
    fontWeight: 400,
    color: '#333333'
})

export const TechList = styled('ul', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    listStyle: 'none'
})

export const TechTag = styled('li', {
    backgroundColor: '$selectedColor',
    borderRadius: 90,
    fontSize: 12,
    fontWeight: 400,
    padding: '4px 12px',
    cursor: 'default'
})
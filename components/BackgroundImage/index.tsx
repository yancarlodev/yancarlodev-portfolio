import Image from "next/image";
import { useRouter } from "next/router";
import * as S from './styles'

export default function BackgroundImage() {
    const { pathname } = useRouter()

    return(
        <S.ImageContainer filter={pathname === '/' ? 'none' : 'blur'}>
            <Image src='/background-image.png' alt='background image' quality={100} priority layout="fill" objectFit="cover"/>
            {
                pathname === '/' ? 
                <>
                    <S.TopShadow/>
                    <S.BottomShadow/>
                    <S.LeftShadow/>
                    <S.CentralRadialShadow/>
                    <S.LeftScreenShadow/>
                    <S.LeftRadialShadow/>
                </>
                :
                <S.BackgroundEffect/>
            }
        </S.ImageContainer>
    )
}
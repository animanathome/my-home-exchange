import Image from 'next/image'
import Wrapper from "@/components/intro/wrapper";

export type IntroProps = {
    title: string;
    imageSrc: string;
    imageAlt: string;
}

const Intro = ({ title, imageSrc, imageAlt }: IntroProps) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <Image
                fill={true}
                quality={75}
                src={imageSrc}
                alt={imageAlt}
                priority={true}
            />
        </Wrapper>
    )
}

export default Intro;
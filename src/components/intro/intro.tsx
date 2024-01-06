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
                fill
                src={imageSrc}
                alt={imageAlt}
            />
        </Wrapper>
    )
}

export default Intro;
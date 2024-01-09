import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/components/topic/wrapper";

export type TopicProps = {
    title: string;
    descr: string;
    lnk: string;
    imageSrc: string;
    imageAlt: string;
}

const Topic = ({ title, descr, imageSrc, imageAlt, lnk }: TopicProps) => {
    return (
        <Wrapper>
            <div className="wrapper">
                <h2>{title}</h2>
                <div className="container">{descr}</div>
                <Link href={lnk}>
                    learn more
                    <i className="arrow right"></i>
                </Link>
            </div>
            <Image
                fill
                quality={75}
                src={imageSrc}
                alt={imageAlt}
            />
        </Wrapper>
    )
}

export default Topic
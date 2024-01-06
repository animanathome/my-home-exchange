import Wrapper from "@/components/description/wrapper";

type DescriptionProps = {
    descr: string;
}

const Description = ({ descr }: DescriptionProps) => {
    return (
        <Wrapper>
            <p>{descr}</p>
        </Wrapper>
    )
}

export default Description;
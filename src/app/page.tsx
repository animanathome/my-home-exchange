import Intro from "@/components/intro/intro";
import {getLocalData} from "@/utils";
import Topic, {TopicProps} from "@/components/topic/topic";
import MainWrapper from "@/components/mainWrapper";

const Home = async () => {
    const data = await getLocalData('/src/app/data.json');
    const {title, imageSrc, imageAlt, topics} = data;

    return (
        <MainWrapper>
            <Intro
                title={title}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
            />
            {topics.map((item: TopicProps, index: number) => {
                return <Topic
                    title={item.title}
                    descr={item.descr}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    lnk={item.lnk}
                    key={index}
                />
            })}
            </MainWrapper>
  )
}

export default Home;

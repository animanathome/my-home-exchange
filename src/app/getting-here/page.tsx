import {getLocalData} from "@/utils";
import Intro from "@/components/intro/intro";
import Description from "@/components/description/description";
import Topic, {TopicProps} from "@/components/topic/topic";


const GettingHere = async() => {
  const data = await getLocalData('/src/app/getting-here/data.json');
  const {intro, descr, topics} = data;

  return (
    <main>
        <Intro
            title={intro.title}
            imageSrc={intro.imageSrc}
            imageAlt={intro.imageAlt}
        />
        <Description descr={descr} />
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
    </main>
  )
}

export default GettingHere;
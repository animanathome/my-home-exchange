import Intro from "@/components/intro/intro";
import {getLocalData} from "@/utils";
import Description from "@/components/description/description";

const OurHome = async() => {
    const data = await getLocalData('/src/app/our-home/data.json');
    const {intro, descr} = data;

    return (
        <main>
            <Intro
                title={intro.title}
                imageSrc={intro.imageSrc}
                imageAlt={intro.imageAlt}
            />
            <Description descr={descr} />
        </main>
      )
}

export default OurHome
import Brands from "./(website)/components/brands";
import Hero from "./(website)/components/hero";
import Skills from "./(website)/components/skills";
import LearningPaths from "./(website)/components/learning-paths";

export default function Page() {
    return (
        <div>
            <Hero />
            <Brands />
            <Skills />
            <LearningPaths />
        </div>
    )
}
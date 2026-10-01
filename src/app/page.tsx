import Brands from "./(website)/components/brands";
import Hero from "./(website)/components/hero";
import Skills from "./(website)/components/skills";
import LearningPaths from "./(website)/components/learning-paths";
import Features from "./(website)/components/features";
import CreatorCta from "./(website)/components/creator-cta";

export default function Page() {
    return (
        <div>
            <Hero />
            <Brands />
            <Skills />
            <LearningPaths />
            <Features />
            <CreatorCta />
        </div>
    )
}
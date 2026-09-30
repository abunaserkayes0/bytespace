import Brands from "./(website)/components/brands";
import Hero from "./(website)/components/hero";
import Skills from "./(website)/components/skills";
import LearningPaths from "./(website)/components/learning-paths";
import ProfessionalGrowth from "./(website)/components/professional-growth";
import ManageCourses from "./(website)/components/manage-courses";

export default function Page() {
    return (
        <div>
            <Hero />
            <Brands />
            <Skills />
            <LearningPaths />
            <ProfessionalGrowth />
            <ManageCourses/>
        </div>
    )
}
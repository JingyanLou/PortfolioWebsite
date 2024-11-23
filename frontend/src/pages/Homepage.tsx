import Hero from '../components/Hero'
import Skills from '../components/Skill'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Service from '../components/Service'
const Homepage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero />
            {/* Other sections will go here */}
            <Skills />
            <Experience />
            <Education />
            <Service />


        </div>
    )
}

export default Homepage
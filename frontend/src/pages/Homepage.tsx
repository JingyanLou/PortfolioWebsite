import Hero from '../components/Hero'
import Skills from '../components/Skill'
import Experience from '../components/Experience'
const Homepage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero />
            {/* Other sections will go here */}
            <Skills />
            <Experience />


        </div>
    )
}

export default Homepage
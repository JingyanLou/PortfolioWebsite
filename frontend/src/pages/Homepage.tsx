import Hero from '../components/Hero'
import Skills from '../components/Skill'
const Homepage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Hero />
            {/* Other sections will go here */}
            <Skills />


        </div>
    )
}

export default Homepage
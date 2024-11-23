
type ServiceItem = {
    title: string;
    description: string;
};

const services: ServiceItem[] = [
    {
        title: "WEB DEVELOPMENT",
        description: "I create modern, responsive websites tailored to your needs—enquire now for a free consultation and let's bring your vision to life!"
    },
    {
        title: "MONASH IT/CS TUTORING",
        description: "Offering free tutoring in IT and CS subjects, including cloud computing, software engineering, and mobile development—let's excel together!"
    },
    {
        title: "PROJECT INVITATION",
        description: "Invite me to collaborate on your next project and bring innovative ideas to life—let's create something amazing!"
    }
];

const Service = () => {
    return (

        <section className="w-full px-16 py-20 font-['Helvetica']">
            {/* Top Section with Title, Description and Image */}

            <div className="flex mb-32">
                {/* Left Side - Text Content */}
                <div className="w-1/2 pr-8 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-8">MY SERVICE</h2>
                    <p className="text-base">
                        I specialize in delivering innovative and high-quality solutions tailored to your needs.
                        With a strong background in software engineering, tutoring, and collaborative projects,
                        I am committed to excellence and client satisfaction. Explore my key areas of expertise below.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2">
                    <img
                        src="/images/grad.jpg"
                        alt="Graduation ceremony"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="col-span-1">
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-sm leading-relaxed">{service.description}</p>
                    </div>
                ))}
                {/* Fourth column is intentionally left empty */}
                <div className="col-span-1"></div>
            </div>
        </section>
    );
};

export default Service;
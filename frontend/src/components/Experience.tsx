

type Experience = {
    company: string;
    title: string;
    period: string;
    description: string;
    imageSrc: string;
    imagePosition: 'bottom' | 'bottom-right';
};

const experiences: Experience[] = [
    {
        company: "MONASH INDUSTRY EXPERIENCE",
        title: "Fullstack developer",
        period: "JUL 2024 - OCT 2024",
        description: "Led all technical aspects of the full-stack development,DevOps cloud infrastructures",
        imageSrc: "images/IE-TA32.jpg",
        imagePosition: 'bottom'
    },

];

const Experience = () => {
    return (
        <section className="w-full px-16 py-20 font-['Helvetica']">
            {/* Title Section */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
                <div className="w-full h-px bg-black"></div>
            </div>

            {/* Experiences */}
            <div className="space-y-32">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        {/* Text Content */}
                        <div className="flex items-start gap-8">
                            {/* Left side - Company Info */}
                            <div className="w-1/3">
                                <h3 className="text-xl font-bold">{exp.company}</h3>
                                <div className="mt-2">
                                    <p className="font-medium">{exp.title}</p>
                                    <p className="text-sm mt-1">{exp.period}</p>
                                </div>
                            </div>

                            {/* Right side - Description */}
                            <div className="w-1/4">
                                <p>{exp.description}</p>
                            </div>
                        </div>

                        {/* Image Section */}
                        {exp.imagePosition === 'bottom' ? (
                            // Bottom positioned image (IE-TA32)
                            <div className="w-3/5 h-[400px] mt-8">
                                <img
                                    src={exp.imageSrc}
                                    alt={`${exp.company} experience`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            // Bottom-right positioned image (PeerMentor)
                            <div className="absolute right-0 top-30 w-[35%] h-[500px]">
                                <img
                                    src={exp.imageSrc}
                                    alt={`${exp.company} experience`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Divider */}
                        {index < experiences.length - 1 && (
                            <div className="w-full h-px bg-black mt-20"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
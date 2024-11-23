import React from 'react';

type Education = {
    degree: string;
    courseId: string;
    courseDetails: string[];
};

const educations: Education[] = [
    {
        degree: "Master of Information Technology",
        courseId: "C6001",
        courseDetails: [
            "Cloud Computing",
            "Distributed System",
            "Software Engineering",
            "Professional Practice",
            "Mobile Development",
            "Software Testing",
            "Professional Practice"
        ]
    },
    {
        degree: "Bachelor of Computer Science, Data Science",
        courseId: "C2001",
        courseDetails: [
            "Data structures",
            "Advanced Algorithms",
            "Python/Java/SQL",
            "OOP Design",
            "Theory of Computation",
            "Computer Network",
            "Assembly-MIPS",
            "Web Design"
        ]
    }
];

const Education = () => {
    return (
        <section className="w-full py-20 font-['Helvetica']">
            {/* Title Section */}
            <div className="px-16 mb-12">
                <h2 className="text-4xl font-bold mb-4">EDUCATION</h2>
                <div className="w-full h-px bg-black"></div>
            </div>

            {/* MONASH Title */}
            <div className="px-16 mb-16">
                <h1 className="text-8xl font-black tracking-wide">MONASH</h1>
                <div className="w-full h-px bg-black mt-4"></div>
            </div>

            {/* Education Details */}
            <div className="space-y-20">
                {educations.map((edu, index) => (
                    <div key={index}>
                        <div className="grid grid-cols-12">
                            {/* Empty left space - 7 columns */}
                            <div className="col-span-7"></div>

                            {/* Content area - 5 columns */}
                            <div className="col-span-5 grid grid-cols-5">
                                {/* Degree Info - 3 columns */}
                                <div className="col-span-3 pr-8">
                                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-base">{edu.courseId}</p>
                                </div>

                                {/* Course Details - 2 columns */}
                                <div className="col-span-2 pr-16">
                                    {edu.courseDetails.map((detail, idx) => (
                                        <p key={idx} className="text-sm">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        {index < educations.length - 1 && (
                            <div className="px-16">
                                <div className="w-full h-px bg-black mt-16"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
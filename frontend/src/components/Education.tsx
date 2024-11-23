import React from 'react';

type Education = {
    degree: string;
    courseId: string;
    courseDetails: string[];
    skills: string[];
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
        ],
        skills: []
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
        ],
        skills: []
    }
];

const Education = () => {
    return (
        <section className="w-full px-16 py-20 font-['Helvetica']">
            {/* Title Section */}
            <div className="mb-12">
                <h2 className="text-4xl font-bold mb-4">EDUCATION</h2>
                <div className="w-full h-px bg-black"></div>
            </div>

            {/* MONASH Title */}
            <div className="mb-16">
                <h1 className="text-8xl font-black tracking-wide">MONASH</h1>
                <div className="w-full h-px bg-black mt-4"></div>
            </div>

            {/* Education Details */}
            <div className="space-y-20">
                {educations.map((edu, index) => (
                    <div key={index}>
                        <div className="w-1/2">
                            {/* Content Row with 50% left margin */}
                            <div className="flex">
                                {/* Left side - Empty space */}
                                <div className="w-1/2">
                                    <div className="pl-20">
                                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                        <p className="text-base">{edu.courseId}</p>
                                    </div>
                                </div>

                                {/* Right side - Split into two columns */}
                                <div className="w-1/2 flex gap-8">
                                    {/* Course Details Column */}
                                    <div className="w-1/2 space-y-1">
                                        {edu.courseDetails.map((detail, idx) => (
                                            <p key={idx} className="text-sm">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                    {/* Skills Column */}
                                    <div className="w-1/2 space-y-1">
                                        {edu.skills.map((skill, idx) => (
                                            <p key={idx} className="text-sm">
                                                {skill}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            {index < educations.length - 1 && (
                                <div className="w-full h-px bg-black mt-16"></div>
                            )}
                        </div>
                ))}
                    </div>
        </section>
    );
};

export default Education;
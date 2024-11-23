import React from 'react';

type Education = {
    degree: string;
    courseId: string;
    courseDetails: string[];
    subjects: string[];
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
        subjects: []
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
        subjects: []
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
            <div className="mb-12">
                <h1 className="text-7xl font-bold w-full">MONASH</h1>
                <div className="w-full h-px bg-black mt-4"></div>
            </div>

            {/* Education Details */}
            <div className="space-y-20">
                {educations.map((edu, index) => (
                    <div key={index} className="relative">
                        {/* Content Container */}
                        <div className="flex">
                            {/* Left Column - Degree Info */}
                            <div className="w-1/2">
                                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                <p className="text-sm">{edu.courseId}</p>
                            </div>

                            {/* Right Columns - Course Details and Subjects */}
                            <div className="w-1/2 flex">
                                <div className="w-1/2">
                                    {edu.courseDetails.map((detail, idx) => (
                                        <p key={idx} className="text-sm mb-1">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        {index < educations.length - 1 && (
                            <div className="w-full h-px bg-black mt-12"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
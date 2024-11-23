import React from 'react';

type SkillCategory = {
    title: string;
    skills: string[];
};

const skillsData: SkillCategory[] = [
    {
        title: "FRONTEND",
        skills: [
            "React.js",
            "Vue.js",
            "Javascript",
            "Html/CSS"
        ]
    },
    {
        title: "BACKEND",
        skills: [
            "Node.js",
            "ASP.NET CORE",
            "Flask"
        ]
    },
    {
        title: "CI/CD",
        skills: [
            "Github Actions",
            "Docker",
            "K8s"
        ]
    },
    {
        title: "CLOUD",
        skills: [
            "AWS(EC2,ECS,Lambda,",
            "Dynamo,S3,RDS,API",
            "Gateway,ECR,Cognito,S",
            "NS)"
        ]
    },
    {
        title: "UI/UX",
        skills: [
            "Swiss Design",
            "Figma"
        ]
    }
];

const Skills = () => {
    return (
        <section className="w-full px-16 py-20">
            {/* Title Section */}
            <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">SKILLS</h2>
                <div className="w-full h-px bg-black"></div>
            </div>

            {/* Skills Grid */}
            <div className="flex justify-between gap-8">
                {skillsData.map((category, index) => (
                    <div key={index} className="flex-1">
                        <h3 className="font-bold mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                            {category.skills.map((skill, skillIndex) => (
                                <li
                                    key={skillIndex}
                                    className="text-sm leading-relaxed"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default Skills;
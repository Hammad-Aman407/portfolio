import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaTools
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiMongodb,
} from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
    ];

    return (
        <section id="skills">
            <div className="container mx-auto px-4 py-10">

                <div className="text-center mb-6" data-aos="fade-up">
                    <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
                        <FaTools className="text-2xl text-primary" />
                        Technical Skills
                    </h2>

                    <p className="mt-3 max-w-2xl mx-auto">
                        Using the latest technologies to build scalable, efficient, and
                        maintainable solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div
                                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-base-200 shadow-lg
                                           hover:bg-base-300 hover:shadow-xl hover:-translate-y-1
                                           transition-all duration-300 ease-in-out"
                            >
                                <div className="text-4xl text-primary">
                                    {skill.icon}
                                </div>
                                <span className="font-semibold text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
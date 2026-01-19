import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const educationData = [
        {
            year: "2021-2025",
            degree: "BS Software Engineering",
            institute: "National University of Modern Languages (NUML), Islamabad",
            grade: "3.60/4.0 CGPA",
        },
        {
            year: "2019-2021",
            degree: "ICS (Physics)",
            institute: "Punjab College of Commerce, Rawalpindi",
            grade: "Grade A1",
        },
        {
            year: "2017-2019",
            degree: "Matric (Science)",
            institute: "KRL Grammar School Jhangi Syedan, Islamabad",
            grade: "Grade A1",
        },
    ];

    return (
        <section className="bg-base-300" id="education">
            <div className="container mx-auto px-4 py-10">
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
                        <FaGraduationCap className="text-2xl text-primary" />
                        Education
                    </h2>
                </div>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {educationData.map((edu, index) => (
                        <li key={index} data-aos="fade-up" data-aos-delay={index * 150}>

                            <div className="timeline-middle text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 
                                      16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483
                                       4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75
                                        0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>

                            <div
                                className={
                                    index % 2 === 0
                                        ? "timeline-start mb-10 md:text-end"
                                        : "timeline-end mb-10"
                                }>
                                <div className="
                                    bg-base-200 
                                    p-5 
                                    rounded-lg 
                                    shadow-sm 
                                    w-[80vw] sm:w-96 md:w-96 lg:w-96
                                    transition-all duration-300 ease-in-out
                                    hover:shadow-lg
                                    hover:-translate-y-1
                                    hover:bg-base-100">
                                    <time className="font-mono italic text-primary block mb-1">
                                        {edu.year}
                                    </time>

                                    <div className="text-lg font-bold">
                                        {edu.degree}
                                    </div>

                                    <p className="font-medium">
                                        {edu.institute}
                                    </p>

                                    <p className="text-sm">
                                        {edu.grade}
                                    </p>
                                </div>
                            </div>

                            {index !== educationData.length - 1 && (
                                <hr className="bg-primary h-full" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Education;

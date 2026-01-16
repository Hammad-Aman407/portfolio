import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import smartserviceshub from '../assets/smartserviceshub.PNG';
import accessoryshop from '../assets/accessoryshop.PNG';
import eventmanagement from '../assets/eventmanagement.PNG';
import realestateapp from '../assets/realestateapp.PNG';
import newsapp from '../assets/newsapp.PNG';
import imagegallery from '../assets/imagegallery.PNG';
import restaurant from '../assets/restaurant.PNG';
import calculator from '../assets/calculator.PNG';

const Projects = () => {
    const projects = [
        {
            title: "Smart Services Hub (FYP)",
            description: "Web app to browse and book services with user & admin dashboards.",
            github: "https://github.com/Hammad-Aman407/fyp.git",
            image: smartserviceshub
        },
        {
            title: "Accessory Shop",
            description: "Web app to browse and manage inventory, sales and reports.",
            github: "https://github.com/Hammad-Aman407/accessory_shop.git",
            image: accessoryshop
        },
        {
            title: "University Event Management System",
            description: "Manage and register for university events with admin controls.",
            github: "https://github.com/Hammad-Aman407/event_management_system.git",
            image: eventmanagement
        },
        {
            title: "Real Estate App",
            description: "Explore property listings with images, details, and contact options.",
            github: "https://github.com/Hammad-Aman407/real-estate-app.git",
            image: realestateapp
        },
        {
            title: "NewsApp",
            description: "Aggregates latest news articles across multiple categories.",
            github: "https://github.com/Hammad-Aman407/news_app.git",
            image: newsapp
        },
        {
            title: "Image Gallery",
            description: "Interactive photo gallery with category browsing and lightbox view.",
            github: "https://github.com/Hammad-Aman407/image_gallery.git",
            image: imagegallery
        },
        {
            title: "Restaurant",
            description: "Showcases menus and daily specials for restaurants.",
            github: "https://github.com/Hammad-Aman407/resturant.git",
            image: restaurant
        },
        {
            title: "Calculator",
            description: "Responsive web calculator performing basic arithmetic operations.",
            github: "https://github.com/Hammad-Aman407/calculator.git",
            image: calculator
        }
    ];

    return (
        <section id="projects">
            <div className="container mx-auto px-4 py-10">
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
                        <FaProjectDiagram className="text-2xl text-primary" />
                        Featured Projects
                    </h2>
                </div>

                <div className="flex flex-row gap-6 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-3 scrollbar-hide py-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 bg-base-200 p-2 rounded-xl shadow-md hover:shadow-lg hover:bg-base-300 transition duration-300"
                        >
                            <img
                                src={project.image}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />

                            <h3 className="text-md font-bold mb-1">{project.title}</h3>
                            <p className="text-sm mb-4">{project.description}</p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full py-2 text-sm text-center font-medium text-white bg-black rounded-lg">
                                GitHub Repository
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

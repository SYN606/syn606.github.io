import project1_img from '../images/project_1.jpg';
import project2_img from '../images/project_2.webp';
import '../css/projects.css';

const Projects = () => {
    return (
        <>
            <section className="projects">
                <div className="container">
                    <h3 className="ibm-plex-serif-semibold">Projects</h3>
                    <p className="ibm-plex-sans-regular">More projects are on my github.</p>
                    <div className="skill-box">
                        {/* First project */}
                        <div className="s-box-1">
                            <div className="main_s-box">
                                <div className="main">
                                    <img className="tokenImage" src={project1_img} alt="The Syn Saga project preview" />
                                    <h2>The Syn Saga</h2>
                                    <p className="description">A blogging website made with Django and glassmorphism UI.</p>
                                    <div className="tokenInfo">
                                        <div className="price">
                                            <a href="https://github.com/SYN606/The-Syn-Saga" target="_blank" rel="noopener noreferrer">Github</a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="creator">
                                        <div className="wrapper">
                                            <img
                                                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                                                alt="Creator of The Syn Saga project" />
                                        </div>
                                        <p>Visit the deployment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second project */}
                        <div className="s-box-2">
                            <div className="main_s-box">
                                <div className="main">
                                    <img className="tokenImage" src={project2_img} alt="Yet Another Todo project preview" />
                                    <h2>Yet Another Todo</h2>
                                    <p className="description">Another simple todo app written in Django.</p>
                                    <div className="tokenInfo">
                                        <div className="price">
                                            <a href="https://github.com/SYN606/Yet-Another-ToDo" target="_blank" rel="noopener noreferrer">Github</a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="creator">
                                        <div className="wrapper">
                                            <img
                                                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                                                alt="Creator of Yet Another Todo project" />
                                        </div>
                                        <p>Visit the deployment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;

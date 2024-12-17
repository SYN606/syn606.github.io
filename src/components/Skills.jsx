import '../css/blob.css'
import '../css/skills.css'

const Skills = () => {
    return (
        <>
            <section className="box-skills">
                <div className="container">
                    <h3 className="ibm-plex-serif-regular">Skills</h3>
                    <p>I don't need ; to complete my statements.</p>
                    <div className="main-container">
                        <div className="box-1">
                            <h3 className="skill-title ibm-plex-serif-semibold">Web Development</h3>
                            <p className="skill-desc ibm-plex-sans-regular">
                                Web Development is a dynamic and ever-evolving field at the forefront of technological innovation. It
                                encompasses a wide spectrum of technologies and practices essential for building modern digital
                                experiences.
                            </p>
                        </div>

                        <div className="box-2">
                            <h3 className="skill-title ibm-plex-serif-semibold">Hardware</h3>
                            <p className="skill-desc ibm-plex-sans-regular">
                                Understanding hardware is essential for anyone diving into the world of computers. From processors and
                                RAM (DIMMs) to motherboards and instruction sets, these components form the backbone of computing
                                technology.
                            </p>
                        </div>

                        <div className="box-3">
                            <h3 className="skill-title ibm-plex-serif-semibold">Sys Admin</h3>
                            <p className="skill-desc ibm-plex-sans-regular">
                                System Administration is in high demand today because managing systems, whether in the cloud or on
                                local machines, is increasingly complex.
                            </p>
                        </div>

                        <div className="box-4">
                            <h3 className="skill-title ibm-plex-serif-semibold">Cyber Security</h3>
                            <p className="skill-desc ibm-plex-sans-regular">
                                Cyber Security is more than just a buzzword—it's a mindset. It goes beyond learning from books and
                                technologies; it’s about adopting a proactive approach to protect information and systems from threats
                                and vulnerabilities.
                            </p>
                        </div>

                        <div className="box-5">
                            <h3 className="skill-title ibm-plex-serif-semibold">Networking</h3>
                            <p className="skill-desc ibm-plex-sans-regular">
                                Networking expertise is essential for understanding clouds, internet infrastructure, network tunneling,
                                and protocols.
                            </p>
                        </div>
                        <div className="blob right"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
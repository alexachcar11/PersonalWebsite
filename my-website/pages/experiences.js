import Link from 'next/link';
import styles from '../styles/experiences.module.css';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Text } from '@nextui-org/react';
import HomeIcon from '@mui/icons-material/Home';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HomePage() {
    const entriesRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        const entriesContainerElement = entriesRef.current.parentElement;
        const sections = gsap.utils.toArray(".panel");
      
        gsap.to(entriesRef.current.parentElement, {
            scrollLeft: entriesRef.current.parentElement.scrollWidth,
            ease: "none",
            scrollTrigger: {
              trigger: entriesRef.current.parentElement,
              pin: true,
              anticipatePin: 1,
              scrub: 1.23,
              start: "top top",
              end: "+=100%",
              snap: {
                snapTo: 1 / sections.length,
                duration: { min: 0.1, max: 2 },
              },
            },
          });
      }, []);

    return (
        <div className={styles.container}>
            <div className={styles.homeButton}>
                <button className={styles.button1} onClick={() => window.location.href = '/home-page'}>
                    <HomeIcon />
                </button>
            </div>

            <div className={styles.title}>
                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: "45deg, #772E25 -20%, #C44536 50%",
                    }}
                    weight="bold"
                >
                    My Experiences
                </Text>
            </div>
            <div className={styles.entriesContainer}> 
                <div ref={entriesRef} className={styles.entries}>
                    <div className={styles.panel}>
                        <img className={styles.citipic} src="citilogo.png" alt="citi logo" />
                        <h1> Citi </h1>
                        <p> <i> Technology Summer Analyst (May to August 2022) </i></p>
                        <div className={styles.content}> 
                            <ul className={styles.list}>
                                <li className={styles.points}> 
                                    Performed Data Analysis on large datasets to draw effective and accurate conclusions 
                                    on trade impacts. 
                                </li>
                                <li className={styles.points}>  
                                    Leveraged Python, SQL, and AWS features to develop software aimed at improving the 
                                    current processes in the lifecycle of my internal team.  
                                </li>
                                <li className={styles.points}> 
                                    Actively absorbed new insights on upcoming trends in both technology and finance which 
                                    I took advantage of to offer unique solutions on a variety of projects. 
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.panel}>
                        <img className={styles.fcapic} src="fcalogo.png" alt="fca logo" />
                        <h1> First Code Academy </h1>
                        <p> <i> Coding/STEM Instructor (June to August 2021) </i></p>
                        <div className={styles.content}> 
                            <ul className={styles.list}>
                                <li className={styles.points}> 
                                    Taught a variety of Computer Science related topics such as Python, JavaScript, and Video 
                                    Game modding to children aged between 7 and 16 through
                                    both remote and in-person means.
                                </li>
                                <li className={styles.points}>  
                                    Produced educational tutorials on many topics such as creating utilities in JavaScript or using 
                                    MIT’s App Inventor for First Code Academy’s YouTube channel.                                
                                </li>
                                <li className={styles.points}> 
                                    Created daily lesson recaps and maintained a line of direct communication with parents.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.panel}> 
                        <img className={styles.actelpic} src="actellogo.png" alt="actel logo" />
                        <h1> Actel Consulting </h1>
                        <p> <i> Research Intern (May to August 2020) </i></p>
                        <div className={styles.content}> 
                            <ul className={styles.list}>
                                <li className={styles.points}> 
                                    Conducted research and delivered insights related to internet economy in South East Asia. 
                                </li>
                                <li className={styles.points}>  
                                    Constructed, designed, and assisted presentations to clients and investors on a wide range of 
                                    tech topics including broadband, fibre, data centres and cloud computing.
                                </li>
                                <li className={styles.points}> 
                                    Shadowed meetings and discussions regarding the application of my research.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.panel}> 
                        <img className={styles.ni2pic} src="ni2logo.png" alt="ni2 logo" />
                        <h1> Ni2 Software </h1>
                        <p> <i> Software Developer Intern (June to August 2017 & 2019) </i></p>
                        <div className={styles.content}> 
                            <ul className={styles.list}>
                                <li className={styles.points}> 
                                    Cooperated with a team of six developers to create, ship, and update the 
                                    frontend and backend of Ni2's platform. 
                                </li>
                                <li className={styles.points}>  
                                    Augemented search queries through the use of an XML language tailored to Ni2's platform. 
                                </li>
                                <li className={styles.points}> 
                                    Operated in Python to build code and edited outdated code written in Java. 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;

import Link from 'next/link';
import styles from '../styles/home-page.module.css';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Text } from '@nextui-org/react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HomePage() { 

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Alexander-Achcar-Resume.pdf';
        link.download = 'AlexanderAchcarResume.pdf';
        link.click();
      };

    const divisionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const divisionContainerElement = divisionRef.current.parentElement;
        const sections = gsap.utils.toArray(".panel");
    
        gsap.to(divisionRef.current.parentElement, {
            scrollDown: divisionRef.current.parentElement.scrollHeight,
            ease: "none",
            scrollTrigger: {
            trigger: divisionRef.current.parentElement,
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
            <div ref={divisionRef}> 
                <div className = {styles.title} > 
                    <div className={styles.imageWrapper}>
                        <img className={styles.image} src="headshot.jpg" alt="Headshot" />
                    </div>
                    <Text 
                        h1 
                        size={60} 
                        css={{ 
                            // textGradient: "45deg, #111111 -20%, #666666 50%",
                            textGradient: "45deg, #111111 -20%, #666666 50%",
                        }}
                        weight="bold"
                    >
                        Alexander Achcar
                    </Text>
                </div>

                <div className={styles.briefDesc}> 
                    <p> Hi! Welcome to my website! </p>
                    <p> Please feel free to explore around to learn more about either me personally or about some of the work I've done so far. </p>
                </div>

                <div className = {styles.botButtons}> 
                    <button onClick={ ()=>window.location.href='/about-me'}> About Me </button>
                    <button onClick={ ()=>window.location.href='/experiences'}> My Experiences </button>
                    <button onClick={handleDownload}> My Resume </button>
                    <button onClick={ ()=>window.location.href='/contact-me'}> Contact Me </button>
                </div> 
            </div>

            <div ref={divisionRef}>
                <div className = {styles.skillsTab}> 
                    <div className = {styles.skillsTitle}>
                        <p> Skills: </p>
                    </div>
                    <div className = {styles.skillsList}>
                        <p className = {styles.items}> skill1 </p>
                        <p className = {styles.items}> skill2 </p>
                        <p className = {styles.items}> skill3 </p>
                        <p className = {styles.items}> skill4 </p>
                    </div>
                </div>

                <div className = {styles.techstackTab}> 
                    <div className = {styles.techstackTitle}>
                        <p> Tech Stack: </p>
                    </div>
                    <div className = {styles.techstackList}>
                        <p className = {styles.items}> techstack1 </p>
                        <p className = {styles.items}> techstack2 </p>
                        <p className = {styles.items}> techstack3 </p>
                        <p className = {styles.items}> techstack4 </p>
                    </div>
                </div>

            </div>
        </div>
        
    )

}

export default HomePage;


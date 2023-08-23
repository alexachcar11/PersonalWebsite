import Link from 'next/link';
import styles from '../styles/home-page.module.css';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Text } from '@nextui-org/react';

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function HomePage() { 

    const handleDownload = () => {
        document.body.style.overflow = 'hidden';
      
        const link = document.createElement('a');
        link.href = '/Alexander-Achcar-Resume.pdf';
        link.download = 'AlexanderAchcarResume.pdf';
        link.click();
      
        document.body.style.overflow = 'auto';
    };

    const divisionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        const divisionContainerElement = divisionRef.current.parentElement;
        const sections = gsap.utils.toArray(".panel");
      
        sections.forEach((section, index) => {
          gsap.to(divisionContainerElement, {
            scrollTo: {
              y: section.offsetTop,
              autoKill: false,
            },
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: () => `+=${section.clientHeight}`,
              scrub: true,
              snap: {
                snapTo: 'labels',
              },
              toggleActions: 'play none none reverse',
              onEnter: () => {
                if (index < sections.length - 1) {
                  // Scroll to the next section when entering
                  gsap.to(divisionContainerElement, {
                    scrollTo: {
                      y: sections[index + 1].offsetTop,
                      autoKill: false,
                    },
                    ease: 'power2.inOut',
                  });
                }
              },
              onLeaveBack: () => {
                if (index > 0) {
                  // Scroll to the previous section when leaving back
                  gsap.to(divisionContainerElement, {
                    scrollTo: {
                      y: sections[index - 1].offsetTop,
                      autoKill: false,
                    },
                    ease: 'power2.inOut',
                  });
                }
              },
            },
          });
        });
    }, []);

    return ( 
        
        <div className={styles.container}>
            <div ref={divisionRef} className={styles.panelContainer}> 
                <div className = {styles.panel} > 
                    <div className = {styles.title} > 
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src="headshot.jpg" alt="Headshot" />
                        </div>
                        <Text 
                            h1 
                            size={60} 
                            css={{ 
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

                <div className = {styles.panel}> 
                    <div className = {styles.skillsTab}> 
                        <div className = {styles.skillsTitle}>
                            <p> Skills: </p>
                        </div>
                        <div className = {styles.skillsList}>
                            <p className = {styles.items}> Frontend Development </p>
                            <p className = {styles.items}> Backend Development </p>
                            <p className = {styles.items}> CI/CD </p>
                            <p className = {styles.items}> Artificial Intelligence / Machine Learning </p>
                        </div>
                    </div>

                    <div className = {styles.techstackTab}> 
                        <div className = {styles.techstackTitle}>
                            <p> Tech Stack: </p>
                        </div>
                        <div className = {styles.techstackList}>

                            <p className = {styles.items}> Java </p>
                            <p className = {styles.items}> Python </p>
                            <p className = {styles.items}> C </p>
                            <p className = {styles.items}> Unix </p>
                            <p className = {styles.items}> HTML </p>

                            <p className = {styles.items}> CSS </p>
                            <p className = {styles.items}> Javascript </p>
                            <p className = {styles.items}> React </p>
                            <p className = {styles.items}> Next.js </p>
                            <p className = {styles.items}> AWS </p>

                            <p className = {styles.items}> Docker </p>
                            <p className = {styles.items}> Django </p>
                            <p className = {styles.items}> Jenkins </p>
                            <p className = {styles.items}> Pandas </p>
                            <p className = {styles.items}> PyTorch </p>

                            <p className = {styles.items}> Keras </p>
                            <p className = {styles.items}> Figma </p>
                            <p className = {styles.items}> Notion </p>
                            <p className = {styles.items}> Jira </p>
                            <p className = {styles.items}> SQL </p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )

}

export default HomePage;


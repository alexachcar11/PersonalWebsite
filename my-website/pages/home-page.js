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
        </div>
        
    )

}

export default HomePage;


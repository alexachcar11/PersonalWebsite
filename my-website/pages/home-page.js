import Link from 'next/link';
import styles from '../styles/home-page.module.css';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
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

    const [highlightedTech, setHighlightedTech] = useState('');

    useEffect(() => {
        const skillsList = document.querySelectorAll('div.skillsitems');
        const techstackList = document.querySelectorAll('.techstackList .items');

        console.log(skillsList);
        console.log("Skills list len: ", skillsList.length);

        skillsList.forEach(skill => {
            skill.addEventListener('mouseover', () => {
                const relatedTechs = skill.getAttribute('data-related').split(' ');
    
                if (relatedTechs.includes('Java')) {
                    techstackList.forEach(item => {
                        if (item.getAttribute('data-tech') === 'Java') {
                            item.classList.add('.highlighted');
                        } else {
                            item.classList.remove('.highlighted');
                        }
                    });
                } else {
                    const highlightedTech = relatedTechs.find(tech =>
                        techstackList.some(item => item.getAttribute('data-tech') === tech)
                    );
    
                    techstackList.forEach(item => {
                        if (item.getAttribute('data-tech') === highlightedTech) {
                            item.classList.add('highlighted');
                        } else {
                            item.classList.remove('highlighted');
                        }
                    });
                }
            });
        });
    }, []);

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
                  gsap.to(divisionContainerElement, {
                    scrollTo: {
                      y: sections[index + 1].offsetTop,
                      autoKill: false,
                    },
                    ease: 'power2.inOut',
                  });
                }
                console.log("hello");
              },
              onLeaveBack: () => {
                if (index > 0) {
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
                        <div className={styles.skillsList}>
                            <div className={styles.skillsitems} data-tech="Frontend Development" data-related="Java">
                                Frontend Development
                            </div>
                            <div className={styles.skillsitems} data-tech="Backend Development" data-related="Python">
                                Backend Development
                            </div>
                            <div className={styles.skillsitems} data-tech="CI/CD">
                                CI/CD
                            </div>
                            <div className={styles.skillsitems} data-tech="AI/ML">
                                Artificial Intelligence / Machine Learning
                            </div>
                        </div>
                    </div>

                    <div className = {styles.techstackTab}> 
                        <div className = {styles.techstackTitle}>
                            <p> Tech Stack: </p>
                        </div>
                        <div className = {styles.techstackList}>

                            <p className = {styles.techstackitems} data-tech="Java"> Java </p>
                            <p className = {styles.techstackitems} data-tech="Python"> Python </p>
                            <p className = {styles.techstackitems} data-tech="C"> C </p>
                            <p className = {styles.techstackitems} data-tech="Unix"> Unix </p>
                            <p className = {styles.techstackitems} data-tech="HTML"> HTML </p>


                            <p className = {styles.techstackitems} data-tech="CSS"> CSS </p>
                            <p className = {styles.techstackitems} data-tech="Javascript"> Javascript </p>
                            <p className = {styles.techstackitems} data-tech="React"> React </p>
                            <p className = {styles.techstackitems} data-tech="Next.js"> Next.js </p>
                            <p className = {styles.techstackitems} data-tech="AWS"> AWS </p>

                            <p className = {styles.techstackitems} data-tech="Docker"> Docker </p>
                            <p className = {styles.techstackitems} data-tech="Django"> Django </p>
                            <p className = {styles.techstackitems} data-tech="Jenkins"> Jenkins </p>
                            <p className = {styles.techstackitems} data-tech="Pandas"> Pandas </p>
                            <p className = {styles.techstackitems} data-tech="PyTorch"> PyTorch </p>

                            <p className = {styles.techstackitems} data-tech="Keras"> Keras </p>
                            <p className = {styles.techstackitems} data-tech="Figma"> Figma </p>
                            <p className = {styles.techstackitems} data-tech="Notion"> Notion </p>
                            <p className = {styles.techstackitems} data-tech="Jira"> Jira </p>
                            <p className = {styles.techstackitems} data-tech="SQL"> SQL </p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )

}

export default HomePage;


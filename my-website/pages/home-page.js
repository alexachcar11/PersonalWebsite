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

    const skillsListRef = useRef(null);

    useEffect(() => {
        const skillsList = document.querySelectorAll(`.${styles.skillsitems}`);
        const techstackList = [...document.querySelectorAll(`.${styles.techstackitems}`)];

        const removeHighlightFromTechStack = () => {
            techstackList.forEach(item => {
                item.style.textDecoration = 'none';
                item.style.fontStyle = 'normal';
            });
        };

        skillsList.forEach(skill => {
            skill.addEventListener('mouseover', () => {
                const relatedTechs = skill.getAttribute('data-related').split(' ');
    
                techstackList.forEach(item => {
                    item.classList.remove('highlighted');
                });
    
                relatedTechs.forEach(tech => {
                    techstackList.forEach(item => {
                        if (item.getAttribute('data-tech') === tech) {
                            // item.style.backgroundColor = 'red'; // adjust the color to something else
                            item.style.textDecoration = 'underline';
                            item.style.fontStyle = 'italic';
                        }
                    });
                });
                skill.addEventListener('mouseleave', () => {
                    removeHighlightFromTechStack();
                });
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
                        <div className={styles.skillsList} ref={skillsListRef}>
                            <div className={styles.skillsitems} data-tech="Frontend Development" data-related="HTML CSS Javascript React Next.js">
                                Frontend Development
                            </div>
                            <div className={styles.skillsitems} data-tech="Backend Development" data-related="Java Python C SQL">
                                Backend Development
                            </div>
                            <div className={styles.skillsitems} data-tech="CI/CD" data-related="Docker Django Jenkins">
                                CI/CD
                            </div>
                            <div className={styles.skillsitems} data-tech="AI/ML" data-related="Python Pandas PyTorch Keras">
                                Artificial Intelligence / Machine Learning
                            </div>
                        </div>
                    </div>

                    <div className = {styles.techstackTab}> 
                        <div className = {styles.techstackTitle}>
                            <p> Tech Stack: </p>
                        </div>
                        <div className = {styles.techstackList}>

                            <div className = {styles.techstackitems} data-tech="Java"> Java </div>
                            <div className = {styles.techstackitems} data-tech="Python"> Python </div>
                            <div className = {styles.techstackitems} data-tech="C"> C </div>
                            <div className = {styles.techstackitems} data-tech="Unix"> Unix </div>
                            <div className = {styles.techstackitems} data-tech="HTML"> HTML </div>


                            <div className = {styles.techstackitems} data-tech="CSS"> CSS </div>
                            <div className = {styles.techstackitems} data-tech="Javascript"> Javascript </div>
                            <div className = {styles.techstackitems} data-tech="React"> React </div>
                            <div className = {styles.techstackitems} data-tech="Next.js"> Next.js </div>
                            <div className = {styles.techstackitems} data-tech="AWS"> AWS </div>

                            <div className = {styles.techstackitems} data-tech="Docker"> Docker </div>
                            <div className = {styles.techstackitems} data-tech="Django"> Django </div>
                            <div className = {styles.techstackitems} data-tech="Jenkins"> Jenkins </div>
                            <div className = {styles.techstackitems} data-tech="Pandas"> Pandas </div>
                            <div className = {styles.techstackitems} data-tech="PyTorch"> PyTorch </div>

                            <div className = {styles.techstackitems} data-tech="Keras"> Keras </div>
                            <div className = {styles.techstackitems} data-tech="Figma"> Figma </div>
                            <div className = {styles.techstackitems} data-tech="Notion"> Notion </div>
                            <div className = {styles.techstackitems} data-tech="Jira"> Jira </div>
                            <div className = {styles.techstackitems} data-tech="SQL"> SQL </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )

}

export default HomePage;


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
                        <h1>hello1</h1>
                    </div>

                    <div className={styles.panel}>
                        <h1>hello2</h1>
                    </div>

                    <div className={styles.panel}> 
                        <h1>hello3</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;

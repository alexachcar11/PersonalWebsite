import Link from 'next/link';
import styles from '../styles/about-me.module.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { Text } from '@nextui-org/react';
import HomeIcon from '@mui/icons-material/Home';

function AboutMe() { 

    return ( 

        <div className={styles.container}>
            <div className={styles.homeButton}> 
                <button className={styles.button1} onClick={ ()=>window.location.href='/home-page'}> <HomeIcon/> </button>
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
                    About Me
                </Text>
            </div>

            <div className={styles.blurb}> 
                <p> 
                    My Name is Alexander Achcar. I'm a Software Developer Analyst at Citi Canada. I recently completed my 
                    undergraduate degree at McGill University where I attained a Bachelor of Science with a Major in Software 
                    Engineering and a Minor in Neuroscience. I'm extremely passionate about building software that has a direct 
                    impact on improving quality of life. I have a wide range of work experience that has granted me unique 
                    perspectives which I leverage to succeed on any project that I work on. 
                </p> 
            </div>

            <div>  {/* pictures and descriptions */}
                
                <div className={styles.highlights}> 

                    <div className={styles.pic1container}>
                        <div className={styles.pic1Title}> 
                            <Text 
                                h1 
                                size={25} 
                                css={{ 
                                    textGradient: "45deg, #772E25 -20%, #C44536 50%",
                                }}
                                weight="bold"
                            >
                                Hong Kong
                            </Text>
                        </div>
                        <img className={styles.pic1} src="hkpic.jpg" alt="hkpic" />
                        <div className={styles.desc1}>
                            <p> 
                                I grew up and lived in Hong Kong for 17 years. My time in Asia has given me a great 
                                appreciation for different Asian cultures that has strongly influenced the person I am today. 
                            </p>
                        </div>
                    </div>

                    <div className={styles.pic2container}> 
                        <div className={styles.pic2Title}> 
                            <Text 
                                h1 
                                size={25} 
                                css={{ 
                                    textGradient: "45deg, #772E25 -20%, #C44536 50%",
                                }}
                                weight="bold"
                            >
                                Montreal
                            </Text>
                        </div>
                        <img className={styles.pic2} src="mtlpic.jpg" alt="mtlpic" />
                        <div className={styles.desc2}> 
                            <p> 
                                At 17 years old, I moved to Montreal where I've lived for the past 5 years. 
                                I studied at Marianopolis College (CEGEP) and McGill University. 
                            </p>
                        </div>
                    </div>

                    <div className={styles.pic3container}> 
                        <div className={styles.pic3Title}> 
                            <Text 
                                h1 
                                size={25} 
                                css={{ 
                                    textGradient: "45deg, #772E25 -20%, #C44536 50%",
                                }}
                                weight="bold"
                            >
                                Toronto
                            </Text>
                        </div>
                        <img className={styles.pic3} src="topic.jpeg" alt="topic" />
                        <div className={styles.desc3}> 
                            <p> 
                                I recently accepted an offer to work full-time in Mississauga, ON. I'm super 
                                excited to begin the next chapter of my life in Toronto and can't wait to see 
                                what's next.
                            </p>   
                        </div>
                    </div>
                    
                </div>

            </div>


        </div>

    )

}

export default AboutMe;


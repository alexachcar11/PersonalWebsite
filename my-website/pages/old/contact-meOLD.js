import Link from 'next/link';
import styles from '../styles/contact-me.module.css';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { Text } from '@nextui-org/react';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';


function Contactme() { 

    const goLinkedIn = () => { 
        window.location.href = 'https://www.linkedin.com/in/alexander-achcar/';
    }

    const goGitHub = () => { 
        window.location.href = 'https://github.com/alexachcar11';
    }

    const sendEmail = () => { 
        window.location = 'mailto:achcar.alexander@gmail.com';
    }

    return ( 

        <div className={styles.container}>

            <div className={styles.homeButton}>
                <button className={styles.button1} onClick={() => window.location.href = '/home-page'}>
                    <HomeIcon />
                </button>
            </div>

            <div className = {styles.title} > 
                <Text 
                    h1 
                    size={60} 
                    css={{ 
                        textGradient: "45deg, #111111 -20%, #666666 50%",
                    }}
                    weight="bold"
                >
                    Contact Me
                </Text>
            </div>

            <div> 
                <div className={styles.sections}> 

                    <div className={styles.singleContact} onClick={goLinkedIn}>
                        <div className={styles.logos}> 
                            <LinkedInIcon className={styles.icons}/>
                        </div>
                        <div className={styles.content}> 
                            <div className={styles.text}> 
                                <Text 
                                    h1 
                                    size={30} 
                                    css={{ 
                                        textGradient: "45deg, #111111 -20%, #666666 50%",
                                    }}
                                    weight="bold"
                                >
                                    LinkedIn
                                </Text>
                                <div> 
                                    <p> Click to see my LinkedIn Page </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.singleContact} onClick={goGitHub}>
                        <div className={styles.logos}> 
                            <GitHubIcon className={styles.icons}/>
                        </div>
                        <div className={styles.content}> 
                            <div className={styles.text}> 
                                <Text 
                                    h1 
                                    size={30} 
                                    css={{ 
                                        textGradient: "45deg, #111111 -20%, #666666 50%",
                                    }}
                                    weight="bold"
                                >
                                    GitHub
                                </Text>
                                <div> 
                                    <p> Click to see my GitHub Page </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.singleContact} onClick={sendEmail}>
                        <div className={styles.logos}> 
                            <MailIcon className={styles.icons}/>
                        </div>
                        <div className={styles.content}> 
                            <div className={styles.text}> 
                                <Text 
                                    h1 
                                    size={30} 
                                    css={{ 
                                        textGradient: "45deg, #111111 -20%, #666666 50%",
                                    }}
                                    weight="bold"
                                >
                                    Email
                                </Text>
                                <div> 
                                    <p> Click to send me an Email: {"\n"} achcar.alexander@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Contactme;
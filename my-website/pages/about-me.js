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
                    Big Blurb
                </p> 
            </div>

            <div>  {/* pictures and descriptions */}
                
                <div className={styles.pictures}> 

                    <div className={styles.pic1}>
                            
                    </div>

                    <div className={styles.pic2}> 
                        
                    </div>

                    <div className={styles.pic3}> 
                        
                    </div>
                    
                </div>

                <div className={styles.descriptions}> 

                    <div className={styles.desc1}>
                        
                    </div>

                    <div className={styles.desc2}> 
                        
                    </div>

                    <div className={styles.desc3}> 
                        
                    </div>

                </div>

            </div>


        </div>

    )

}

export default AboutMe;


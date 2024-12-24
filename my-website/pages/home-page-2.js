import styles from '../styles/home-page-2.module.css';
import Image from 'next/image'
import { Text } from '@nextui-org/react';

export default function HomePage2() { 

    return(

        <div className={styles.container}>
            {/* Headshot in the middle of the page */}
            <div className={styles.headshot}> 
                <Image 
                    src="/headshot.jpg" 
                    width={1000}
                    height={800}
                    style={{
                        borderRadius:'50%',
                        objectFit: 'cover',
                        overflow:'hidden'
                    }} 
                    alt="Headshot"
                />
            </div>

            <div className={styles.name}> 
                <Text 
                    h1 
                    size={130} 
                    color={'#cccccc'}
                    weight="extrabold"
                >
                    ALEXANDER &nbsp; ACHCAR
                </Text>
            </div>

            {/* Side Menubar */}
            <div className={styles.menuConsole}> 

                {/* About Me */}
                <div className={styles.menuItem}>
                    
                </div>

                {/* Experiences */}
                <div className={styles.menuItem}>

                </div>

                {/* Currently Working On */}
                <div className={styles.menuItem}>

                </div>

                {/* Contact Me */}
                <div className={styles.menuItem}>

                </div>
            </div>
        </div>
    );
}

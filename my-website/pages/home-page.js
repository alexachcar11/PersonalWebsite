import Link from 'next/link';
import styles from '../styles/home-page.module.css';
import Head from 'next/head';
import { useEffect } from 'react';

function HomePage() { 

    return ( 
        
        <div className={styles.container}>

            <div className = {styles.title} > 
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src="headshot.jpg" alt="Headshot" />
                </div>
                <h1>Alexander Achcar</h1>
            </div>

            <div className={styles.briefDesc}> 
                <p> Hi! Welcome to my website! </p>
                <p> Please feel free to explore around to learn more about either me personally or about some of the work I've done so far. </p>
            </div>

            <div className = {styles.botButtons}> 
                <button> About Me </button>
                <button> My Experiences </button>
                <button> My Resume </button>
                <button> Contact Me </button>
            </div> 
        </div> 
        
    )

}

export default HomePage;


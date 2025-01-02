import styles from '../styles/about-me.module.css';
import { Text, Button} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'


export const AboutMeContent = () => (
  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
    <Text h1 className={styles.aboutMeTitle}> About Me </Text>
    <Text className={styles.aboutMeText} size="$xl"> 
      Hi there! My name is Alexander Achcar. I&#39;m a passionate lifelong learner when it comes to all things 
      technology — currently most interested in the intersection of technology with finance, stemming from 
      my current job as a Software Analyst at Citibank. I spent my first 12 months at Citi working on a team 
      focused on developing and iterating on a bond pricing application. My current team primarily implements 
      financial controls for a subset of Citibank traders. I&#39;ve been in this role since July 2022, which is 
      when I transitioned into my career from McGill University. At McGill I found a deep interest for 
      learning about new technologies while also pursuing more general curiosities in Neuroscience through my 
      minor. 
    </Text>

    <Text className={styles.aboutMeText} size="$xl"> 
      I put together this website as a means to become familiar with a modern frontend tech stack and give a 
      small introduction to me as a person. Please feel free to reach out through LinkedIn or email via the 
      contact me tab in the top right. 
    </Text>
  </Box>
);
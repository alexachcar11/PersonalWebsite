import styles from '../styles/experiences.module.css';
import { Text, Button, Card, Spacer} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'

export const ExperienceContent = () => (

  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
    <Text h1 className={styles.experiencesTitle}> Experiences <span className={styles.paper}>📝</span></Text>
      <div className={styles.fullGrid}> 

        <div className={styles.citiFullTime}> 
          <div className={styles.logoBox}> 
            <Image 
              width="200"
              height="200"
              src="/citilogo.png" 
              alt="Citi Logo"
            />
          </div>
          <div className={styles.citiFullTimeText}> 
            <Text h2> Software Analyst </Text>
            <Text h4> July 2023 - Current </Text>
            <Text> Fundamental Review of Trading Book </Text>
            <Spacer x={4} y={2} />      
            <Text h2> Software Analyst </Text>
            <Text h4> June 2022 - July 2023 </Text>
            <Text> Local Markets Bond Pricer </Text>
            <Spacer x={4} y={2} />      
            <Text h2> Summer Software Analyst </Text>
            <Text h4> May 2022 - August 2022 </Text>
            <Text> Derivative Pricing (Business Analyst) </Text>    
          </div>
        </div>


        <div className={styles.fca}> 
          <div className={styles.logoBox}> 
            <Image 
              width="200"
              height="200"
              src="/fcalogo-modified.png" 
              alt="FCA Logo"
            />
          </div>
          <div className={styles.fcaText}> 
            <Text h2> Coding/Stem Instructor </Text>
            <Text h4> June 2021 - August 2021 </Text>
          </div>
        </div>


        <div className={styles.ni2}> 
          <div className={styles.logoBox}> 
            <Image 
              width="200"
              height="200"
              src="/ni2logo-modified.png" 
              alt="Ni2 Logo"
            />
          </div>
          <div className={styles.ni2Text}> 
            <Text h2> Software Developer Intern </Text>
            <Text h4> June 2019 - August 2019 </Text>
            <Spacer x={4} y={2} />      
            <Text h2> Software Developer Intern </Text>
            <Text h4> June 2017 - August 2017 </Text>
          </div>
        </div>


        <div className={styles.actel}> 
          <div className={styles.logoBox}> 
            <Image 
              width="200"
              height="200"
              src="/actellogo.png" 
              alt="Actel Logo"
            />
          </div>
          <div className={styles.actelText}> 
            <Text h2> Research Intern </Text>
            <Text h4> May 2020 - August 2020 </Text>
          </div>
        </div>
      </div>
  </Box>
);
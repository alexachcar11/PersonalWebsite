import styles from '../styles/experiences.module.css';
import { Text, Button, Card, Spacer} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'

export const ExperienceContent = () => (

  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
    <Text h1 className={styles.experiencesTitle}> Experiences </Text>
      <div className={styles.fullGrid}> 

        <div className={styles.citiFullTime}> 
          <div className={styles.citiFullTimeLogoBox}> 
            <Image 
              src="/citilogo.png" 
              width="400"
              height="400"
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
          <div className={styles.fcaLogoBox}> 
            <Image 
              src="/fcalogo-modified.png" 
              width="600"
              height="600"
              alt="FCA Logo"
            />
          </div>
          <div className={styles.fcaText}> 
            <Text h2> Coding/Stem Instructor </Text>
            <Text h4> June 2021 - August 2021 </Text>
          </div>
        </div>


        <div className={styles.ni2}> 
          <div className={styles.ni2LogoBox}> 
            <Image 
              src="/ni2logo-modified.png" 
              width="400"
              height="400"
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
          <div className={styles.actelLogoBox}> 
            <Image 
              src="/actellogo.png" 
              width="300"
              height="300"
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
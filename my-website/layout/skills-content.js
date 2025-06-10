import styles from '../styles/skills.module.css';
import { Text, Button} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'
import {Accordion, AccordionItem} from "@heroui/accordion"
import {Chip} from "@heroui/react";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/next"

export const SkillsContent = () => {
  const [showOpenUpChip, setShowOpenUpChip] = useState(true); 

  return (
    <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
      <Analytics/>
      <Text h1 className={styles.skillsTitle}> Skills <span className={styles.ninja}>🔨</span></Text>

      <Accordion selectionMode="multiple" className={styles.fullAccordion}>

        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          subtitle={
            <p className={styles.subtitles}>
              coding languages I've picked up over the years
            </p>
          }
          title="Programming Languages"
          hideIndicator
          
        > 
          <ul className={styles.lists}>
            <li>Java</li>
            <li>Python</li>
            <li>Javascript (Angular, React, Next.js) </li>
            <li>HTML/CSS</li>
            <li>C</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          subtitle={
            <p className={styles.subtitles}>
              my most used database technologies
            </p>
          }
          title="Database Relevant"
          hideIndicator
        > 
          <ul className={styles.lists}>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          subtitle={
            <p className={styles.subtitles}>
              what I use for deploying and maintaining apps
            </p>
          }
          title="CI/CD"
          hideIndicator
        > 
          <ul className={styles.lists}>
            <li>Docker</li>
            <li>Jenkins</li>
            <li>Openshift</li>
            <li>Vercel</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          subtitle={
            <p className={styles.subtitles}>
              software-adjacent tools for productivity and project management
            </p>
          }
          title="Tools"
          hideIndicator
        > 
          <ul className={styles.lists}>
            <li>Jira</li>
            <li>Bitbucket</li>
            <li>Git</li>
            <li>Figma</li>
          </ul>
        </AccordionItem>

      </Accordion>

      {showOpenUpChip && (
        <Chip variant="bordered" className={styles.openUpChip} onClose={() => setShowOpenUpChip(false)}>
          Click on each tab to see more...
        </Chip>
      )}
    </Box>
  )
};
import styles from '../styles/experiences.module.css';
import { Text, Button} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'

export const ExperienceContent = () => (

  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
    <Text h1> Experiences </Text>

  </Box>
);
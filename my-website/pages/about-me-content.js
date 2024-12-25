import styles from '../styles/about-me.module.css';
import { Text, Button} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'


export const AboutMeContent = () => (
  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
    <Text> About Me </Text>
  </Box>
);
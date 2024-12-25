import styles from '../styles/contact-me.module.css';
import { Text, Button} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'


export const ContactMeContent = () => (
  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
    <Text h1 className={styles.mainText}> Please feel free to reach out wherever it might be convenient for you... </Text>
    
  </Box>
);
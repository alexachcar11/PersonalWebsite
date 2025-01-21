import styles from '../styles/home-page.module.css';
import { Text, Button} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'


export const HomePageContent = () => (
  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>

    <div className={styles.headshotContainer}>
        <Image 
            src="/headshot.jpg" 
            fill
            style={{
                objectFit: "cover",
                borderRadius: "50%",
            }}  
            alt="Headshot"
        />
    </div>
    <Text h1 className={styles.title}> Hi! </Text>
    <Text className={styles.quickBlurb}> Welcome to my Website </Text>
    <Button
      className={styles.contactMeButton}
      radius="full"
      onClick={ ()=>window.location.href='/contact-me'}
    >
      Reach Out?
    </Button>
  </Box>
);
import styles from '../styles/home-page.module.css';
import { Text, Button} from "@nextui-org/react"
import { Box } from "./box.js"
import Image from 'next/image'


export const HomePageContent = () => (
  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>

    <Text h1 className={styles.title}> Hi! <span className={styles.wavingHand}>👋</span></Text>
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
    <Button
      className={styles.contactMeButton}
      radius="full"
      onClick={ ()=>window.location.href='/contact-me'}
    >
      Reach Out?
    </Button>
  </Box>
);
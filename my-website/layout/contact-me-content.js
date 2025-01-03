import styles from '../styles/contact-me.module.css';
import { Text, Button, Card} from "@nextui-org/react";
import { Box } from "./box.js"
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ContactMeContent = () => (

  <Box css={{px: "$12", mt: "$8", textAlign:"center", "@xsMax": {px: "$10"}}}>
    <Text h1 className={styles.mainText}> Please feel free to reach out wherever it might be convenient for you... </Text>
    <div className={styles.cardContainer}> 
      <Card isPressable shadow="sm" onPress={() => window.location.href = 'https://www.linkedin.com/in/alexander-achcar/'} className={styles.cards}>
          <Card.Body className="overflow-visible p-0">
            <LinkedInIcon className={styles.icons} />
          </Card.Body>
          <Card.Footer className="text-small justify-between">
            <b>{"LinkedIn"}</b>
          </Card.Footer>
      </Card>

      <Card isPressable shadow="sm" onPress={() => window.location = 'mailto:achcar.alexander@gmail.com'} className={styles.cards} id={styles.midIcon}>
          <Card.Body className="overflow-visible p-0">
            <MailIcon className={styles.icons} />
          </Card.Body>
          <Card.Footer className="text-small justify-between">
            <b>{"Email"}</b>
          </Card.Footer>
      </Card>

      <Card isPressable shadow="sm" onPress={() => window.location.href = 'https://github.com/alexachcar11'} className={styles.cards}>
          <Card.Body className="overflow-visible p-0">
            <GitHubIcon className={styles.icons} />
          </Card.Body>
          <Card.Footer className="text-small justify-between">
            <b>{"Github"}</b>
          </Card.Footer>
      </Card>
    </div>
  </Box>
);
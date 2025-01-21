import styles from '../styles/contact-me.module.css';
import Image from 'next/image'
import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { ContactMeLayout } from "../layout/contact-me-layout.js";

export default function ContactMe() { 

    return(
        <ContactMeLayout> 
            <Navbar isBordered variant="floating">
                <Navbar.Brand> 
                    <Text b color="inherit" hideIn="xs">
                        Alexander Achcar
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="s" variant="highlight-rounded">
                    <Navbar.Link href="./home-page">Home</Navbar.Link>
                    <Navbar.Link href="./about-me">About Me</Navbar.Link>
                    <Navbar.Link href="./experiences">Experiences</Navbar.Link>
                    <Navbar.Link isActive href="#">Contact Me</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </ContactMeLayout>
    );
}

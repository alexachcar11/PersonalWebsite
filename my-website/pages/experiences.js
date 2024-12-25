import styles from '../styles/home-page.module.css';
import Image from 'next/image'
import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { ExperiencesLayout } from "./experiences-layout.js";

export default function Experiences() { 

    return(
        <ExperiencesLayout> 
            <Navbar isBordered variant="floating">
                <Navbar.Brand> 
                    <Text b color="inherit" hideIn="xs">
                        ALEXANDER ACHCAR
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="s" variant="highlight-rounded">
                    <Navbar.Link href="./home-page">Home</Navbar.Link>
                    <Navbar.Link href="./about-me">About Me</Navbar.Link>
                    <Navbar.Link isActive href="#">Experiences</Navbar.Link>
                    <Navbar.Link href="./contact-me">Contact Me</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </ExperiencesLayout>
    );
}

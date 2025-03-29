import styles from '../styles/skills.module.css';
import Image from 'next/image'
import { Navbar, Button, Link, Text } from '@nextui-org/react';
import { SkillsLayout } from "../layout/skills-layout.js";

export default function Skills() { 

    return(
        <SkillsLayout> 
            <Navbar isBordered variant="floating">
                <Navbar.Brand> 
                    <Text b color="inherit" hideIn="xs">
                        Alexander Achcar
                    </Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="s" variant="highlight-rounded">
                    <Navbar.Link href="./home-page">Home</Navbar.Link>
                    <Navbar.Link href="./about-me">About Me</Navbar.Link>
                    <Navbar.Link isActive href="#">Skills</Navbar.Link>
                    <Navbar.Link href="./experiences">Experiences</Navbar.Link>
                    <Navbar.Link href="./contact-me">Contact Me</Navbar.Link>
                </Navbar.Content>
            </Navbar>
        </SkillsLayout>
    );
}

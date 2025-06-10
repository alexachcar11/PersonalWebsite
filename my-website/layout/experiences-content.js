import styles from '../styles/experiences.module.css';
import { Text, Spacer } from "@nextui-org/react";
import { Box } from "./box.js";
import { ExperienceCard } from "./ExperiencesCard";

export const ExperienceContent = () => (
  
  <Box css={{ px: "$12", mt: "$8", textAlign: "center", "@xsMax": { px: "$10" } }}>
    <Text h1 className={styles.experiencesTitle}>
      Experiences <span className={styles.paper}>📝</span>
    </Text>
    <Text> Feel free to click on each card to learn more! </Text>

    <div className={styles.fullGrid}>

      <ExperienceCard
        className={styles.citiFullTime}
        logo="/citilogo.png"
        alt="Citi Logo"
        alternateContent={ 
          <div>
            <Text h4> Fundamental Review of Trading Book </Text>
            <Text> • Collaborated with market quantitative analysts to implement financial risk controls adhering to the fundamental review of the trading book. </Text>
            <Text> • Onboarded new financial regulations to our platform to assist Citibank’s XVA desk in performing risk calculations.</Text>
            <Text> • Developed python scripts to streamline error reporting for support to track failing netting sets. </Text>
            <Text> • More to come.. </Text>
            <Text> Stack: Java, Python, HTML/CSS, Angular.js, MongoDB </Text>

            <Spacer x={4} y={1} />

            <Text h4> Local Markets Bond Pricer </Text>
            <Text> • Demonstrated mastery with Java to enhance and build upon a low latency bond trading application and support bond traders across local markets. </Text>
            <Text> • Collaborated with colleagues around the world to design and innovate upon a distributed system. </Text>
            <Text> • Spearheaded a project to migrate a database from Sybase to Oracle. </Text>
            <Text> Stack: Java, Sybase, Oracle </Text>

            <Spacer x={4} y={1} />
            
            <Text h4> Derivative Pricing </Text>
            <Text> • Performed Data Analysis on large datasets to draw effective and accurate conclusions on trade impacts.</Text>
            <Text> • Leveraged Python, SQL, and AWS features to develop software aimed at improving the current processes in the lifecycle of my team at Citi. </Text>
            <Text> • Actively absorbed new insights on upcoming trends in both technology and finance which I took advantage of to offer unique solutions on a variety of different projects.</Text>
            <Text> Stack: Python, SQL, Dataflame </Text>

            <Spacer x={4} y={1} /> 

            <Text h5> Additional Notes </Text>
            <Text> During my time with Citi, I've taken advantage of the opportunity to contribute towards the hiring process by conducting interviews. I've also organized multiple internal events, most notably a hackathon with over 60 participants and featuring judges from across the management hierarchy. </Text>
          </div>
        }
        originalContent={
          <div>
            <Text h2> Software Analyst </Text>
            <Text h4> July 2023 - Current </Text>
            <Text> Fundamental Review of Trading Book </Text>
            <Spacer x={4} y={2} />
            <Text h2> Software Analyst </Text>
            <Text h4> June 2022 - July 2023 </Text>
            <Text> Local Markets Bond Pricer </Text>
            <Spacer x={4} y={2} />
            <Text h2> Summer Software Analyst </Text>
            <Text h4> May 2022 - August 2022 </Text>
            <Text> Derivative Pricing (Business Analyst) </Text>
          </div>
        }
      />

      <ExperienceCard
        className={styles.fca}
        logo="/fcalogo-modified.png"
        alt="FCA Logo"
        alternateContent ={ 
          <div>
            <Text h4> Coding/Stem Instructor</Text> 
            <Text> • Taught a variety of Computer Science related topics such as Python, JavaScript, and Video Game modding to children aged between 7 and 16 through both remote and in-person means. </Text>
            <Text> • Produced and recorded educational tutorials on topics such as creating utilities/games in JavaScript or apps using MIT’s App Inventor for First Code Academy’s YouTube channel.</Text>
            <Text> • Performed daily lesson recaps and maintained a line of direct communication with parents.</Text>
          </div>
        }
        originalContent={
          <div className={styles.fcaText}>
            <Text h2> Coding/Stem Instructor </Text>
            <Text h4> June 2021 - August 2021 </Text>
          </div>
        }
      />

      <ExperienceCard
        className={styles.ni2}
        logo="/ni2logo-modified.png"
        alt="Ni2 Logo"
        alternateContent={
          <div> 
            <Text h4> Software Developer Intern - Stint 2 </Text>
            <Text> • Cooperated with a team of six developers to create, ship, and update the front and back end of Ni2’s open technology platform.</Text>
            <Text> • Utilized Jira to track, manage, and plan ten projects.</Text>
            <Text> • Operated in Python to build code and edited outdated code written in Java.</Text>

            <Spacer x={4} y={1} />

            <Text h4> Software Developer Intern - Stint 1 </Text>
            <Text> • Supported software operations with the use of Git. </Text>
            <Text> • Augmented search queries through the use of an XML language tailored to Ni2’s platform.</Text>
            <Text> • Acquired valuable experience in bringing my strengths to a team of software professionals.</Text>
          </div>
        }
        originalContent={
          <div className={styles.ni2Text}>
            <Text h2> Software Developer Intern </Text>
            <Text h4> June 2019 - August 2019 </Text>
            <Spacer x={4} y={2} />
            <Text h2> Software Developer Intern </Text>
            <Text h4> June 2017 - August 2017 </Text>
          </div>
        }
      />

      <ExperienceCard
        className={styles.actel}
        logo="/actellogo.png"
        alt="Actel Logo"
        alternateContent={
          <div> 
            <Text h4> Research Intern </Text>
            <Text> • Conducted research and delivered insights related to the internet economy in South East Asia</Text>
            <Text> • Constructed and designed presentations on a wide range of tech topics including broadband, fibre, Data Centres and cloud computing. Assisted with presentations to clients and investors</Text>
            <Text> • Shadowed meetings and discussions regarding the application of my research </Text>
          </div>
        }
        originalContent={
          <div className={styles.actelText}>
            <Text h2> Research Intern </Text>
            <Text h4> May 2020 - August 2020 </Text>
          </div>
        }
      />
      <Spacer x={4} y={4} />

    </div>
  </Box>
);

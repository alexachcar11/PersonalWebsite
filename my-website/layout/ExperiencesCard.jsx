import { useState } from 'react';
import { Text } from "@nextui-org/react";
import Image from 'next/image';
import styles from '../styles/experiences.module.css';

export const ExperienceCard = ({ className, logo, alt, originalContent, alternateContent }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${className} ${styles.card}`} onClick={() => setExpanded(prev => !prev)}>
      {!expanded ? (
        <div className={styles.originalContent}>
          <div className={styles.logoBox}>
            <Image width="200" height="200" src={logo} alt={alt} />
          </div>
          <div className={styles.textContent}>
            {originalContent}
          </div>
        </div>
      ) : (
        <div className={styles.fullWidthAlternate}>
          <Text>{alternateContent}</Text>
        </div>
      )}
    </div>
  );
};
import { AboutMeContent } from "./about-me-content.js"
import { Box } from "./box.js";

export const AboutMeLayout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <AboutMeContent />
  </Box>
);
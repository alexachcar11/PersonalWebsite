import { ExperienceContent } from "./experiences-content.js"
import { Box } from "./box.js";

export const ExperiencesLayout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <ExperienceContent />
  </Box>
);
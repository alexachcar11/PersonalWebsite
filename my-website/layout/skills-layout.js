import { SkillsContent } from "./skills-content.js"
import { Box } from "./box.js";

export const SkillsLayout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <SkillsContent />
  </Box>
);
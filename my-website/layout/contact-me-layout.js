import { ContactMeContent } from "./contact-me-content.js"
import { Box } from "./box.js";

export const ContactMeLayout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <ContactMeContent />
  </Box>
);
import { HomePageContent } from "./home-page-content.js"
import { Box } from "./box.js";

export const HomePageLayout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <HomePageContent />
  </Box>
);
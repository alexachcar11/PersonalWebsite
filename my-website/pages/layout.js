import { Content } from "./content.js"
import { Box } from "./box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
  </Box>
);
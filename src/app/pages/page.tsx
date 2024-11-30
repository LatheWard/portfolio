import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Box color={theme.primary}>
      <Typography>Success!</Typography>
    </Box>
        
  );
}

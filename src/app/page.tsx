import AppIntro from "@/components/AppIntro";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({});

export default function HomePage() {
  return (
    <MantineProvider theme={theme}>
      <div>
        <AppIntro />
      </div>
    </MantineProvider>
  );
}

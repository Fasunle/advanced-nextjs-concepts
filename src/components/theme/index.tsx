import { PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute={"class"}
      enableSystem
      enableColorScheme
      defaultTheme="system"
    >
      {children}
    </NextThemeProvider>
  );
}

import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

export const theme = extendTheme(
    { config },
    {
        colors: {
            brand: {
                100: "#",
                900: "#1a202c",
                primary: '#4d3227',
                secondary: '#ebc999',
                tertiary: '#cd7700',
            },
        },
        styles: {
            global: () => ({
                body: {
                    bg: 'whiteAlpha.200',
                },
            }),
        },
    }
);


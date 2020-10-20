import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Lato',
        ].join(','),
        htmlFontSize: 10
    },
    palette: {
        primary: {
            main: '#150941'
        },
        secondary: {
            main: '#f80040'
        },
        action: {
            disabledBackground: '#333'
        }
    }
})

theme = responsiveFontSizes(theme);

export default theme;
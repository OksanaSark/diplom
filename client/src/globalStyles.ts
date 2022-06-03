import { Fonts } from './assets/media/fonts/GTEestiPro/Fonts'

import { createTheme } from '@mui/material/styles'
import { createGlobalStyle } from 'styled-components'
export const Global = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'GT Eesti Pro', sans-serif;
    font-weight: 300;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.LightWoff2}),
    url(${Fonts.LightWoff});
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.MediumWoff2}),
    url(${Fonts.MediumWoff});
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.RegularWoff2}),
    url(${Fonts.RegularWoff});
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.BoldWoff2}),
    url(${Fonts.BoldWoff});
    font-style: normal;
    font-weight: bold;
    font-display: swap;
  }

  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.LightItalicWoff2}),
    url(${Fonts.LightItalicWoff});
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.MediumItalicWoff2}),
    url(${Fonts.MediumItalicWoff});
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.RegularItalicWoff2}),
    url(${Fonts.RegularItalicWoff});
    font-style: italic;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'GT Eesti Pro';
    src: url(${Fonts.BoldItalicWoff2}),
    url(${Fonts.BoldItalicWoff});
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }
`

export const muiTheme = createTheme({
    typography: {
        'fontFamily': '"GT Eesti Pro", sans-serif',
        'fontWeightLight': 100,
        'fontWeightRegular': 300,
        'fontWeightMedium': 500,
    },
})

import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'GT Eesti Pro Display', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Bold.eot');
    src: local('GT Eesti Pro Display Bold'), local('GTEestiProDisplay-Bold'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Bold.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Bold.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Bold.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-MediumItalic.eot');
    src: local('GT Eesti Pro Display Medium Italic'), local('GTEestiProDisplay-MediumItalic'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-MediumItalic.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-MediumItalic.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-MediumItalic.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Light.eot');
    src: local('GT Eesti Pro Display Light'), local('GTEestiProDisplay-Light'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Light.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Light.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Light.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Medium.eot');
    src: local('GT Eesti Pro Display Medium'), local('GTEestiProDisplay-Medium'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Medium.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Medium.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Medium.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-RegularItalic.eot');
    src: local('GT Eesti Pro Display Regular Italic'), local('GTEestiProDisplay-RegularItalic'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-RegularItalic.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-RegularItalic.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-RegularItalic.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-RegularItalic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-LightItalic.eot');
    src: local('GT Eesti Pro Display Light Italic'), local('GTEestiProDisplay-LightItalic'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-LightItalic.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-LightItalic.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-LightItalic.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-BoldItalic.eot');
    src: local('GT Eesti Pro Display Bold Italic'), local('GTEestiProDisplay-BoldItalic'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-BoldItalic.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-BoldItalic.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'GT Eesti Pro Display';
    src: url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Regular.eot');
    src: local('GT Eesti Pro Display Regular'), local('GTEestiProDisplay-Regular'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Regular.eot?#iefix') format('embedded-opentype'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Regular.woff2') format('woff2'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Regular.woff') format('woff'),
    url('assets/media/fonts/GTEestiPro/GTEestiProDisplay-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`

export default Global

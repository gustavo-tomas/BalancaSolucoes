import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    blue:
    {
      "700": "#84A59D",
      "600": "#B7E4C7",
    },
    orange:
    {
      "500": "#F6BD60",
    },
    red:
    {
      "500": "#F28482",
    },
    beige:
    {
      "bg": "#f5f5dc",
    },
    grey:
    {
      "tb": "#747474",
    },
  },
  fonts: {
    heading: 'Maven+Pro',
    body: 'Sora',
  },
  styles: {
    global: {
      body: {
        bg: 'beige.bs',
        color: 'yellow.50'
      }
    }
  }
})
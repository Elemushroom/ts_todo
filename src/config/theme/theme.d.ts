// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeOptions, Theme, Palette, PaletteOptions, PaletteColor, Background, Text } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      primary: {
        normal: React.CSSProperties['color'] | string
        danger: string
      }
      secondary: {
        normal: React.CSSProperties['color'] | string
        danger: string
      }
    }
    background: {
      paper: string
      dark: string
      grey: string
    }
    text?: {
      dark: string
    }
    shadows?: React.CSSProperties['color'][]
  }

  interface ThemeOptions {
    status: {
      primary: {
        normal: React.CSSProperties['color'] | string
        danger: string
      }
      secondary: {
        normal: React.CSSProperties['color'] | string
        danger: string
      }
    }
    background: {
      paper: string
      dark: string
      grey: string
    }
    text?: {
      dark: React.CSSProperties['color']
    }
    shadows?: React.CSSProperties['color'][]
  }

  // Palette key
  interface Palette {
    testValue: React.CSSProperties['color'] | string
  }

  // Palette Options
  interface PaletteOptions {
    testValue: React.CSSProperties['color'] | string
  }

  // Palette Color Options
  interface PaletteColor {
    sub: React.CSSProperties['color'] | string
  }

  interface Background {
    dark: React.CSSProperties['color'] | string
  }

  interface Text {
    dark: React.CSSProperties['color'] | string
  }
}

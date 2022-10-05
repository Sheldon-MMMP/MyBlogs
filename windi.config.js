import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#FFFFFF',
      line: "#EEEEEE",
      index: "#F0EEEE",
    }),
    textColor: theme => ({
      ...theme('colors'),
      primarily: "#AAAAAA",
      subhead: '#777777',
      wechat: '#ababab',
    })
  },
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})

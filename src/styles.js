const defaultTheme = require('tailwindcss/defaultTheme')
const { isUsableColor } = require('./utils')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = (theme) => ({
  DEFAULT: {
    css: [
      {
        maxWidth: '65ch',
        color: theme('colors.gray.700', defaultTheme.colors.gray[700]),
        '[class~="lead"]:not(.unprose)': {
          color: theme('colors.gray.600', defaultTheme.colors.gray[600]),
        },
        '*:not(.unprose) a': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          textDecoration: 'underline',
          fontWeight: '500',
        },
        'strong:not(.unprose)': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          fontWeight: '600',
        },
        'ol[type="A"]:not(.unprose)': {
          '--list-counter-style': 'upper-alpha',
        },
        'ol[type="a"]:not(.unprose)': {
          '--list-counter-style': 'lower-alpha',
        },
        'ol[type="A s"]:not(.unprose)': {
          '--list-counter-style': 'upper-alpha',
        },
        'ol[type="a s"]:not(.unprose)': {
          '--list-counter-style': 'lower-alpha',
        },
        'ol[type="I"]:not(.unprose)': {
          '--list-counter-style': 'upper-roman',
        },
        'ol[type="i"]:not(.unprose)': {
          '--list-counter-style': 'lower-roman',
        },
        'ol[type="I s"]:not(.unprose)': {
          '--list-counter-style': 'upper-roman',
        },
        'ol[type="i s"]:not(.unprose)': {
          '--list-counter-style': 'lower-roman',
        },
        'ol[type="1"]:not(.unprose)': {
          '--list-counter-style': 'decimal',
        },
        'ol:not(.unprose) li': {
          position: 'relative',
        },
        'ol:not(.unprose) li::before': {
          content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
          position: 'absolute',
          fontWeight: '400',
          color: theme('colors.gray.500', defaultTheme.colors.gray[500]),
        },
        'ul:not(.unprose) li': {
          position: 'relative',
        },
        'ul:not(.unprose) li::before': {
          content: '""',
          position: 'absolute',
          backgroundColor: theme('colors.gray.300', defaultTheme.colors.gray[300]),
          borderRadius: '50%',
        },
        'hr:not(.unprose)': {
          borderColor: theme('colors.gray.200', defaultTheme.colors.gray[200]),
          borderTopWidth: 1,
        },
        'blockquote:not(.unprose)': {
          fontWeight: '500',
          fontStyle: 'italic',
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          borderLeftWidth: '0.25rem',
          borderLeftColor: theme('colors.gray.200', defaultTheme.colors.gray[200]),
          quotes: '"\\201C""\\201D""\\2018""\\2019"',
        },
        'blockquote:not(.unprose) p:first-of-type::before': {
          content: 'open-quote',
        },
        'blockquote:not(.unprose) p:last-of-type::after': {
          content: 'close-quote',
        },
        'h1:not(.unprose)': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          fontWeight: '800',
        },
        'h2:not(.unprose)': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          fontWeight: '700',
        },
        'h3:not(.unprose)': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          fontWeight: '600',
        },
        'h4:not(.unprose)': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          fontWeight: '600',
        },
        'figure:not(.unprose) figcaption': {
          color: theme('colors.gray.500', defaultTheme.colors.gray[500]),
        },
        'p:not(.unprose) > code': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          fontWeight: '600',
        },
        'p:not(.unprose) > code::before': {
          content: '"`"',
        },
        'p:not(.unprose) > code::after': {
          content: '"`"',
        },
        '*:not(.unprose) a code': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
        },
        'pre:not(.unprose)': {
          color: theme('colors.gray.200', defaultTheme.colors.gray[200]),
          backgroundColor: theme('colors.gray.800', defaultTheme.colors.gray[800]),
          overflowX: 'auto',
        },
        'pre:not(.unprose) code': {
          backgroundColor: 'transparent',
          borderWidth: '0',
          borderRadius: '0',
          padding: '0',
          fontWeight: '400',
          color: 'inherit',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          lineHeight: 'inherit',
        },
        'pre:not(.unprose) code::before': {
          content: 'none',
        },
        'pre:not(.unprose) code::after': {
          content: 'none',
        },
        'table:not(.unprose)': {
          width: '100%',
          tableLayout: 'auto',
          textAlign: 'left',
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        'table:not(.unprose) thead': {
          color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
          fontWeight: '600',
          borderBottomWidth: '1px',
          borderBottomColor: theme('colors.gray.300', defaultTheme.colors.gray[300]),
        },
        'table:not(.unprose) thead th': {
          verticalAlign: 'bottom',
        },
        'table:not(.unprose) tbody tr': {
          borderBottomWidth: '1px',
          borderBottomColor: theme('colors.gray.200', defaultTheme.colors.gray[200]),
        },
        'table:not(.unprose) tbody tr:last-child': {
          borderBottomWidth: '0',
        },
        'table:not(.unprose) tbody td': {
          verticalAlign: 'top',
        },
      },
      {
        fontSize: rem(16),
        lineHeight: round(28 / 16),
        'p:not(.unprose)': {
          marginTop: em(20, 16),
          marginBottom: em(20, 16),
        },
        '[class~="lead"]:not(.unprose)': {
          fontSize: em(20, 16),
          lineHeight: round(32 / 20),
          marginTop: em(24, 20),
          marginBottom: em(24, 20),
        },
        'blockquote:not(.unprose)': {
          marginTop: em(32, 20),
          marginBottom: em(32, 20),
          paddingLeft: em(20, 20),
        },
        'h1:not(.unprose)': {
          fontSize: em(36, 16),
          marginTop: '0',
          marginBottom: em(32, 36),
          lineHeight: round(40 / 36),
        },
        'h2:not(.unprose)': {
          fontSize: em(24, 16),
          marginTop: em(48, 24),
          marginBottom: em(24, 24),
          lineHeight: round(32 / 24),
        },
        'h3:not(.unprose)': {
          fontSize: em(20, 16),
          marginTop: em(32, 20),
          marginBottom: em(12, 20),
          lineHeight: round(32 / 20),
        },
        'h4:not(.unprose)': {
          marginTop: em(24, 16),
          marginBottom: em(8, 16),
          lineHeight: round(24 / 16),
        },
        'img:not(.unprose)': {
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        'video:not(.unprose)': {
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        'figure:not(.unprose)': {
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
        },
        'figure:not(.unprose) > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        'figure:not(.unprose) figcaption': {
          fontSize: em(14, 16),
          lineHeight: round(20 / 14),
          marginTop: em(12, 14),
        },
        'p:not(.unprose) > code': {
          fontSize: em(14, 16),
        },
        'h2:not(.unprose) code': {
          fontSize: em(21, 24),
        },
        'h3:not(.unprose) code': {
          fontSize: em(18, 20),
        },
        'pre:not(.unprose)': {
          fontSize: em(14, 16),
          lineHeight: round(24 / 14),
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
          borderRadius: rem(6),
          paddingTop: em(12, 14),
          paddingRight: em(16, 14),
          paddingBottom: em(12, 14),
          paddingLeft: em(16, 14),
        },
        'ol:not(.unprose)': {
          marginTop: em(20, 16),
          marginBottom: em(20, 16),
        },
        'ul:not(.unprose)': {
          marginTop: em(20, 16),
          marginBottom: em(20, 16),
        },
        'ul:not(.unprose)  li': {
          marginTop: em(8, 16),
          marginBottom: em(8, 16),
        },
        'ol:not(.unprose) li': {
          paddingLeft: em(28, 16),
        },
        'ol:not(.unprose) li::before': {
          left: '0',
        },
        'ul:not(.unprose) li': {
          paddingLeft: em(28, 16),
        },
        'ul:not(.unprose) li::before': {
          width: em(6, 16),
          height: em(6, 16),
          top: `calc(${em(28 / 2, 16)} - ${em(3, 16)})`,
          left: em(4, 16),
        },
        '> ul:not(.unprose) li p': {
          marginTop: em(12, 16),
          marginBottom: em(12, 16),
        },
        '> ul:not(.unprose) li > *:first-child': {
          marginTop: em(20, 16),
        },
        '> ul:not(.unprose) li > *:last-child': {
          marginBottom: em(20, 16),
        },
        '> ol:not(.unprose) li > *:first-child': {
          marginTop: em(20, 16),
        },
        '> ol:not(.unprose) li > *:last-child': {
          marginBottom: em(20, 16),
        },
        'ul:not(.unprose) ul, ul:not(.unprose) ol, ol:not(.unprose) ul, ol:not(.unprose) ol': {
          marginTop: em(12, 16),
          marginBottom: em(12, 16),
        },
        'hr:not(.unprose)': {
          marginTop: em(48, 16),
          marginBottom: em(48, 16),
        },
        'hr + *:not(.unprose)': {
          marginTop: '0',
        },
        'h2:not(.unprose) + *:not(.unprose)': {
          marginTop: '0',
        },
        'h3:not(.unprose) + *:not(.unprose)': {
          marginTop: '0',
        },
        'h4 + *:not(.unprose)': {
          marginTop: '0',
        },
        'table:not(.unprose)': {
          fontSize: em(14, 16),
          lineHeight: round(24 / 14),
        },
        'table:not(.unprose) thead th': {
          paddingRight: em(8, 14),
          paddingBottom: em(8, 14),
          paddingLeft: em(8, 14),
        },
        'table:not(.unprose) thead th:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) thead th:last-child': {
          paddingRight: '0',
        },
        'table:not(.unprose) tbody td': {
          paddingTop: em(8, 14),
          paddingRight: em(8, 14),
          paddingBottom: em(8, 14),
          paddingLeft: em(8, 14),
        },
        'table:not(.unprose) tbody td:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) tbody td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  sm: {
    css: [
      {
        fontSize: rem(14),
        lineHeight: round(24 / 14),
        'p:not(.unprose)': {
          marginTop: em(16, 14),
          marginBottom: em(16, 14),
        },
        '[class~="lead"]:not(.unprose)': {
          fontSize: em(18, 14),
          lineHeight: round(28 / 18),
          marginTop: em(16, 18),
          marginBottom: em(16, 18),
        },
        'blockquote:not(.unprose)': {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
          paddingLeft: em(20, 18),
        },
        'h1:not(.unprose)': {
          fontSize: em(30, 14),
          marginTop: '0',
          marginBottom: em(24, 30),
          lineHeight: round(36 / 30),
        },
        'h2:not(.unprose)': {
          fontSize: em(20, 14),
          marginTop: em(32, 20),
          marginBottom: em(16, 20),
          lineHeight: round(28 / 20),
        },
        'h3:not(.unprose)': {
          fontSize: em(18, 14),
          marginTop: em(28, 18),
          marginBottom: em(8, 18),
          lineHeight: round(28 / 18),
        },
        'h4:not(.unprose)': {
          marginTop: em(20, 14),
          marginBottom: em(8, 14),
          lineHeight: round(20 / 14),
        },
        '*:not(.unprose) img': {
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
        },
        'video:not(.unprose)': {
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
        },
        'figure:not(.unprose)': {
          marginTop: em(24, 14),
          marginBottom: em(24, 14),
        },
        'figure:not(.unprose) > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        'figure:not(.unprose) figcaption': {
          fontSize: em(12, 14),
          lineHeight: round(16 / 12),
          marginTop: em(8, 12),
        },
        'p:not(.unprose) > code': {
          fontSize: em(12, 14),
        },
        'h2:not(.unprose) code': {
          fontSize: em(18, 20),
        },
        'h3:not(.unprose) code': {
          fontSize: em(16, 18),
        },
        'pre:not(.unprose)': {
          fontSize: em(12, 14),
          lineHeight: round(20 / 12),
          marginTop: em(20, 12),
          marginBottom: em(20, 12),
          borderRadius: rem(4),
          paddingTop: em(8, 12),
          paddingRight: em(12, 12),
          paddingBottom: em(8, 12),
          paddingLeft: em(12, 12),
        },
        'ol:not(.unprose)': {
          marginTop: em(16, 14),
          marginBottom: em(16, 14),
        },
        'ul:not(.unprose)': {
          marginTop: em(16, 14),
          marginBottom: em(16, 14),
        },
        'ul:not(.unprose) li': {
          marginTop: em(4, 14),
          marginBottom: em(4, 14),
        },
        'ol:not(.unprose) li': {
          paddingLeft: em(22, 14),
        },
        'ol:not(.unprose) li::before': {
          left: '0',
        },
        'ul:not(.unprose) li': {
          paddingLeft: em(22, 14),
        },
        'ul:not(.unprose) li::before': {
          height: em(5, 14),
          width: em(5, 14),
          top: `calc(${em(24 / 2, 14)} - ${em(2.5, 14)})`,
          left: em(3, 14),
        },
        '> ul:not(.unprose) li p': {
          marginTop: em(8, 14),
          marginBottom: em(8, 14),
        },
        '> ul:not(.unprose) li > *:first-child': {
          marginTop: em(16, 14),
        },
        '> ul:not(.unprose) li > *:last-child': {
          marginBottom: em(16, 14),
        },
        '> ol:not(.unprose) li > *:first-child': {
          marginTop: em(16, 14),
        },
        '> ol:not(.unprose) li > *:last-child': {
          marginBottom: em(16, 14),
        },
        'ul:not(.unprose) ul, ul ol, ol ul, ol ol': {
          marginTop: em(8, 14),
          marginBottom: em(8, 14),
        },
        'hr:not(.unprose)': {
          marginTop: em(40, 14),
          marginBottom: em(40, 14),
        },
        'hr + *:not(.unprose)': {
          marginTop: '0',
        },
        'h2 + *:not(.unprose)': {
          marginTop: '0',
        },
        'h3 + *:not(.unprose)': {
          marginTop: '0',
        },

        'h4 + *:not(.unprose)': {
          marginTop: '0',
        },
        'table:not(.unprose)': {
          fontSize: em(12, 14),
          lineHeight: round(18 / 12),
        },
        'table:not(.unprose) thead th': {
          paddingRight: em(12, 12),
          paddingBottom: em(8, 12),
          paddingLeft: em(12, 12),
        },
        'table:not(.unprose) thead th:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) thead th:last-child': {
          paddingRight: '0',
        },
        'table:not(.unprose) tbody td': {
          paddingTop: em(8, 12),
          paddingRight: em(12, 12),
          paddingBottom: em(8, 12),
          paddingLeft: em(12, 12),
        },
        'table:not(.unprose) tbody td:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) tbody td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  lg: {
    css: [
      {
        fontSize: rem(18),
        lineHeight: round(32 / 18),
        'p:not(.unprose)': {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
        },
        '[class~="lead"]:not(.unprose)': {
          fontSize: em(22, 18),
          lineHeight: round(32 / 22),
          marginTop: em(24, 22),
          marginBottom: em(24, 22),
        },
        'blockquote:not(.unprose)': {
          marginTop: em(40, 24),
          marginBottom: em(40, 24),
          paddingLeft: em(24, 24),
        },
        'h1:not(.unprose)': {
          fontSize: em(48, 18),
          marginTop: '0',
          marginBottom: em(40, 48),
          lineHeight: round(48 / 48),
        },
        'h2:not(.unprose)': {
          fontSize: em(30, 18),
          marginTop: em(56, 30),
          marginBottom: em(32, 30),
          lineHeight: round(40 / 30),
        },
        'h3:not(.unprose)': {
          fontSize: em(24, 18),
          marginTop: em(40, 24),
          marginBottom: em(16, 24),
          lineHeight: round(36 / 24),
        },
        'h4:not(.unprose)': {
          marginTop: em(32, 18),
          marginBottom: em(8, 18),
          lineHeight: round(28 / 18),
        },
        '*:not(.unprose) img': {
          marginTop: em(32, 18),
          marginBottom: em(32, 18),
        },
        'video:not(.unprose)': {
          marginTop: em(32, 18),
          marginBottom: em(32, 18),
        },
        'figure:not(.unprose)': {
          marginTop: em(32, 18),
          marginBottom: em(32, 18),
        },
        'figure:not(.unprose) > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        'figure:not(.unprose) figcaption': {
          fontSize: em(16, 18),
          lineHeight: round(24 / 16),
          marginTop: em(16, 16),
        },
        'p:not(.unprose) > code': {
          fontSize: em(16, 18),
        },
        'h2:not(.unprose) code': {
          fontSize: em(26, 30),
        },
        'h3:not(.unprose) code': {
          fontSize: em(21, 24),
        },
        'pre:not(.unprose)': {
          fontSize: em(16, 18),
          lineHeight: round(28 / 16),
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
          borderRadius: rem(6),
          paddingTop: em(16, 16),
          paddingRight: em(24, 16),
          paddingBottom: em(16, 16),
          paddingLeft: em(24, 16),
        },
        'ol:not(.unprose)': {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
        },
        'ul:not(.unprose)': {
          marginTop: em(24, 18),
          marginBottom: em(24, 18),
        },
        'ul:not(.unprose) li': {
          marginTop: em(12, 18),
          marginBottom: em(12, 18),
        },
        'ol:not(.unprose) li': {
          paddingLeft: em(30, 18),
        },
        'ol:not(.unprose) li::before': {
          left: '0',
        },
        'ul:not(.unprose) li': {
          paddingLeft: em(30, 18),
        },
        'ul:not(.unprose) li::before': {
          width: em(6, 18),
          height: em(6, 18),
          top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
          left: em(4, 18),
        },
        '> ul:not(.unprose) li p': {
          marginTop: em(16, 18),
          marginBottom: em(16, 18),
        },
        '> ul:not(.unprose) li > *:first-child': {
          marginTop: em(24, 18),
        },
        '> ul:not(.unprose) li > *:last-child': {
          marginBottom: em(24, 18),
        },
        '> ol:not(.unprose) li > *:first-child': {
          marginTop: em(24, 18),
        },
        '> ol:not(.unprose) li > *:last-child': {
          marginBottom: em(24, 18),
        },
        'ul:not(.unprose) ul, ul ol, ol ul, ol ol': {
          marginTop: em(16, 18),
          marginBottom: em(16, 18),
        },
        'hr:not(.unprose)': {
          marginTop: em(56, 18),
          marginBottom: em(56, 18),
        },
        'hr + *:not(.unprose)': {
          marginTop: '0',
        },
        'h2 + *:not(.unprose)': {
          marginTop: '0',
        },
        'h3 + *:not(.unprose)': {
          marginTop: '0',
        },

        'h4 + *:not(.unprose)': {
          marginTop: '0',
        },
        'table:not(.unprose)': {
          fontSize: em(16, 18),
          lineHeight: round(24 / 16),
        },
        'table:not(.unprose) thead th': {
          paddingRight: em(12, 16),
          paddingBottom: em(12, 16),
          paddingLeft: em(12, 16),
        },
        'table:not(.unprose) thead th:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) thead th:last-child': {
          paddingRight: '0',
        },
        'table:not(.unprose) tbody td': {
          paddingTop: em(12, 16),
          paddingRight: em(12, 16),
          paddingBottom: em(12, 16),
          paddingLeft: em(12, 16),
        },
        'table:not(.unprose) tbody td:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) tbody td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  xl: {
    css: [
      {
        fontSize: rem(20),
        lineHeight: round(36 / 20),
        'p:not(.unprose)': {
          marginTop: em(24, 20),
          marginBottom: em(24, 20),
        },
        '[class~="lead"]:not(.unprose)': {
          fontSize: em(24, 20),
          lineHeight: round(36 / 24),
          marginTop: em(24, 24),
          marginBottom: em(24, 24),
        },
        'blockquote:not(.unprose)': {
          marginTop: em(48, 30),
          marginBottom: em(48, 30),
          paddingLeft: em(32, 30),
        },
        'h1:not(.unprose)': {
          fontSize: em(56, 20),
          marginTop: '0',
          marginBottom: em(48, 56),
          lineHeight: round(56 / 56),
        },
        'h2:not(.unprose)': {
          fontSize: em(36, 20),
          marginTop: em(56, 36),
          marginBottom: em(32, 36),
          lineHeight: round(40 / 36),
        },
        'h3:not(.unprose)': {
          fontSize: em(30, 20),
          marginTop: em(48, 30),
          marginBottom: em(20, 30),
          lineHeight: round(40 / 30),
        },
        'h4:not(.unprose)': {
          marginTop: em(36, 20),
          marginBottom: em(12, 20),
          lineHeight: round(32 / 20),
        },
        '*:not(.unprose) img': {
          marginTop: em(40, 20),
          marginBottom: em(40, 20),
        },
        'video:not(.unprose)': {
          marginTop: em(40, 20),
          marginBottom: em(40, 20),
        },
        'figure:not(.unprose)': {
          marginTop: em(40, 20),
          marginBottom: em(40, 20),
        },
        'figure:not(.unprose) > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        'figure:not(.unprose) figcaption': {
          fontSize: em(18, 20),
          lineHeight: round(28 / 18),
          marginTop: em(18, 18),
        },
        'p:not(.unprose) > code': {
          fontSize: em(18, 20),
        },
        'h2:not(.unprose) code': {
          fontSize: em(31, 36),
        },
        'h3:not(.unprose) code': {
          fontSize: em(27, 30),
        },
        'pre:not(.unprose)': {
          fontSize: em(18, 20),
          lineHeight: round(32 / 18),
          marginTop: em(36, 18),
          marginBottom: em(36, 18),
          borderRadius: rem(8),
          paddingTop: em(20, 18),
          paddingRight: em(24, 18),
          paddingBottom: em(20, 18),
          paddingLeft: em(24, 18),
        },
        'ol:not(.unprose)': {
          marginTop: em(24, 20),
          marginBottom: em(24, 20),
        },
        'ul:not(.unprose)': {
          marginTop: em(24, 20),
          marginBottom: em(24, 20),
        },
        'ul:not(.unprose) li': {
          marginTop: em(12, 20),
          marginBottom: em(12, 20),
        },
        'ol:not(.unprose) li': {
          paddingLeft: em(36, 20),
        },
        'ol:not(.unprose) li::before': {
          left: '0',
        },
        'ul:not(.unprose) li': {
          paddingLeft: em(36, 20),
        },
        'ul:not(.unprose) li::before': {
          width: em(7, 20),
          height: em(7, 20),
          top: `calc(${em(36 / 2, 20)} - ${em(3.5, 20)})`,
          left: em(5, 20),
        },
        '> ul:not(.unprose) li p': {
          marginTop: em(16, 20),
          marginBottom: em(16, 20),
        },
        '> ul:not(.unprose) li > *:first-child': {
          marginTop: em(24, 20),
        },
        '> ul:not(.unprose) li > *:last-child': {
          marginBottom: em(24, 20),
        },
        '> ol:not(.unprose) li > *:first-child': {
          marginTop: em(24, 20),
        },
        '> ol:not(.unprose) li > *:last-child': {
          marginBottom: em(24, 20),
        },
        'ul:not(.unprose) ul, ul ol, ol ul, ol ol': {
          marginTop: em(16, 20),
          marginBottom: em(16, 20),
        },
        'hr:not(.unprose)': {
          marginTop: em(56, 20),
          marginBottom: em(56, 20),
        },
        'hr + *:not(.unprose)': {
          marginTop: '0',
        },
        'h2 + *:not(.unprose)': {
          marginTop: '0',
        },
        'h3 + *:not(.unprose)': {
          marginTop: '0',
        },

        'h4 + *:not(.unprose)': {
          marginTop: '0',
        },
        'table:not(.unprose)': {
          fontSize: em(18, 20),
          lineHeight: round(28 / 18),
        },
        'table:not(.unprose) thead th': {
          paddingRight: em(12, 18),
          paddingBottom: em(16, 18),
          paddingLeft: em(12, 18),
        },
        'table:not(.unprose) thead th:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) thead th:last-child': {
          paddingRight: '0',
        },
        'table:not(.unprose) tbody td': {
          paddingTop: em(16, 18),
          paddingRight: em(12, 18),
          paddingBottom: em(16, 18),
          paddingLeft: em(12, 18),
        },
        'table:not(.unprose) tbody td:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) tbody td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  '2xl': {
    css: [
      {
        fontSize: rem(24),
        lineHeight: round(40 / 24),
        'p:not(.unprose)': {
          marginTop: em(32, 24),
          marginBottom: em(32, 24),
        },
        '[class~="lead"]:not(.unprose)': {
          fontSize: em(30, 24),
          lineHeight: round(44 / 30),
          marginTop: em(32, 30),
          marginBottom: em(32, 30),
        },
        'blockquote:not(.unprose)': {
          marginTop: em(64, 36),
          marginBottom: em(64, 36),
          paddingLeft: em(40, 36),
        },
        'h1:not(.unprose)': {
          fontSize: em(64, 24),
          marginTop: '0',
          marginBottom: em(56, 64),
          lineHeight: round(64 / 64),
        },
        'h2:not(.unprose)': {
          fontSize: em(48, 24),
          marginTop: em(72, 48),
          marginBottom: em(40, 48),
          lineHeight: round(52 / 48),
        },
        'h3:not(.unprose)': {
          fontSize: em(36, 24),
          marginTop: em(56, 36),
          marginBottom: em(24, 36),
          lineHeight: round(44 / 36),
        },
        'h4:not(.unprose)': {
          marginTop: em(40, 24),
          marginBottom: em(16, 24),
          lineHeight: round(36 / 24),
        },
        '*:not(.unprose) img': {
          marginTop: em(48, 24),
          marginBottom: em(48, 24),
        },
        'video:not(.unprose)': {
          marginTop: em(48, 24),
          marginBottom: em(48, 24),
        },
        'figure:not(.unprose)': {
          marginTop: em(48, 24),
          marginBottom: em(48, 24),
        },
        'figure:not(.unprose) > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        'figure:not(.unprose) figcaption': {
          fontSize: em(20, 24),
          lineHeight: round(32 / 20),
          marginTop: em(20, 20),
        },
        'p:not(.unprose) > code': {
          fontSize: em(20, 24),
        },
        'h2:not(.unprose) code': {
          fontSize: em(42, 48),
        },
        'h3:not(.unprose) code': {
          fontSize: em(32, 36),
        },
        'pre:not(.unprose)': {
          fontSize: em(20, 24),
          lineHeight: round(36 / 20),
          marginTop: em(40, 20),
          marginBottom: em(40, 20),
          borderRadius: rem(8),
          paddingTop: em(24, 20),
          paddingRight: em(32, 20),
          paddingBottom: em(24, 20),
          paddingLeft: em(32, 20),
        },
        'ol:not(.unprose)': {
          marginTop: em(32, 24),
          marginBottom: em(32, 24),
        },
        'ul:not(.unprose)': {
          marginTop: em(32, 24),
          marginBottom: em(32, 24),
        },
        'ul:not(.unprose) li': {
          marginTop: em(12, 24),
          marginBottom: em(12, 24),
        },
        'ol:not(.unprose) li': {
          paddingLeft: em(40, 24),
        },
        'ol:not(.unprose) li::before': {
          left: '0',
        },
        'ul:not(.unprose) li': {
          paddingLeft: em(40, 24),
        },
        'ul:not(.unprose) li::before': {
          width: em(8, 24),
          height: em(8, 24),
          top: `calc(${em(40 / 2, 24)} - ${em(4, 24)})`,
          left: em(6, 24),
        },
        '> ul:not(.unprose) li p': {
          marginTop: em(20, 24),
          marginBottom: em(20, 24),
        },
        '> ul:not(.unprose) li > *:first-child': {
          marginTop: em(32, 24),
        },
        '> ul:not(.unprose) li > *:last-child': {
          marginBottom: em(32, 24),
        },
        '> ol:not(.unprose) li > *:first-child': {
          marginTop: em(32, 24),
        },
        '> ol:not(.unprose) li > *:last-child': {
          marginBottom: em(32, 24),
        },
        'ul:not(.unprose) ul, ul ol, ol ul, ol ol': {
          marginTop: em(16, 24),
          marginBottom: em(16, 24),
        },
        'hr:not(.unprose)': {
          marginTop: em(72, 24),
          marginBottom: em(72, 24),
        },
        'hr + *:not(.unprose)': {
          marginTop: '0',
        },
        'h2 + *:not(.unprose)': {
          marginTop: '0',
        },
        'h3 + *:not(.unprose)': {
          marginTop: '0',
        },

        'h4 + *:not(.unprose)': {
          marginTop: '0',
        },
        'table:not(.unprose)': {
          fontSize: em(20, 24),
          lineHeight: round(28 / 20),
        },
        'table:not(.unprose) thead th': {
          paddingRight: em(12, 20),
          paddingBottom: em(16, 20),
          paddingLeft: em(12, 20),
        },
        'table:not(.unprose) thead th:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) thead th:last-child': {
          paddingRight: '0',
        },
        'table:not(.unprose) tbody td': {
          paddingTop: em(16, 20),
          paddingRight: em(12, 20),
          paddingBottom: em(16, 20),
          paddingLeft: em(12, 20),
        },
        'table:not(.unprose) tbody td:first-child': {
          paddingLeft: '0',
        },
        'table:not(.unprose) tbody td:last-child': {
          paddingRight: '0',
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },

  // Add color modifiers
  ...Object.entries(theme('colors')).reduce((reduced, [color, values]) => {
    if (!isUsableColor(color, values)) {
      return reduced
    }

    return {
      ...reduced,
      [color]: {
        css: [
          {
            '*:not(.unprose) a': { color: values[600] },
            '*:not(.unprose) a code': { color: values[600] },
          },
        ],
      },
    }
  }, {}),
})

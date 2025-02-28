export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          let theme = window.localStorage.getItem('theme')
          if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          }
          document.documentElement.classList.add(theme)
        `,
      }}
    />
  )
} 
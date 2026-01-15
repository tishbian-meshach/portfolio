import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@/components/theme-provider"
import { CursorFollower } from "@/components/ui/cursor-follower"
import { LoadingProvider } from "@/components/loading-provider"
import LoadingScreen from "@/components/loading-screen"
import { LoadingWrapper } from "@/components/loading-wrapper"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <LoadingWrapper loadingComponent={<LoadingScreen />}>
          <CursorFollower />
          <App />
        </LoadingWrapper>
      </ThemeProvider>
    </LoadingProvider>
  </React.StrictMode>,
)

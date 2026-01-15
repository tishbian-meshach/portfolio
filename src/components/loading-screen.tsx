"use client"

import React from 'react'
import styled from 'styled-components'
import { useLoading } from './loading-provider'

const LoadingScreen = () => {
  const { loadingItems, setIsLoading } = useLoading()
  const [progress, setProgress] = React.useState(0)
  const [loadingText, setLoadingText] = React.useState('Initializing')

  React.useEffect(() => {
    // Simulated loading text cycle
    const texts = [
      'Simulating environment', 
      'Loading assets', 
      'Initializing graphics', 
      'Preparing interface',
      'Mounting components',
      'Optimizing performance',
      'Starting experience'
    ]
    
    let textIndex = 0
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length
      setLoadingText(texts[textIndex])
    }, 250) // Change text every 250ms

    // Simulated progress bar (fast then slow then fast)
    let currentProgress = 0
    const progressInterval = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(progressInterval)
        clearInterval(textInterval)
        // Wait a tiny bit at 100% then hide loading
        setTimeout(() => setIsLoading(false), 500)
        return
      }

      // Non-linear progress simulation
      const increment = Math.random() * (currentProgress > 70 ? 2 : 5) 
      currentProgress = Math.min(currentProgress + increment, 100)
      setProgress(currentProgress)
    }, 50) 

    return () => {
      clearInterval(textInterval)
      clearInterval(progressInterval)
    }
  }, [setIsLoading])

  return (
    <StyledWrapper>
      <div className="loading-overlay">
        <div className="loading-container">
          <div className="loader">
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
          </div>
         <div className="debug-info">
            Loading: {loadingText}
          </div>
          <div className="progress-container -mt-6">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="progress-text">{Math.round(progress)}%</div>
          </div>
          
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backdrop-filter: blur(10px);
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .loader {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    animation: rotateLoader 2s cubic-bezier(0.6, 0.2, 0.1, 1) infinite;
  }

  .cube {
    width: 35px;
    height: 35px;
    background: linear-gradient(145deg, #00e4ff, #006aff);
    border-radius: 12px;
    box-shadow:
      0 0 12px rgba(0, 228, 255, 0.4),
      inset 0 0 8px rgba(0, 228, 255, 0.6),
      inset 3px 3px 8px rgba(0, 50, 120, 0.2);
    animation: pulse 1.6s ease-in-out infinite;
    transition: transform 0.4s ease;
  }

  .loading-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #00e4ff;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .dots {
    display: flex;
    gap: 2px;
  }

  .dots span {
    animation: dotPulse 1.5s ease-in-out infinite;
  }

  .dots span:nth-child(1) { animation-delay: 0s; }
  .dots span:nth-child(2) { animation-delay: 0.2s; }
  .dots span:nth-child(3) { animation-delay: 0.4s; }

  .progress-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    width: 200px;
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(0, 228, 255, 0.2);
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #00e4ff, #006aff);
    border-radius: 2px;
    transition: width 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 228, 255, 0.3);
  }

  .progress-text {
    color: #00e4ff;
    font-size: 0.6rem;
    font-weight: 300;
  }

  .debug-info {
    color: #fff;
    font-size: 0.8rem;
    font-weight: 200;
    text-align: center;
    max-width: 300px;
    margin-top: 1rem;
  
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow:
        0 0 15px rgba(0, 228, 255, 0.7),
        inset 0 0 8px rgba(0, 228, 255, 0.6);
    }
    50% {
      transform: scale(1.3);
      box-shadow:
        0 0 25px rgba(0, 228, 255, 1),
        inset 0 0 12px rgba(0, 228, 255, 1);
    }
  }

  @keyframes rotateLoader {
    0% { transform: rotate(45deg); }
    50% { transform: rotate(225deg); }
    100% { transform: rotate(405deg); }
  }

  @keyframes dotPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  .cube:nth-child(1) { animation-delay: 0s; }
  .cube:nth-child(2) { animation-delay: 0.2s; }
  .cube:nth-child(3) { animation-delay: 0.4s; }
  .cube:nth-child(4) { animation-delay: 0.6s; }
`

export default LoadingScreen
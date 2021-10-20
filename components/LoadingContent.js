import React from 'react'
import { ScreenContainer } from './ScreenContainer'
import Article  from './Article'

export function LoadingContent() {
  return (
    <ScreenContainer>
      <Article style={{ textAlign: 'center', overflow: 'hidden' }}>
        <h1>We are loading content</h1>
        <p style={{ textAlign: 'center', margin: '20px auto' }}>
         We promise it's worth the wait.
        </p>
        <div style={{display: "flex", justifyContent:"center"}}>
          <img
            alt="Tina is happy"
            src="https://res.cloudinary.com/forestry-demo/image/upload/v1628023277/tina-io/query-content.jpg"
            width="400"
          />
          </div>
      </Article>
    </ScreenContainer>
  )
}

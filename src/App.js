import React from 'react';
import styled from 'styled-components';



const App = () => {
  return (
    <AppContainer>
      <CardsContainter>
        App
      </CardsContainter>
    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`
const CardsContainter = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  border-style: solid;
  border-color:  red;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`
/**
 * node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"

export type TopProps = {
  count: number
  handleIncrement: () => void
  handleDecrement: () => void
}

const Top: FC<TopProps> = props => {
  const {
    count,
    handleIncrement,
    handleDecrement,
  } = props

  return (
    <CounterWrapper>
      <CountButton onClick={handleDecrement}>-</CountButton>
      <StyledText>{count}</StyledText>
      <CountButton onClick={handleIncrement}>+</CountButton>
    </CounterWrapper>
  )
}

const CounterWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledText = styled.div`
  color: red;
  font-size: 30px;
  font-weight: 600; 
  margin-left: 20px;
  margin-right: 20px;
`

const CountButton = styled.button`
  font-size: 20px;
`

export default Top

/**
 * node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"

const Top: FC = props => (
  <StyledText>hoge!</StyledText>
)

const StyledText = styled.div`
  color: red;
  font-size: 30px;
  font-weight: 600; 
`

export default Top

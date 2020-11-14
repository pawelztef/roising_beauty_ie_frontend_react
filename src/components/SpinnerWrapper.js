import React from "react"
import Spinner from './Spinner'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

function spinnerWrapper(props) {
  return <Wrapper> <Spinner loading={true} /> </Wrapper>
}

export default spinnerWrapper

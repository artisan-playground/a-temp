import React from 'react'
import styled from 'styled-components'


const ListComponents = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    margin: 15px 0 15px 15px;
    justify-content: right;
`

const CompoLeft = styled.div`
    background-color: #66CDAA;
    width: 40%;
    height: 100px;
    border-radius: 30px 0 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
`

const CompoRight = styled.div`
    background-color: #fff;
    width: 50%;
    height: 100px;
    border-radius: 0 30px 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 30px;
        margin: 5px;
    font-weight: bold;
    }
    p {
        font-size: 15px;
    }
`

const Value = styled.div`
  font-size: 25px;
  font-weight: bold;
  h1 {
    font-size: 15px;
  }
`

const TempBox = ({Hander, Temp}) => {
    return (
    	<ListComponents>
			<CompoLeft>
				{Hander}
			</CompoLeft>
			<CompoRight>
				{Temp}
			</CompoRight>
        </ListComponents>
    )
}

export default TempBox

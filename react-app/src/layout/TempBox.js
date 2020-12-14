import React from 'react'
import styled from 'styled-components'


const ListComponents = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    margin: 15px 0 15px 15px;
    justify-content: right;
`

const CompoLeft = styled.div`
    background-color: rgba(150, 231, 247, 1);
    width: 40%;
    height: 14vh;
    border-radius: 36px 0 0 36px;
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
    height: 14vh;
    border-radius: 0 36px 36px 0;
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
				{Hander} °C
			</CompoLeft>
			<CompoRight>
				{Temp} °C
			</CompoRight>
        </ListComponents>
    )
}

export default TempBox

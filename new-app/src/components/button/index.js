import React from 'react'

class Button extends React.Component{
    render(){
       var styleButton = {
            background : 'gray'

        }
        return(
            <button style = {styleButton}>кнопка</button>
        )
    }
}
export default Button
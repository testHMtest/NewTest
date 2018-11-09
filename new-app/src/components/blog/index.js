import React from 'react'

class Blog extends React.Component{
    render(){
       var styleBlog = {
            width : 200,
            height : 100,
            background : 'blue'

        }
        return(
            <div style = {styleBlog}>
            Click Me
            
            </div>
        )
    }
}
export default Blog
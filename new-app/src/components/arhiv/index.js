import React from 'react'
import { Blog } from './components';
class Arhiv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arhiv : [
            'Строка номер 1',
            'Строка номер 1',
            'Строка номер 1',
            'Строка номер 1',
            'Строка номер 1',
            'Строка номер 1'
            ]
        }
    }
    render(){

        return(
            <div>
                {
                    this.state.arhiv.map(function(item,i){
                        return (<Blog key = {i}>{item}</Blog>);
                    })
                }

            </div>

        )
    }
}

export default Arhiv

// class Arhiv extends React.Component{
//     constructor(props){
//     super(props)
//     this.state = arhiv : [
//     'Строка номер 1',
//     'Строка номер 1',
//     'Строка номер 1',
//     'Строка номер 1',
//     'Строка номер 1',
//     'Строка номер 1',



// ]
//     }
//     render(){

//         return(

//         )
//     }
// }
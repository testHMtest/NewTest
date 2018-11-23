import React, { Component } from 'react';
import './App.css';
// import { Button } from './components';
// import { Input } from './components';
// import { Blog } from './components';
// import { Arhiv } from './components';

class Blog extends React.Component{
    constructor() {
        super();
        this.state = {edit: false};
    }

    edit () {
        this.setState({edit: true});
    }

    save () {
        this.props.updt(this.refs.etoTxt.value, this.props.index);
        this.setState ({edit: false});
    }

    rm () {
        this.props.delt(this.props.index);
    }
    timeAndDate () {
    return(
        <div>
            {new Date().toLocaleDateString()}
        </div>
    )
    }



    rendNorm () {
        var styleBlog = {
            width : 200,
            height : 100,
            margin :10,
            background : 'blue',
            
  
        }
        return(
            <div style = {styleBlog}>
            {this.props.children}
            <button onClick={this.edit.bind (this)}>Редактировать</button>
            <button onClick={this.rm.bind (this)}>Удалить</button>
            {this.timeAndDate()}
            </div>
        )

    }

    rendEdit () {
        var styleBlog = {
            width : 200,
            height : 100,
            margin :10,
            background : 'blue',
           
  
        }
        return(
            <div style = {styleBlog}>
            
            <textarea ref="etoTxt" defaultValue={this.props.children}></textarea>
            <button onClick={this.save.bind (this)}>Сохранить</button>
            </div>
        )

    }

  rendBlog () {
    return (
      <div>

      </div>
    )
  }

  render(){

      if (this.state.edit) {
        return this.rendEdit ();
      } else {
        return this.rendNorm ();
      }
      
          
        //   <div style = {styleBlog}>
        //   {this.props.children}
        //   <button>Редактировать</button>
        //   <button>Удалить</button>
        //   </div>
      
  }
}

// class Arhiv extends React.Component{
//   constructor(props){
//       super(props);
//       this.state = {
//           arhiv : [
//           'Строка номер 1',
//           'Строка номер 2',
//           'Строка номер 3',
//           'Строка номер 4',
//           'Строка номер 5',
//           'Строка номер 6'
//           ]
//       }
//   }


//   updateText (text, i) {
//     var arr = this.state.arhiv;
//     arr[i]=text;
//     this.setState ({arhiv: arr})
//     } 

//   eachArh (item,i){
//     return (<Blog key = {i} index={i} updt={this.updateText} delt={this.deleteBlg}>
//         {item}
//         </Blog>
//         );
//   }

//   deleteBlg (i) {
//     var arr =this.state.arhiv;
//     arr.splice(i, 1);
//     this.setState ({arhiv: arr})
//     }

//   render(){

//       return(
//           <div>
              
//                  {this.state.arhiv.map(this.eachArh)}
                  

//           </div>

//       )
//   }
// }

class NewBlog extends React.Component{
    constructor() {
        super();
        this.state = {edit: false};
    }

    edit () {
        this.setState({edit: true});
    }

    // save () {
    //     this.props.updt(this.refs.etoTxt.value, this.props.index);
    //     this.setState ({edit: false});
    // }

    rm () {
        this.props.delt(this.props.index, this.props.id);
    }
    // timeAndDate () {
    // return(
    //     <div>
    //         {new Date().toLocaleDateString()}
    //     </div>
    // )
    // }



    rendNorm () {
        var styleBlog = {
            width : 220,
            height : 150,
            margin :10,
            background : 'blue',
            // marginLeft : 500
  
        }
        return(
            <div style = {styleBlog}>
            {/* {this.props.item.id}<br/> */}
            <b>{this.props.item.zagalovok}</b><br/>
            {this.props.item.sodrezh}<br/>
            {this.props.item.addData}<br/>
            {this.props.item.addTime}<br/>
            <button >Редактировать</button>
            <button onClick={this.rm.bind (this)}>Удалить</button>
            </div>
        )

    }

    rendEdit () {
        var styleBlog = {
            width : 200,
            height : 100,
            margin :10,
            background : 'blue',
            // marginLeft : 500
  
        }
        return(
            <div style = {styleBlog}>
            
            <textarea ref="etoTxt" ></textarea>
            <button >Сохранить</button>
            </div>
        )

    }

  rendBlog () {
    return (
      <div>

      </div>
    )
  }

  render(){

      if (this.state.edit) {
        return this.rendEdit ();
      } else {
        return this.rendNorm ();
      }
      
          
        //   <div style = {styleBlog}>
        //   {this.props.children}
        //   <button>Редактировать</button>
        //   <button>Удалить</button>
        //   </div>
      
  }
}

class Input extends React.Component{
    
  render(){
      return(
          <div>
               <input ref="newText" type="text"/>
          </div>
      )
  }
}

class Button extends React.Component{

  render(){
     var styleButton = {
          background : 'gray'

      }
      return(
          <button  style = {styleButton}></button>
      )
  }
}


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            arhiv : [
            'Строка номер 1',
            'Строка номер 2'
            ],
        valueCh : '',
        newValueCh : '',
        zagl : '',
        arrObj : [],
        };
        this.updateText = this.updateText.bind(this);
        this.deleteBlg = this.deleteBlg.bind(this)
        
    }
  
  
     updateText = (text, i) => {
      var arr = this.state.arhiv;
      arr[i]=text;
      this.setState ({arhiv: arr});
      } 
  
    eachArh (item,i){
      return (<Blog key = {i} index={i} updt={this.updateText} delt={this.deleteBlg}>
          {item}
          </Blog>
          );
    }
  
    deleteBlg (i) {
      var arr =this.state.arhiv;
      arr.splice(i, 1);
      this.setState ({arhiv: arr})
      }

    addBlog (text) {
        var arr = this.state.arhiv;
        arr.push (text);
        this.setState ({arhiv: arr});
    }
    inpChange = (e) => {
        this.setState ({valueCh: e.target.value})
    }

    newZagl = (e) => {
        this.setState ({zagl: e.target.value})
    }

    newInpChg = (e) => {
        this.setState ({newValueCh: e.target.value})
    }

    newAddBlog =(zag, text) => {
        var newId = Math.floor(Math.random()*(100000000-1))+1;
        var arr = this.state.arrObj;
        var obj = {
            id : newId,
            zagalovok : zag,
            sodrezh : text,
            addData : new Date().toLocaleDateString(),
            addTime : new Date().toLocaleTimeString(),
        }
        arr.push(obj);
        this.setState ({arrObj : arr});
        var seriaObj= JSON.stringify(obj);
        localStorage.setItem(newId, seriaObj);
        console.log(this.state.arrObj)
        return(console.log(obj))
    }

    parsJson = () => {
        
        var arr = this.state.arrObj;
        for(var id in localStorage) {
            if (id.length == 8) {
                // console.log(JSON.parse(localStorage.getItem(id)))
                
                 arr.push (JSON.parse(localStorage.getItem(id)))
            }
        };
        this.setState ({arrObj : arr});
        console.log(this.state.arrObj)
        
         
    }

    NewEachArh (item,i){
        return (<NewBlog key = {i} index={i} id={item.id} item={item} delt={this.newDelBlg}>
            {item}
            </NewBlog>
            );
    }

    newDelBlg (i, id) {
        // var arrr = this.state.arrObj;
        // arr.splice(i, 1);
        // this.setState ({arhiv: arr})
        localStorage.removeItem(id)
        }

    // rendNewBlog = () => {
    //     for (var id in this.state.arrObj) {
    //         console.log(this.state.arrObj)
    //         return ( <div>
    //             <h3>{id.zagalovok}</h3>
                
    //         </div>             
               

    //         )
    //     }
    // }
    componentDidMount() {
        this.parsJson()
    }

 


  render() {
    var otstup = {
        marginLeft : 500


    }

    
    return <div>
                {/* <Input></Input> */}
                <div style={otstup}>
                    <input onChange={(e) => this.newZagl(e)} type="text"/>
                    <input onChange={(e) => this.newInpChg(e)} type="text"/> 
                    <button onClick={this.newAddBlog.bind(this, this.state.zagl, this.state.newValueCh)}>addick</button>
                    {this.state.arrObj.map(this.NewEachArh.bind(this))}
                    {/* {this.newAddBlog('Test', 'Burger')} */}
                    
                    {/* {this.rendNewBlog()} */}
                </div>
                <div>
                    <input ref="newText" onChange={(e) => this.inpChange(e)} type="text"/>
                    <button onClick={this.addBlog.bind(this, this.state.valueCh)}>add</button>
                    {/* <Button>add</Button> */}
                    {/* <Blog>Text1</Blog>
                    <Blog>Txt1</Blog>
                    <Blog>Tet1</Blog> */}
                    {this.state.arhiv.map(this.eachArh.bind(this))}
                </div>
          </div>
  };
}

export default App;

// class App extends Component {


//   render() {
//     function createBlog() {
//       var st = {
//         width : 400,
//         height : 20,
//         background : 'gray'
//       };
      
//       return <div style={st}>блок</div>
//     };
    
//     return <div>
//       <Arhiv></Arhiv>
//       <Input></Input>
//       <Button onClick={console.log(1)}></Button>
//       <button onClick={createBlog}>dd</button>
//       <Blog></Blog>
//     </div>
//   };
// }
  

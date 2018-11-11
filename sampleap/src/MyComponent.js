import React from 'react'
import ChildComponent from './ChildComponent'
export default class MyComponent extends React.Component
{
   
    constructor()
    {
        super();
        this.state={
            Open:true
        }
        this.onclick = this.onclick.bind(this);
   }
    onclick()
    {
       
        this.setState({Open:!this.state.Open})
        console.log('clicked.')
        console.log('clicked.'+this.state.Open)
    }
    render()
    {
      
        return(
            <div>
            <p onClick={this.onclick} style={this.state.Open?Styles.Open:Styles.Close}>
            My Component</p>
            <ChildComponent></ChildComponent>
            </div>
        );  
                 
    }
    
}
const Styles={
    Open:{ 
        color:'Green',
        fontSize:80
 },
    Close:{
        color:'Red',
        fontSize:80

}
            
}
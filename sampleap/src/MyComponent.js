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
   componentWillMount()
   {
       console.log('Parent Component : componentWillMount');    
   }
   componentDidMount() {
    console.log('Parent Component : componentDidMount');
   }
    onclick()
    {
       
        this.setState({Open:!this.state.Open})
        console.log('clicked.')
        console.log('clicked.'+this.state.Open)
    }
    render(){
        return(
            <div>
            <p onClick={this.onclick} style={this.state.Open?Styles.Open:Styles.Close}>
            My Component</p>
            <ChildComponent></ChildComponent>
            </div>
        );                 
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('Parent Component : componentDidUpdate')
    }
    componentWillUnmount()
    {
        console.log('Parent Component : componentWillUnmount')
    }
    
}
const Styles={
    Open:{ 
        color:'Green',
        fontSize:30
 },
    Close:{
        color:'Red',
        fontSize:30

}
            
}
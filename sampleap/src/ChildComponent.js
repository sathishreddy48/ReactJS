import React from 'react'
export default class ChildComponent extends React.Component
{
    constructor(){
        super();
        this.state={
            Open:true
        }
        this.onclick = this.onclick.bind(this);
   }
   componentWillMount()
   {
       console.log('Child Component : componentWillMount');    
   }
   componentDidMount() {
    console.log('Child Component : componentDidMount');
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
            Child Component</p></div>
        );  
                 
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('Child Component : componentDidUpdate')
    }
    componentWillUnmount()
    {
        console.log('Child Component : componentWillUnmount')
    }
    
}
const Styles={
    Open:{ 
        color:'Green',
        fontSize:30,
       // display:'block'
 },
    Close:{
        color:'Red',
        fontSize:30,
       // display:'none'

}
            
}
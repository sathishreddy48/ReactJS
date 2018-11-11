import React from 'react'
export default class ChildComponent extends React.Component
{
    constructor(){
        super();
        this.state={
            Open:true,
            cdata:{
                //movies:[id, title, releaseYear]
                movies :{ }
    
            },
            csample:''
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
         //fetch('/api/users/2')
         fetch('https://facebook.github.io/react-native/movies.json')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({cdata: responseJson.movies});
             //this.setState({Open:!this.state.Open})
         })      
        //  fetch('http://localhost:52776/Details/1')
        //  .then((response) => response.json())
        //  .then((responseJson) => {
        //      debugger;
        //    this.setState({sample: responseJson});
        //      //this.setState({Open:!this.state.Open})
        //  })
       
        this.setState({Open:!this.state.Open})
        console.log('clicked.')
        console.log('clicked.'+this.state.Open)
        console.log('data'+this.state.csample)
    }
    render()
    {
      
        return(
            <div>
            <p onClick={this.onclick} style={this.state.Open?Styles.Open:Styles.Close}>
            Child Component</p>
            <div>
              {/* {this.state.cdata.movies} */}
              {this.state.csample}
            </div>
            {/* {this.state.cdata.movies.map((item, index) => {
                 return <div key={index}>{item.title}</div>;
             })} */}
            </div>
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
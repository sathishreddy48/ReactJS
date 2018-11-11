import React from 'react'
import ChildComponent from './ChildComponent'
export default class MyComponent extends React.Component
{
   
    constructor()
    {
        super();
        this.state={
            Open:true,
            data:{ 
                description:'',
                //movies:[id, title, releaseYear]
                movies :{id:'',title:'',releaseYear:''} ,            
                title:''
            },
            sample:'',
            movies :[]
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
         //fetch('/api/users/2')
         fetch('https://facebook.github.io/react-native/movies.json')
         .then((response) => response.json())
         .then((responseJson) => {
             debugger;
           this.setState({movies: responseJson.movies});
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
        console.log('data'+this.state.movies)
        //console.log('data'+this.state.data.length)
    }
    render(){
        return(
            <div>
            <p onClick={this.onclick} style={this.state.Open?Styles.Open:Styles.Close}>
            My Component</p>
            <div>
              {/* {this.state.data.movies} */}
              {this.state.sample}
            </div>
            <ul>
            {this.state.movies.map(movie=><li key={movie.id}>{movie.title}</li> )}
            </ul>
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
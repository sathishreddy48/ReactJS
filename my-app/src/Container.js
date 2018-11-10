import React from 'react'
import FirstChild from './FirstChild'

export default class Container extends React.Component{

   
    constructor(props)
    {
        super(props)
        this.state={
            MessageFrom :'Container Message'
        }
    }
    Method(param)
    {
        if(!param)
        {
            param=this.state.MessageFrom;
        }
        this.setState({MessageFrom:param});
        console.log('Container : Method Called '+param);
    }
    componentWillMount()
    {
        console.log('Container : component WillMount');
        
    }
    componentDidMount() {
         // this.GetUpdatesfromDB();
         // this.interval = setInterval(() => this.GetUpdatesfromDB(), 30000);
         //  this.interval = setInterval(() => this.UpdateState, 1000);
         console.log('Container : componentDidMount');
     }
   
     shouldComponentUpdate(nextState) {
        console.log("Container : Previous value "+this.state.MessageFrom);
        console.log("Container : Current value "+nextState.MessageFrom);
        //console.log("Next Props "+nextProps.state)
          if(this.state.MessageFrom!==nextState.MessageFrom)
            {
                console.log("Container : State values are Changed ");
                return true;
            }
        else
            { 
                console.log("Container : State values are same ");
                return false;
            } 
     }

    render(){
        return <div >
                 <p>Top Level Container</p>
                     { this.state.MessageFrom}
                     {/* <button  onClick={this.Method.bind(this)}>Call local method</button> */}
                  <FirstChild></FirstChild>
                  <p>Top level Container Ends</p>
              </div>
    };
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('Container :  componentDidUpdate')
    }
    componentWillUnmount()
    {
        console.log('Container :  componentWillUnmount')
    }
}
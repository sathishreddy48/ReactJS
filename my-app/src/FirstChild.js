import React from 'react'
import ChildsChild from './ChildsChild'
export default class FirstChild extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state={
            MessageFrom :'First Child Message'
        }
    }
    Method(param)
    {
        if(!param)
        {
            param=this.state.MessageFrom;
        }
        this.setState({MessageFrom:param});
        console.log('FirstChild : Method Called '+param);
    }
    componentWillMount()
    {
        console.log('FirstChild : component WillMount');
        
    }
    componentDidMount() {
         // this.GetUpdatesfromDB();
         // this.interval = setInterval(() => this.GetUpdatesfromDB(), 30000);
         //  this.interval = setInterval(() => this.UpdateState, 1000);
         console.log('FirstChild : componentDidMount');
     }
   
     shouldComponentUpdate(nextState) {
        console.log("FirstChild : Previous value "+this.state.MessageFrom);
        console.log("FirstChild : Current value "+nextState.MessageFrom);
        //console.log("Next Props "+nextProps.state)
          if(this.state.MessageFrom!==nextState.MessageFrom)
            {
                console.log("FirstChild : State values are Changed ");
                return true;
            }
        else
            { 
                console.log("FirstChild : State values are same ");
                return false;
            } 
     }
    render(){
        const styles = {
            FirstChild: {
                 backgroundColor:"red"
            }
        };
        return <div style={styles.FirstChild}>
                    <p>First Child</p>
                     { this.state.MessageFrom}
                     {/* <button   onClick={this.Method.bind(this)}>Call local method</button> */}
                     <ChildsChild></ChildsChild>
                     <p>First child Area ends</p>
               </div>
    };
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('FirstChild :  componentDidUpdate')
    }
    componentWillUnmount()
    {
        console.log('FirstChild :  componentWillUnmount')
    }
}

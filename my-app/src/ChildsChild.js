import React,{Component} from 'react'
class ChildsChild extends Component{
   
    constructor(props)
    {
        super(props)
        this.state={
            MessageFrom :'Childs Child Message'
        }
    }
    Method(param)
    {
        if(!param)
        {
            param=this.state.MessageFrom;
        }
        this.setState({MessageFrom:param});
        console.log('ChildsChild : Method Called '+param);
    }
    componentWillMount()
    {
        console.log('ChildsChild : component WillMount');
        
    }
    componentDidMount() {
         // this.GetUpdatesfromDB();
         // this.interval = setInterval(() => this.GetUpdatesfromDB(), 30000);
         //  this.interval = setInterval(() => this.UpdateState, 1000);
         console.log('ChildsChild : componentDidMount');
     }
   
     shouldComponentUpdate(nextState) {
        console.log("ChildsChild : Previous value "+this.state.MessageFrom);
        console.log("ChildsChild : Current value "+nextState.MessageFrom);
        //console.log("Next Props "+nextProps.state)
          if(this.state.MessageFrom!==nextState.MessageFrom)
            {
                console.log("ChildsChild : State values are Changed ");
                return true;
            }
        else
            { 
                console.log("ChildsChild : State values are same ");
                return false;
            } 
     }
    render(){
        const styles = {
            Childs: {
                 backgroundColor:"Green"
            }
        };
        return <div style={styles.Childs}>
                    <p>First Child</p>                    
                     { this.state.MessageFrom}  
                     {/* <button  onClick={this.Method.bind(this)}>Call local method</button>                    */}
               </div>
    };
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('ChildsChild :  componentDidUpdate')
    }
    componentWillUnmount()
    {
        console.log('ChildsChild :  componentWillUnmount')
    }
}
export default ChildsChild; 

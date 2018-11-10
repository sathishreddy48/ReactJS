import React from 'react'
export default class Counter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            counter : 0,
            seconds: 0,
            ouput:""
        }
        this.Increment=()=>this.setState({counter:this.state.counter+1})
        this.Decrement=()=>this.setState({counter:this.state.counter-1})
        this.GetUpdatesfromDB = this.GetUpdatesfromDB.bind(this);
        this.UpdateState=(param)=>this.setState({ouput:param})
    }
    GetUpdatesfromDB()
    {
        console.log("GetUpdatesfromDB  method called");
       fetch("http://localhost:54025/IsValueUpdated")
            .then(res => res.json())
            .then(response => {
              //  debugger;
                console.log(response);
                this.UpdateState(response);
            });
    }    
    componentWillMount()
    {
        console.log('componentWillMount');
        clearInterval(this.interval);
    }

    componentDidMount() {
       this.GetUpdatesfromDB();
        this.interval = setInterval(() => this.GetUpdatesfromDB(), 30000);
       // this.interval = setInterval(() => this.UpdateState, 1000);
    }
  
    shouldComponentUpdate(nextState) {
       console.log("Previous value "+this.state.ouput);
       console.log("Current value "+nextState.ouput);
       //console.log("Next Props "+nextProps.state)
         if(this.state.ouput!==nextState.ouput)
           {
               return true;
           }
       else return false;
    }
    render(){
        console.log('Render method called');
        return <div>
            <button onClick={this.Increment}>Increment</button>
            <button  onClick={this.Decrement}>Decrement</button>
            <button  onClick={this.GetUpdatesfromDB}>Get Updates From DB</button>
            Counter:{this.state.counter}
            <div>
                Seconds: {this.state.seconds}
              </div>
              <div>
                Name: {this.state.ouput}
              </div>
        </div>
    };
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('componentDidUpdate')
    }
    componentWillUnmount()
    {
        console.log('componentWillUnmount')
    }
}
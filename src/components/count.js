import React, { Component } from 'react'
import {increment,decrement} from '../actions/index'

import {connect} from 'react-redux'
class count extends Component {
    
    render(props) {
        return (
            <div>
                
                <button onClick={(count)=>this.props.increment(count)}>Increment</button>
                <button onClick={(count)=>this.props.decrement(count)}>decrement</button>
                 Current Count = {this.props.count}
            </div>
        )
    }
}
const mapStatetoProps=(state)=>{
    return {count:state.count}
}

export default connect(mapStatetoProps,{
    increment:increment,
    decrement:decrement
})(count)

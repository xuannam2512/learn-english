import React, { Component } from 'react';
import './TopicDetails.css'

//component
import Fruit from './Fruit'
import Animal from './Animal'
import Introduction from './Introduction'

class TopicDetail extends Component {
    render() {
        return (
            <div class='container'>
            {
                this.props.topicId == 1 ?
                <Fruit />
                : this.props.topicId == 2 ?
                <Animal />    
                :
                <Introduction />  
            }
            </div>
        )
    }
}

export default TopicDetail
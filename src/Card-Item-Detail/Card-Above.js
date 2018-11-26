import React, { Component } from 'react'
import { Animated } from 'react-animated-css'

//import components
import ContentFruit from './Content-Fruit'

class CardAbove extends Component {
    render() {
        return (
            <Animated animationIn={this.props.isLeft ? "fadeInDown" : "fadeInUp"} animationOut={this.props.isLeft ? "fadeOutDown" : "fadeOutUp"} isVisible={this.props.isVisible}> 
                <div className='content'>
                    {
                        this.props.topicId == 1 ?
                            <ContentFruit cardId={this.props.index} />
                            :
                            <div></div>
                    }
                </div>                                  
            </Animated>
        )
    }
}

export default CardAbove;
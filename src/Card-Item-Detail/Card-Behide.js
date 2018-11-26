import React, { Component } from 'react'
import {Animated} from 'react-animated-css'

//import components
import ContentFruitBehide from './Content-Fruit-Behide'

class CardBehide extends Component {
    render() {
        return (
            <Animated animationIn={this.props.isLeft ? "fadeInDown" : "fadeInUp"} animationOut={this.props.isLeft ? "fadeOutDown" : "fadeOutUp"} isVisible={this.props.isVisible}> 
                <div className='content-behide'>
                    {
                        this.props.topicId == 1 ?
                            <ContentFruitBehide cardId={this.props.index} />
                            :
                            <div></div>
                    }
                </div>                                  
            </Animated>
        )
    }
}

export default CardBehide;
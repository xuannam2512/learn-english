import React, { Component } from 'react'
import { Animated } from 'react-animated-css'

//import css
import './CardItemDetail.css'


// import components
import SideBarNumber from './SideBarNumber'
import ContentFruit from './Content-Fruit'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope, faKey, faCaretLeft, faCaretRight);

class CardItemDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.cardId,
            topicId: this.props.topicId,
            isVisible: true,
            isLeft: true
        }
    }

    onClickLeft = () => {
        setTimeout(() => {
            this.setState({ isLeft: true });
            this.setState({isVisible: false})
            setTimeout(() => {
                this.setState({ index: this.state.index > 1 ? this.state.index - 1 : 9 })        
                this.setState({isVisible: true})        
            }, 500) 
        }, 100)               
    }

    onClickRight = () => {
        setTimeout(() => {
            this.setState({ isLeft: false });
            this.setState({isVisible: false})
            setTimeout(() => {
                this.setState({ index: this.state.index < 9 ? this.state.index + 1 : 1 })
                this.setState({isVisible: true})        
            }, 500)
        }, 100)                  
    }

    render() {
        return (
            <div>                
                <div class="container">
                    <SideBarNumber index = {this.state.index}/>
                    <div class='row mt-3 mb-3 card-above'>
                        <div class='arrow-left col-3'>
                            <span class='left-title' onClick={this.onClickLeft}>
                                <FontAwesomeIcon icon="caret-left" size="8x"/>
                            </span>
                        </div>                                                     
                        <div className='col-6'>
                            <Animated animationIn={this.state.isLeft ? "fadeInDown" : "fadeInUp"} animationOut={this.state.isLeft ? "fadeOutDown" : "fadeOutUp"} isVisible={this.state.isVisible}> 
                                <div className='content'>
                                    {
                                        this.state.topicId == 1 ?
                                            <ContentFruit cardId={this.state.index} />
                                            :
                                            <div></div>
                                    }
                                </div>                                  
                            </Animated>                            
                        </div>                   
                        <div class='arrow-right col-3'>
                            <span class='right-title' onClick={this.onClickRight}>
                                <FontAwesomeIcon icon="caret-right" size="8x"/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardItemDetail;
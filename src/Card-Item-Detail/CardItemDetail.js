import React, { Component } from 'react'

//import css
import './CardItemDetail.css'

//import image
import Apple from '../image/fruit/12316860561101736632rg1024_apple.svg.med.png'
import Orange from '../image/fruit/Large_Painted_Orange_PNG_Clipart.png'
import Pineapple from '../image/fruit/Pineapple.png'
import Banana from '../image/fruit/banana-clipart-sweet-food-4.png'
import Grape from '../image/fruit/f1b29ee56628bccf15df81d70c329643.png'
import StartFruit from '../image/fruit/Carambola_Transparent_Clip_Art_Image.png'
import Durian from '../image/fruit/61TBIlJAJLL.png'
import Papaya from '../image/fruit/Papaya-PNG-Vector-Clipart-Image.png'
import Rambutan from '../image/fruit/transcoder.png'

// import components
class CardItemDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.cardId,
            topicId: this.props.topicId
        }
    }

    render() {
        return (
            <div>                
                <div class="container">
                    <div class='row mt-1'>
                        <div className='active col slide-bar ml-1' style={ this.state.index == 1 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            1
                        </div>
                        <div class='col slide-bar ml-1' style={ this.state.index == 2 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            2
                        </div>
                        <div class='col slide-bar ml-1' style={ this.state.index == 3 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            3
                        </div>
                        <div class='col slide-bar ml-1' style={ this.state.index == 4 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            4
                        </div>
                        <div class='col slide-bar ml-1' style={ this.state.index == 5 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            5
                        </div>
                        <div class='col slide-bar ml-1' style={ this.state.index == 6 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            6
                        </div>
                        <div class='col slide-bar ml-1' style={ this.state.index == 7 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            7
                        </div>
                        <div class='col slide-bar ml-1' style={ this.state.index == 8 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            8
                        </div>
                        <div class='col slide-bar ml-1'style={ this.state.index == 9 ? {backgroundColor: 'red'} : {backgroundColor: 'aquamarine'}}>
                            9
                        </div>
                    </div>  
                    <div class='row mt-3 mb-3 card-above'>
                        <div class='content'>
                            <div class='card-item-img mt-4'>
                                <img class="img-fluid img-card-custome" alt="Responsive image" src={Banana}></img>
                            </div>
                            <div class='card-info'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardItemDetail;
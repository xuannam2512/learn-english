import React, { Component } from 'react';

//import component
import CartItem from './card-item/CardItem'

// import image
import Apple from '../image/12316860561101736632rg1024_apple.svg.med.png'
import Orange from '../image/Large_Painted_Orange_PNG_Clipart.png'
import Pineapple from '../image/Pineapple.png'
import Banana from '../image/banana-clipart-sweet-food-4.png'
import Grape from '../image/f1b29ee56628bccf15df81d70c329643.png'
import StartFruit from '../image/Carambola_Transparent_Clip_Art_Image.png'
import Durian from '../image/61TBIlJAJLL.png'
import Papaya from '../image/Papaya-PNG-Vector-Clipart-Image.png'
import Rambutan from '../image/transcoder.png'

class Fruit extends Component {
    render() {
        return (
            <div>
                <div class='row'>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <CartItem image={Apple} title={'Apple'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <CartItem image={Orange} title={'Orange'} />
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <CartItem image={Pineapple} title={'Pineapple'} />
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <CartItem image={Banana} title={'Banana'} />
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <CartItem image={Grape} title={'Grape'} />
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <CartItem image={StartFruit} title={'StartFruit'} />
                    </div>
                </div>
                <div class='row mb-3'>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <CartItem image={Durian} title={'Durian'} />
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <CartItem image={Papaya} title={'Papaya'} />
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <CartItem image={Rambutan} title={'Rambutan'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Fruit;
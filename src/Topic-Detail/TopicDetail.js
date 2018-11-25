import React, { Component } from 'react';
import './TopicDetails.css'
import Apple from '../image/12316860561101736632rg1024_apple.svg.med.png'
import Orange from '../image/Large_Painted_Orange_PNG_Clipart.png'
import Pineapple from '../image/Pineapple.png'
import Banana from '../image/banana-clipart-sweet-food-4.png'
import Grape from '../image/f1b29ee56628bccf15df81d70c329643.png'
import StartFruit from '../image/Carambola_Transparent_Clip_Art_Image.png'
import Durian from '../image/61TBIlJAJLL.png'
import Papaya from '../image/Papaya-PNG-Vector-Clipart-Image.png'
import Rambutan from '../image/transcoder.png'

class TopicDetail extends Component {
    render() {
        return (
            <div class='container'>
                <div class='row'>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class = 'card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={Apple}></img>
                            </div>   
                            <div class='card-title'>
                                <h4>Apple</h4>
                            </div>                         
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class = 'card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={Orange}></img>
                            </div>   
                            <div class='card-title'>
                                <h4>Orange</h4>
                            </div>  
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class='card-content'>
                                <div class='card-img'>
                                    <img class="img-fluid img-custom" alt="Responsive image" src={Pineapple}></img>
                                </div>
                                <div class='card-title'>
                                    <h4>Pineapple</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class='card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={Banana}></img>
                            </div>
                            <div class='card-title'>
                                <h4>Banana</h4>
                            </div>
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class='card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={Grape}></img>
                            </div>
                            <div class='card-title'>
                                <h4>Grape</h4>
                            </div>
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class='card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={StartFruit}></img>
                            </div>
                            <div class='card-title'>
                                <h4>Start Fruit</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class='card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={Durian}></img>
                            </div>
                            <div class='card-title'>
                                <h4>Durian</h4>
                            </div>
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class='card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={Papaya}></img>
                            </div>
                            <div class='card-title'>
                                <h4>Papaya</h4>
                            </div>
                        </div>
                    </div>
                    <div class='col-4 mt-4 mb-2 card1'>
                        <div class='card-content'>
                            <div class='card-img'>
                                <img class="img-fluid img-custom" alt="Responsive image" src={Rambutan}></img>
                            </div>
                            <div class='card-title'>
                                <h4>Rambutan</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default TopicDetail
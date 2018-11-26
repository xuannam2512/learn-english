import React, { Component } from 'react'

//import images
import Apple from '../image/fruit/12316860561101736632rg1024_apple.svg.med.png'
import Orange from '../image/fruit/Large_Painted_Orange_PNG_Clipart.png'
import Pineapple from '../image/fruit/Pineapple.png'
import Banana from '../image/fruit/banana-clipart-sweet-food-4.png'
import Grape from '../image/fruit/f1b29ee56628bccf15df81d70c329643.png'
import StartFruit from '../image/fruit/Carambola_Transparent_Clip_Art_Image.png'
import Durian from '../image/fruit/61TBIlJAJLL.png'
import Papaya from '../image/fruit/Papaya-PNG-Vector-Clipart-Image.png'
import Rambutan from '../image/fruit/transcoder.png'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faEnvelope, faKey, faCaretLeft, faCaretRight, faVolumeUp);

class ContentFruitBehide extends Component {
    render() {
        return (
            this.props.cardId == 1 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Apple</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>['æpl]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x"/>
                            </span>
                        </div>
                    </div>                                                            
                </div>
            : this.props.cardId == 2 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Orange</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>['ɔrindʒ]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x"/>
                            </span>
                        </div>
                    </div>                                                            
                </div>
            : this.props.cardId == 3 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Pineapple</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>['painæpl]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x"/>
                            </span>
                        </div>
                    </div>                                                            
                </div> 
            : this.props.cardId == 4 ?
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Banana</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[bə'nɑ:nə]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>    
            : this.props.cardId == 5 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Grape</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ɡreɪp]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>                        
            : this.props.cardId == 6 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>StarFruit</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈstɑːr.fruːt]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div> 
            : this.props.cardId == 7 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Durian</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ˈdʊr.i.ən]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>
            : this.props.cardId == 8 ? 
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Papaya</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[pəˈpaɪ.ə]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>
            :
                <div class="word-box">
                    <div>
                        <div class='word'>
                            <h3><b>Rambutan</b></h3>
                        </div>
                        <div class='spelling'>
                            <h4>[ræmˈbuː.tən]</h4>
                        </div>
                        <div class='sound'>
                            <span>
                                <FontAwesomeIcon icon='volume-up' size="2x" />
                            </span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ContentFruitBehide;
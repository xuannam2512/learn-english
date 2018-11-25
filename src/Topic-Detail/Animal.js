import React, {Component} from 'react';

//import Components
import CartItem from './card-item/CardItem'

//Import images for animal
import Bee from '../image/Animal/bee.png'
import Dragon from '../image/Animal/dragon.png'
import Turtle from '../image/Animal/turtle.png'
import Dinosaurs from '../image/Animal/dinosaurous.png'
import Woodpecker from '../image/Animal/woodpecker.png'
import Lion from '../image/Animal/lion.png'
import Snake from '../image/Animal/snake.png'
import Cow from '../image/Animal/cows.png'
import Mouse from '../image/Animal/mouse.png'

class Animal extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class="card-content">
                            <CartItem image={Bee} title={"Bee"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class="card-content">
                            <CartItem image={Dragon} title={"Dragon"} />
                        </div>
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <div class="card-content">
                            <CartItem image={Turtle} title={"Turtle"} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4 mt-4 mb-2 card1">
                        <CartItem image={Dinosaurs} title={"Dinosaurs"} />
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <CartItem image={Woodpecker} title={"Woodpecker"} />
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <CartItem image={Lion} title={"Lion"} />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-4 mt-4 mb-2 card1">
                        <CartItem image={Snake} title={"Snake"} />
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <CartItem image={Cow} title={"Cow"} />
                    </div>
                    <div class="col-4 mt-4 mb-2 card1">
                        <CartItem image={Mouse} title={"Mouse"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Animal;


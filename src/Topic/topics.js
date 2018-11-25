import React, { Component } from 'react';
import './topics.css'
import Fruit from '../image/dev_061585.png'
import Animal from '../image/136-1369496_illustration-african-animals-kids-rev2-illustration-african-animals-kids-rev2.png'

class Topic extends Component {
    render() {
        return (
            <div class = "container-fluid">
                <div class = 'row topic mt-3 mb-3'>
                    <div class='col-6'>
                        <img class="img-fluid" alt="Responsive image" src={Fruit}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Fruit
                    </div>
                </div>
                <div class = 'row topic mt-3 mb-3'>
                    <div class='col-6'>
                        <img class="img-fluid" alt="Responsive image" src={Fruit}></img>
                    </div>
                    <div class='col-6 title-topic'>
                        Animal
                    </div>
                </div>
                <div class = 'row topic'>
                <div class='col-6'>
                        Image
                    </div>
                    <div class='col-6'>
                        Title
                    </div>
                </div>
                <div class = 'row topic'>
                <div class='col-6'>
                        Image
                    </div>
                    <div class='col-6'>
                        Title
                    </div>
                </div>
                <div class = 'row topic'>
                <div class='col-6'>
                        Image
                    </div>
                    <div class='col-6'>
                        Title
                    </div>
                </div>
            </div>
        )
    }
}

export default Topic;
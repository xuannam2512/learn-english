import React, { Component } from 'react'

class SideBarNumber extends Component {
    render() {
        return (
            <div class='row mt-1'>
                <div className='active col slide-bar ml-1' style={this.props.index == 1 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    1
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 2 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    2
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 3 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    3
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 4 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    4
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 5 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    5
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 6 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    6
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 7 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    7
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 8 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    8
                </div>
                <div class='col slide-bar ml-1' style={this.props.index == 9 ? { backgroundColor: 'red' } : { backgroundColor: 'aquamarine' }}>
                    9
                </div>
            </div>
        )
    }
}

export default SideBarNumber;
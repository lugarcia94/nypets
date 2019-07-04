import React, { Component } from 'react';
import Slider from 'react-slick';
export default class Name extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 0
        };
    }
    componentWillReceiveProps() {
        this.setState({key: 0});
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            arrows: true,
            vertical: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };

        if( !this.props.images.length )
            return <div className="quickview__images">
                <span className="quickview__images--no">Sem Imagem</span>
            </div>;

        return <div className="quickview__images">
            <figure className="quickview__image">
                <img src={this.props.images[this.state.key]} />
            </figure>

            <div className="quickview__images--more">
                <Slider {...settings}>
                    {this.props.images.map((image, key) => <div className="quickview__item" key={key} onClick={(e) => { this.setState({key}) }} ><img src={image} /></div>)}
                </Slider>
            </div>

        </div>;
    }
}
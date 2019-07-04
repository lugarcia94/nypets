import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './css/index.styl';

class remove extends Component {

    remove(event) {
        let url = '/web_api/carts/' + this.props.session + '/' + this.props.id;

        if(this.props.variant)
            url = '/web_api/carts/' + this.props.session + '/' + this.props.id + '/' + this.props.variant;

        axios.delete(url)
            .then(response =>  {
                const UPDATECART = new CustomEvent('UPDATECART', { detail: response.data });
                window.dispatchEvent(UPDATECART);
            });

        console.log('[ Minicart ] DELETE PRODUCT ID | VARIANT ID', this.props.id, this.props.variant);
    }

    render() {

        return  <button className="minicart__delete" type="button" onClick={(e) => this.remove(e)}>
                <svg viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Remove</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="home-newyorkpets" transform="translate(-1588.000000, -150.000000)" fill="#000000"> <g id="Hover-Carrinho" transform="translate(1244.000000, 62.000000)"> <g id="1" transform="translate(29.000000, 67.000000)"> <g id="128397" transform="translate(315.000000, 21.000000)"> <path d="M7.69090909,6.16363636 C7.58181818,6.05454545 7.58181818,5.89090909 7.69090909,5.78181818 L11.7818182,1.69090909 C11.8909091,1.58181818 11.9454545,1.41818182 11.9454545,1.30909091 C11.9454545,1.2 11.8909091,1.03636364 11.7818182,0.927272727 L11.0181818,0.163636364 C10.9090909,0.0545454545 10.7454545,0 10.6363636,0 C10.4727273,0 10.3636364,0.0545454545 10.2545455,0.163636364 L6.16363636,4.25454545 C6.05454545,4.36363636 5.89090909,4.36363636 5.78181818,4.25454545 L1.69090909,0.163636364 C1.58181818,0.0545454545 1.41818182,0 1.30909091,0 C1.2,0 1.03636364,0.0545454545 0.927272727,0.163636364 L0.163636364,0.927272727 C0.0545454545,1.03636364 0,1.2 0,1.30909091 C0,1.41818182 0.0545454545,1.58181818 0.163636364,1.69090909 L4.25454545,5.78181818 C4.36363636,5.89090909 4.36363636,6.05454545 4.25454545,6.16363636 L0.163636364,10.2545455 C0.0545454545,10.3636364 0,10.5272727 0,10.6363636 C0,10.7454545 0.0545454545,10.9090909 0.163636364,11.0181818 L0.927272727,11.7818182 C1.03636364,11.8909091 1.2,11.9454545 1.30909091,11.9454545 C1.41818182,11.9454545 1.58181818,11.8909091 1.69090909,11.7818182 L5.78181818,7.69090909 C5.89090909,7.58181818 6.05454545,7.58181818 6.16363636,7.69090909 L10.2545455,11.7818182 C10.3636364,11.8909091 10.5272727,11.9454545 10.6363636,11.9454545 C10.7454545,11.9454545 10.9090909,11.8909091 11.0181818,11.7818182 L11.7818182,11.0181818 C11.8909091,10.9090909 11.9454545,10.7454545 11.9454545,10.6363636 C11.9454545,10.5272727 11.8909091,10.3636364 11.7818182,10.2545455 L7.69090909,6.16363636 Z" id="Path"></path> </g> </g> </g> </g> </g> </svg>
            </button>;
    }

}

remove.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(remove);

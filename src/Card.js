import React, { Component } from 'react';
import './Card.css';
import $ from 'jquery';

class Card extends Component {
  render() {
  const url = `http://localhost:3008/people`;
    $.ajax({
      url: url
    }).done(function(data) {
    console.log('The returned object is:', data)
    })

    return (
      <div className='card'>
        <div className='card-content'>
          	<div name={""} className='card-name'>Darth Vader</div>
          	<img image={""} src='http://localhost:3008/darth_vader.jpg' alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span birthday={""}>41.9BBY</span>
            </p>
            <p>
                {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
                <span>Homeworld:</span>
                <span homePlanet={""}>Tatooine</span>
            </p>
        </div>
    </div>

    );
  }
}

export default Card;

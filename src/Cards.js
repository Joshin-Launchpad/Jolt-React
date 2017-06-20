import React, { Component } from 'react';
import './Card.css';
import $ from 'jquery';

class Cards extends Component {

  render() {

  const url = `http://localhost:3008/people`;
    $.ajax({
      url: url
    }).done(function(data) {
    console.log('The returned object is:', data);
    let hero = {
      name: data[0].name,
      image: data[0].image,
      birthYear: data[0].birth_year,
      homeworld: data[0].homeworld
    }
    console.log(hero);

    // function starWarsPeople (item, index) {
    //   let nameBirthday = [item.name + " and " +  item.birth_year].join(" ");
    //   return nameBirthday;
    // }
    // console.log(data);
    // console.log(nameBirthday);
    // function mappingPeopleInfo () {
    //   console.log(data.map(starWarsPeople));
    // }
    // getFullName(item, index) {
    // var fullname = [item.firstname,item.lastname].join(" ");
    // return fullname;
    // }

// function myFunction() {
//     document.getElementById("demo").innerHTML = persons.map(getFullName);
// }

  // console.log(data.map())
})

    return (
      <div className='card'>
        <div className='card-content'>
          	<div className='card-name'>Darth Vader</div>
          	<img src='http://localhost:3008/darth_vader.jpg' alt='profile'/>
            <p>
                <span>Birthday:</span>
                <span>41.9BBY</span>
            </p>
            <p>
                {/* Note that in order to get the homeworld's name, you have to get the planet name from a different endpoint than the people */}
                <span>Homeworld:</span>
                <span>Tatooine</span>
            </p>
        </div>
    </div>

    );
  }
}

export default Cards;

import React from 'react';
import './dogs.css';

class Dogs extends React.Component {

	render() {
		const dogInfo = [
			{
				breedName: 'Doberman',
				class: 'Working',
				colors: ['Black & Rust', 'Red & Rust'],
				image: '../assets/images/doberman.jpg'

			},
			{
				breedName: 'Tibetan Mastiff',
				class: 'Working',
				colors: ['Black', 'Black & Tan', 'Blue Gray', 'Blue Gray & Tan', 'Brown', 'Brown & Tan', 'Red Gold', 'Red Gold Sable']
			},
			{
				breedName: 'Great Dane',
				class: 'Working',
				colors: ['Black', 'Black & White', 'Blue', 'Brindle', 'Fawn', 'Harlequin', 'Mantle', 'Merle', 'White']
			},
			{
				breedName: 'Cavalier King Charles Spaniel',
				class: 'Toy',
				colors: ['Blenheim', 'Black & Tan', 'Tri-Color', 'Ruby'] 
			},
			{
				breedName: 'Italian Greyhound',
				class: 'Toy',
				colors: ['Black', 'Blue', 'Blue Fawn', 'Cream', 'Fawn', 'Red', 'Red Fawn', 'Sable', 'Seal']
			},
			{
				breedName: 'Papillon',
				class: 'Toy',
				colors: ['White & Black', 'White & Lemon', 'White & Red', 'White & Sable', 'White Black & Tan']
			},
			{
				breedName: 'Poodle',
				class: 'Non-Sporting',
				colors: ['Apricot', 'Black', 'Blue', 'Brown', 'Cream', 'Gray', 'Red', 'Silver', 'Silver Beige', 'White']
			},
			{
				breedName: 'Dalmatian',
				class: 'Non-Sporting',
				colors: ['White & Black', 'White & Liver Brown']
			},
			{
				breedName: 'Australian Shepherd',
				class: 'Herding',
				colors: ['Tri-Color', 'Blue Merle', 'Red', 'Red Merle']
			},
			{
				breedName: 'German Shepherd',
				class: 'Herding',
				colors: ['Bi-Color', 'Black', 'Black & Cream', 'Black & Red', 'Black & Silver', 'Black & Tan', 'Blue', 'Gray', 'Liver', 'Sable', 'White']
			},
			{
				breedName: 'Cardigan Welsh Corgi',
				class: 'Herding',
				colors: ['Black & White', 'Blue Merle & White', 'Brindle & White', 'Red & White', 'Sable & White']
			},
			{
				breedName: 'Basset Hound',
				class: 'Hound',
				colors: ['Black & White', 'Blue Brown & White', 'Black Tan & White', 'Black White & Brown', 'Black White & Tan', 'Brown Black & White', 'Lemon & White', 'Mahogany & White', 'Red & White']
			},
			{
				breedName: 'Norwegian Elkhound',
				class: 'Hound',
				colors: ['Black & Gray', 'Black & Silver', 'Black White & Silver', 'Gray & Black', 'Gray Black & Silver', 'Silver & Black', 'Silver Gray & Black']
			},
			{
				breedName: 'Golden Retriever',
				class: 'Sporting',
				colors: ['Dark Golden', 'Golden', 'Light Golden']
			},
			{
				breedName: 'Nova Scotia Duck Tolling Retriever',
				class: 'Sporting',
				colors: ['Red', 'Red Gold']
			},
			{
				breedName: 'English Cocker Spaniel',
				class: 'Sporting',
				colors: ['Black', 'Black & Tan', 'Black & White', 'Black White & Tan', 'Blue Roan', 'Blue Roan & Tan', 'Golden', 'Lemon Roan', 'Liver', 'Liver & Tan', 'Liver & White', 'Liver Roan', 'Liver Roan & Tan', 'Liver White & Tan', 'Orange & White', 'Orange Roan', 'Red', 'Red Roan']
			},
			{
				breedName: 'Cairn Terrier',
				class: 'Terrier',
				colors: ['Black', 'Black Brindle', 'Brindle', 'Cream', 'Cream Brindle', 'Gray', 'Gray Brindle', 'Red', 'Red Brindle', 'Silver', 'Wheaten']
			},
			{
				breedName: 'Russell Terrier',
				class: 'Terrier',
				colors: ['White']
			},
			{
				breedName: 'Bernese Mountain Dog',
				class: 'Working',
				colors: ['Black Rust & White', 'Black Tan & White']
			},
			{
				breedName: 'Newfoundland',
				class: 'Working',
				colors: ['Black', 'Brown', 'Gray', 'White & Black']
			}

		]
		return (
			<div>
				<div id="classCard1" class="classCard">
					<h3>Working Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Working'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>
				<div id="classCard2" class="classCard">
					<h3>Toy Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Toy'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>
				 <div id="classCard3" class="classCard">
					<h3>Sporting Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Sporting'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>
				<div id="classCard4" class="classCard">
					<h3>Non-Sporting Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Non-Sporting'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>
				<div id="classCard5" class="classCard">
					<h3>Terrier Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Terrier'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>
				<div id="classCard6" class="classCard">
					<h3>Hound Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Hound'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>
				<div id="classCard7" class="classCard">
					<h3>Herding Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Herding'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>
				
				

				{dogInfo.map(function(dog) {
					return (
						<div className="DogInfoCard">
						
							<h3>{dog.breedName}</h3>
							<p>Class: {dog.class}</p>
							<p><h4>Coat Colors: </h4>{dog.colors.map(function(color) {
								return (<p>{color}</p>)
							})}</p>
						</div>
					)

					
				})}
				
			</div>
		)
	}
}

export default Dogs;



// const dogList = ['Doberman', 'Cavalier King Charles Spaniel', 'Golden Retriever', 'Gordon Setter', 'Schnauzer', 'German Shepard', 'Cumberland Spaniel', 'Havanese', 'Japanese Chin', 'American Alsatian', 'Newfoundland', 'Bernese Mountain Dog', 'Swiss Mountain Dog', 'Australian Cattle Dog', 'Australian Shepard', 'Bloodhound']
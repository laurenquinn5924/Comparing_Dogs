import React from 'react';
import dobie from '../assets/images/dobieEdit.jpg';
import tibetanMastiff from '../assets/images/tibetanMastiff.jpg';
import greatDane from '../assets/images/greatDane.jpg';
import italianGrayhound from '../assets/images/italianGrayhound.jpg';
import papillon from '../assets/images/papillon.jpg';
import poodle from '../assets/images/poodle.jpg';
import dalmation from '../assets/images/dalmation.jpg';
import australianShepherd from '../assets/images/aussie.jpg';
import germanShepherd from '../assets/images/germanShepherd.jpg';
import cardiganWelshCorgi from '../assets/images/cardiganWelshCorgi.jpg';
import bassetHound from '../assets/images/bassetHound.jpg';
import norwegianElkhound from '../assets/images/norwegianElkhound.jpg';
import goldenRetriever from '../assets/images/goldenRetriever.jpg';
import toller from '../assets/images/toller.jpg';
import './dogs.css';

class DogsByClass extends React.Component {
	render() {
		const dogInfo = [
			{
				breedName: 'Doberman Pinscher',
				class: 'Working',
				colors: ['Black & Rust', 'Red & Rust'],
				image: dobie,
				alt: 'Red and Rust Doberman'

			},
			{
				breedName: 'Tibetan Mastiff',
				class: 'Working',
				colors: ['Black', 'Black & Tan', 'Blue Gray', 'Blue Gray & Tan', 'Brown', 'Brown & Tan', 'Red Gold', 'Red Gold Sable'],
				image: tibetanMastiff,
				alt: 'Black and Tan Tibetan Mastiff'
			},
			{
				breedName: 'Great Dane',
				class: 'Working',
				colors: ['Black', 'Black & White', 'Blue', 'Brindle', 'Fawn', 'Harlequin', 'Mantle', 'Merle', 'White'],
				image: greatDane,
				alt: 'Merle Great Dane'
			},
			{
				breedName: 'Cavalier King Charles Spaniel',
				class: 'Toy',
				colors: ['Blenheim', 'Black & Tan', 'Tri-Color', 'Ruby'] 
			},
			{
				breedName: 'Italian Greyhound',
				class: 'Toy',
				colors: ['Black', 'Blue', 'Blue Fawn', 'Cream', 'Fawn', 'Red', 'Red Fawn', 'Sable', 'Seal'],
				image: italianGrayhound,
				alt: 'Fawn Italian Grayhound'
				
			},
			{
				breedName: 'Papillon',
				class: 'Toy',
				colors: ['White & Black', 'White & Lemon', 'White & Red', 'White & Sable', 'White Black & Tan'],
				image: papillon,
				alt: 'White and Red Papillon'
			},
			{
				breedName: 'Poodle',
				class: 'Non-Sporting',
				colors: ['Apricot', 'Black', 'Blue', 'Brown', 'Cream', 'Gray', 'Red', 'Silver', 'Silver Beige', 'White'],
				image: poodle,
				alt: 'Three colors of Standard Poodle. From left: Cream, Red, Gray'
			},
			{
				breedName: 'Dalmatian',
				class: 'Non-Sporting',
				colors: ['White & Black', 'White & Liver Brown'],
				image: dalmation,
				alt: 'White and Liver Brown Dalmation. This dog has brown instead of the popular black spots.'
			},
			{
				breedName: 'Australian Shepherd',
				class: 'Herding',
				colors: ['Tri-Color', 'Blue Merle', 'Red', 'Red Merle'],
				image: australianShepherd,
				alt: 'Red Merle Australian Shepherd'
			},
			{
				breedName: 'German Shepherd',
				class: 'Herding',
				colors: ['Bi-Color', 'Black', 'Black & Cream', 'Black & Red', 'Black & Silver', 'Black & Tan', 'Blue', 'Gray', 'Liver', 'Sable', 'White'],
				image: germanShepherd,
				alt: 'Sable Long Haired German Shepherd'
			},
			{
				breedName: 'Cardigan Welsh Corgi',
				class: 'Herding',
				colors: ['Black & White', 'Blue Merle & White', 'Brindle & White', 'Red & White', 'Sable & White'],
				image: cardiganWelshCorgi,
				alt: 'Blue Merle and White Cardigan Welsh Corgi'
			},
			{
				breedName: 'Basset Hound',
				class: 'Hound',
				colors: ['Black & White', 'Blue Brown & White', 'Black Tan & White', 'Black White & Brown', 'Black White & Tan', 'Brown Black & White', 'Lemon & White', 'Mahogany & White', 'Red & White'],
				image: bassetHound,
				alt: 'Brown Black and White Basset Hound'
			},
			{
				breedName: 'Norwegian Elkhound',
				class: 'Hound',
				colors: ['Black & Gray', 'Black & Silver', 'Black White & Silver', 'Gray & Black', 'Gray Black & Silver', 'Silver & Black', 'Silver Gray & Black'],
				image: norwegianElkhound,
				alt: 'Gray and Black Norwegian Elkhound'
			},
			{
				breedName: 'Golden Retriever',
				class: 'Sporting',
				colors: ['Dark Golden', 'Golden', 'Light Golden'],
				image: goldenRetriever,
				alt: 'Light Golden Retriever'
			},
			{
				breedName: 'Nova Scotia Duck Tolling Retriever',
				class: 'Sporting',
				colors: ['Red', 'Red Gold'],
				image: toller,
				alt: 'Nova Scotia Duck Tolling Retriever'
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
							return (<div>
								<p>{dog.breedName}</p>
								<p><h4>Coat Colors: </h4>{dog.colors.map(function(color) {
									return (<p>{color}</p>)
								})}</p>
								</div>)
							
						})}
					</div>

					{dogInfo.map(function(dog) {
					return (
						<div className="DogInfoCard">
							<img  className="image_props" src={dog.image} alt={dog.alt} />
							<h3>{dog.breedName}</h3>
							<p>Class: {dog.class}</p>
							<p>
								<h4>AKC Official Coat Colors: </h4>
								{dog.colors.map(function(color) {
									return (<p>{color}</p>)
								})}
							</p>
						</div>
					)	
				})}
			</div>
		)
	}
}

export default DogsByClass;
import React from 'react';
//import TestDogs from './TestDogs';

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
import cocker from '../assets/images/cocker.jpg';
import cairnTerrier from '../assets/images/cairnTerrier.jpg';
import russellTerrier from '../assets/images/russellTerrier.jpg';
import berner from '../assets/images/berner.jpg';
import newfie from '../assets/images/newfie.jpg';
import cavalier from '../assets/images/cavalier.jpg';

class Toggle extends React.Component {
	state = {
		on: false
	}

	

toggle = () => {
	console.log(this.state)
	this.setState({
		on: !this.state.on
	});
}

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
				colors: ['Blenheim', 'Black & Tan', 'Tri-Color', 'Ruby'],
				image: cavalier,
				alt: 'Tri-Color Cavalier King Charles Spaniel'
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
				colors: ['Black', 'Black & Tan', 'Black & White', 'Black White & Tan', 'Blue Roan', 'Blue Roan & Tan', 'Golden', 'Lemon Roan', 'Liver', 'Liver & Tan', 'Liver & White', 'Liver Roan', 'Liver Roan & Tan', 'Liver White & Tan', 'Orange & White', 'Orange Roan', 'Red', 'Red Roan'],
				image: cocker,
				alt: 'Liver Roan English Cocker Spaniel'
			},
			{
				breedName: 'Cairn Terrier',
				class: 'Terrier',
				colors: ['Black', 'Black Brindle', 'Brindle', 'Cream', 'Cream Brindle', 'Gray', 'Gray Brindle', 'Red', 'Red Brindle', 'Silver', 'Wheaten'],
				image: cairnTerrier,
				alt: 'Red Brindle Cairn Terrier'
			},
			{
				breedName: 'Russell Terrier',
				class: 'Terrier',
				colors: ['White'],
				image: russellTerrier,
				alt: 'White Russell Terrier with Tan Markings'
			},
			{
				breedName: 'Bernese Mountain Dog',
				class: 'Working',
				colors: ['Black Rust & White', 'Black Tan & White'],
				image: berner,
				alt: 'Bernese Mountain Dog'
			},
			{
				breedName: 'Newfoundland',
				class: 'Working',
				colors: ['Black', 'Brown', 'Gray', 'White & Black'],
				image: newfie,
				alt: 'Two Newfoundland Dogs showing off the black and brown coats.'
			}
		]
		return (
			<div>
				{this.state.on && <h1>Toggle on!</h1>}
				<button onClick={this.toggle}>{dogInfo.map(function(dog) {
					return <p>{dog.breedName}</p>
				})}</button>
				
				
			
			</div>
		)
	}
}

export default Toggle;
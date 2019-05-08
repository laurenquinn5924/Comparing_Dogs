import React from 'react';

import DogList from './DogList';
import './dogs.css';


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
import shiba from '../assets/images/shiba.jpg';

class Dogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dogInfo: [
				{
					id: 1,
					key: 'dogBreed',
					breedName: 'Tibetan Mastiff',
					class: 'Working',
					colors: ['Black', 'Black & Tan', 'Blue Gray', 'Blue Gray & Tan', 'Brown', 'Brown & Tan', 'Red Gold', 'Red Gold Sable'],
					image: tibetanMastiff,
					alt: 'Black and Tan Tibetan Mastiff',
					lifeExpectancy: '12-15 years',
					weightFemale: '75-120 lbs',
					weightMale: '100-160 lbs',
					fact: 'In Tibet, they are called “Do-Khyi”(Tied Dog) as they are traditionally kept chained to gates during the day and let loose at night to patrol the property.'
				},
				{
					id: 2,
					key: 'dogBreed',
					breedName: 'Great Dane',
					class: 'Working',
					colors: ['Black', 'Black & White', 'Blue', 'Brindle', 'Fawn', 'Harlequin', 'Mantle', 'Merle', 'White'],
					image: greatDane,
					alt: 'Merle Great Dane',
					lifeExpectancy: '12-15 years',
					weightFemale: '75-120 lbs',
					weightMale: '100-160 lbs',
					fact: 'The record holder for the tallest dog ever is a Great Dane called Zeus, that measured 42 inches from paw to shoulder.'
				},
				{
					id: 3,
					key: 'dogBreed',
					breedName: 'Cavalier King Charles Spaniel',
					class: 'Toy',
					colors: ['Blenheim', 'Black & Tan', 'Tri-Color', 'Ruby'],
					image: cavalier,
					alt: 'Tri-Color Cavalier King Charles Spaniel',
					lifeExpectancy: '9-14 years',
					weightFemale: '13-18 lbs',
					weightMale: '13-18 lbs',
					fact: 'Cavaliers are classified in the Toy Group, rather than the Sporting Group with the other spaniels, because they were bred with the express purpose of being a lap dog.'
				},
				{
					id: 4,
					key: 'dogBreed',
					breedName: 'Italian Greyhound',
					class: 'Toy',
					colors: ['Black', 'Blue', 'Blue Fawn', 'Cream', 'Fawn', 'Red', 'Red Fawn', 'Sable', 'Seal'],
					image: italianGrayhound,
					alt: 'Fawn Italian Grayhound',
					lifeExpectancy: '12-15 years',
					weightFemale: '8-11 lbs',
					weightMale: '8-11 lbs',
					fact: 'The Italian Greyhound is the smallest of the sighthounds; in fact, it is referred to as “miniature” in size.'
				},
				{
					id: 5,
					key: 'dogBreed',
					breedName: 'Papillon',
					class: 'Toy',
					colors: ['White & Black', 'White & Lemon', 'White & Red', 'White & Sable', 'White Black & Tan'],
					image: papillon,
					alt: 'White and Red Papillon',
					lifeExpectancy: '13-15 years',
					weightFemale: '7-9 lbs',
					weightMale: '8-10 lbs',
					fact: 'The Papillon, also called the Continental Toy Spaniel, is a breed of dog, of the spaniel type. One of the oldest of the toy spaniels, it derives its name from its characteristic butterfly-like look of the long and fringed hair on the ears.'
				},
				{
					id: 6,
					key: 'dogBreed',
					breedName: 'Standard Poodle',
					class: 'Non-Sporting',
					colors: ['Apricot', 'Black', 'Blue', 'Brown', 'Cream', 'Gray', 'Red', 'Silver', 'Silver Beige', 'White'],
					image: poodle,
					alt: 'Three colors of Standard Poodle. From left: Cream, Red, Gray',
					lifeExpectancy: '10-18 years',
					weightFemale: '40-50 lbs',
					weightMale: '60-70 lbs',
					fact: 'Poodles come in three size varieties: Standards should be more than 15 inches tall at the shoulder; Miniatures are 15 inches or under; Toys stand no more than 10 inches. All three varieties have the same build and proportions.'
				},
				{
					id: 7,
					key: 'dogBreed',
					breedName: 'Dalmatian',
					class: 'Non-Sporting',
					colors: ['White & Black', 'White & Liver Brown'],
					image: dalmation,
					alt: 'White and Liver Brown Dalmation. This dog has brown instead of the popular black spots.',
					lifeExpectancy: '10-13 years',
					weightFemale: '35-53 lbs',
					weightMale: '33-71 lbs',
					fact: 'Dalmatian puppies are born white and their first spots usually develop within 3 to 4 weeks.'
				},
				{
					id: 8,
					key: 'dogBreed',
					breedName: 'Australian Shepherd',
					class: 'Herding',
					colors: ['Tri-Color', 'Blue Merle', 'Red', 'Red Merle'],
					image: australianShepherd,
					alt: 'Red Merle Australian Shepherd',
					lifeExpectancy: '13-15 years',
					weightFemale: '35-55 lbs',
					weightMale: '55-70 lbs',
					fact: 'In spite of its name, the Australian Shepherd (familiarly known as the Aussie) does not actually originate from Australia. The breed was in fact developed on ranches in the US in the 19th century for herding purposes.'
				},
				{
					id: 9,
					key: 'dogBreed',
					breedName: 'German Shepherd',
					class: 'Herding',
					colors: ['Bi-Color', 'Black', 'Black & Cream', 'Black & Red', 'Black & Silver', 'Black & Tan', 'Blue', 'Gray', 'Liver', 'Sable', 'White'],
					image: germanShepherd,
					alt: 'Sable Long Haired German Shepherd',
					lifeExpectancy: '9-13 years',
					weightFemale: '49-71 lbs',
					weightMale: '66-88 lbs',
					fact: 'Police will only use German Shepherds from the European Working lines. Unlike the American lines, these dogs are structurally sound with straight backs. The American lines have been bred with sloping backs with hips that cannot support them.'
				},
				{
					id: 10,
					key: 'dogBreed',
					breedName: 'Cardigan Welsh Corgi',
					class: 'Herding',
					colors: ['Black & White', 'Blue Merle & White', 'Brindle & White', 'Red & White', 'Sable & White'],
					image: cardiganWelshCorgi,
					alt: 'Blue Merle and White Cardigan Welsh Corgi',
					lifeExpectancy: '12-15 years',
					weightFemale: '24-34 lbs',
					weightMale: '30-38 lbs',
					fact: 'The Cardigan is best described as a Corgi with a tail, but he stands out from his cousin, the Pembroke Welsh Corgi, in other ways. The Cardigan has larger, more rounded ears and he comes in a variety of colors, including tricolor (black and white, with tan or brindle points), blue merle, brindle, sable, and red.'
				},
				{
					id: 11,
					key: 'dogBreed',
					breedName: 'Basset Hound',
					class: 'Hound',
					colors: ['Black & White', 'Blue Brown & White', 'Black Tan & White', 'Black White & Brown', 'Black White & Tan', 'Brown Black & White', 'Lemon & White', 'Mahogany & White', 'Red & White'],
					image: bassetHound,
					alt: 'Brown Black and White Basset Hound',
					lifeExpectancy: '10-12 years',
					weightFemale: '44-60 lbs',
					weightMale: '51-64 lbs',
					fact: 'The Basset Hound is a short-legged breed of dog in the hound family. The Basset is a scent hound that was originally bred for the purpose of hunting hare. Their sense of smell and ability to ground-scent is second only to the Bloodhound.'
				},
				{
					id: 12,
					key: 'dogBreed',
					breedName: 'Norwegian Elkhound',
					class: 'Hound',
					colors: ['Black & Gray', 'Black & Silver', 'Black White & Silver', 'Gray & Black', 'Gray Black & Silver', 'Silver & Black', 'Silver Gray & Black'],
					image: norwegianElkhound,
					alt: 'Gray and Black Norwegian Elkhound',
					lifeExpectancy: '12-15 years',
					weightFemale: '49-55 lbs',
					weightMale: '49-55 lbs',
					fact: 'Records indicate the Norwegian Elkhound could have emerged as early as 5,000 B.C. Archeologists have found skeletons resembling the Norwegian Elkhound in the same sites where they have found Viking remains and weapons. This would make them one of the oldest dog breeds in the world.'
				},
				{
					id: 13,
					key: 'dogBreed',
					breedName: 'Golden Retriever',
					class: 'Sporting',
					colors: ['Dark Golden', 'Golden', 'Light Golden'],
					image: goldenRetriever,
					alt: 'Light Golden Retriever',
					lifeExpectancy: '10-12 years',
					weightFemale: '55-71 lbs',
					weightMale: '65-75 lbs',
					fact: 'Golden Retrievers in the U.S. have a high rate of cancer compared to many other breeds.The high rate of cancer in Goldens is a relatively recent development. Approximately 60% of Goldens will die of cancer.'
				},
				{
					id: 14,
					key: 'dogBreed',
					breedName: 'Nova Scotia Duck Tolling Retriever',
					class: 'Sporting',
					colors: ['Red', 'Red Gold'],
					image: toller,
					alt: 'Nova Scotia Duck Tolling Retriever',
					lifeExpectancy: '10-14 years',
					weightFemale: '37-44 lbs',
					weightMale: '44-51 lbs',
					fact: 'Tollers were created to employ an ingenious hunting method. They imitate the curious activity of foxes, whose color and quick movements exert a strange fascination over waterfowl. The sight of a Toller playing fetch along the shoreline arouses the curiosity of ducks offshore.'
				},
				{
					id: 15,
					key: 'dogBreed',
					breedName: 'English Cocker Spaniel',
					class: 'Sporting',
					colors: ['Black', 'Black & Tan', 'Black & White', 'Black White & Tan', 'Blue Roan', 'Blue Roan & Tan', 'Golden', 'Lemon Roan', 'Liver', 'Liver & Tan', 'Liver & White', 'Liver Roan', 'Liver Roan & Tan', 'Liver White & Tan', 'Orange & White', 'Orange Roan', 'Red', 'Red Roan'],
					image: cocker,
					alt: 'Liver Roan English Cocker Spaniel',
					lifeExpectancy: '12-15 years',
					weightFemale: '26-33 lbs',
					weightMale: '29-35 lbs',
					fact: 'These small spaniels were originally bred to hunt birds. They were especially skilled at hunting a type of bird called the woodcock. This is where the Cocker Spaniel\'s name comes from.'
				},
				{
					id: 16,
					key: 'dogBreed',
					breedName: 'Cairn Terrier',
					class: 'Terrier',
					colors: ['Black', 'Black Brindle', 'Brindle', 'Cream', 'Cream Brindle', 'Gray', 'Gray Brindle', 'Red', 'Red Brindle', 'Silver', 'Wheaten'],
					image: cairnTerrier,
					alt: 'Red Brindle Cairn Terrier',
					lifeExpectancy: '12-15 years',
					weightFemale: '13-18 lbs',
					weightMale: '13-18 lbs',
					fact: 'Cairn Terriers have front paws are well-padded and larger than their rear ones, a trait that gave them an advantage when digging in their pursuit of rodents.'
				},
				{
					id: 17,
					key: 'dogBreed',
					breedName: 'Jack Russell Terrier',
					class: 'Terrier',
					colors: ['White'],
					image: russellTerrier,
					alt: 'White Russell Terrier with Tan Markings',
					lifeExpectancy: '13-16 years',
					weightFemale: '14-18 lbs',
					weightMale: '14-18 lbs',
					fact: 'The JRT can leap five times its own height. That means a 12-inch-tall Jack can easily jump five feet in the air.'
				},
				{
					id: 18,
					key: 'dogBreed',
					breedName: 'Bernese Mountain Dog',
					class: 'Working',
					colors: ['Black Rust & White', 'Black Tan & White'],
					image: berner,
					alt: 'Bernese Mountain Dog',
					lifeExpectancy: '6-8 years',
					weightFemale: '79-110 lbs',
					weightMale: '84-110 lbs',
					fact: 'Berners have numerous health problems due to their small genetic foundation, and perhaps due to other reasons yet undiscovered. Currently, the life span of a Bernese Mountain Dog is comparatively short, about six to eight years, though in recent years, the life expectancy has gone up to about ten years. This may be due to more responsible breeding and regard for genetic conditions.'
				},
				{
					id: 19,
					key: 'dogBreed',
					breedName: 'Newfoundland',
					class: 'Working',
					colors: ['Black', 'Brown', 'Gray', 'White & Black'],
					image: newfie,
					alt: 'Two Newfoundland Dogs showing off their black and brown coats.',
					lifeExpectancy: '8-10 years',
					weightFemale: '99-120 lbs',
					weightMale: '130-150 lbs',
					fact: 'Newfoundlands have a knack for water rescue and a natural inclination towards rescuing struggling or drowning people from water. They have been known to brave treacherous water and dangerous conditions to pull people to safety.'
				},
				{
					id: 20,
					key: 'dogBreed',
					breedName: 'Doberman Pinscher',
					class: 'Working',
					colors: ['Black & Rust', 'Red & Rust'],
					image: dobie,
					alt: 'Red and Rust Doberman',
					lifeExpectancy: '10-13 years',
					weightFemale: '71-77 lbs',
					weightMale: '88-99 lbs',
					fact: 'The Doberman was developed by Karl Louis Dobermann. Dobermann was a tax collector and found himself walking with large sums of money at night in dangerous parts of town. He created the Doberman to be intimidating but refined.'

				},
				{
					id: 21,
					key: 'dogBreed',
					breedName: 'Shiba Inu',
					class: 'Non-Sporting',
					colors: ['Black & Tan', 'Cream', 'Red', 'Red Sesame'],
					image: shiba,
					alt: 'Red Sesame Shiba Inu',
					lifeExpectancy: '12-15 years',
					weightFemale: '15-20 lbs',
					weightMale: '18-24 lbs',
					fact: 'These tenacious hunters were bred to go after boars, birds, and bears. They also have dense undercoats, which allow them to withstand cold temperatures—a particularly helpful trait for a hunting dog.'
				}
			]
		}
	}

	toggleSelected(id, key){
		let temp = this.state[key]
		temp[id].selected = !temp[id].selected
		this.setState({
			[key]: temp
		})
	}

  render() {
    return (
      <div className="App">
				<div className='wrapper'>
					<div className='dogs'>
						

						<DogList 
							title='Click on the breed name to find out more!'
							breedInfo={this.state.dogInfo}
							toggleItem={this.toggleSelected}
						/>
					</div>
				</div>
      </div>
    );
  }
	
}
export default Dogs;

/*class Dogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDogInfo: false
		}
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle () {
		this.setState({
			showDogInfo: !this.state.showDogInfo
		})
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
		
		const name = dogInfo.map(function(dog) {
			return <h3>{dog.breedName}</h3>
		})
		return (
			<div>
				
				<button onClick={this.handleToggle}>{name}</button>
				{this.state.showDogInfo ? <Test dogInfo={dogInfo} /> : null }
				<DogsByClass dogInfo={dogInfo} onClick={this.handleToggle} />
			</div>
		)
	}
}
export default Dogs;*/


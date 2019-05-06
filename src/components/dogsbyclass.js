import React from 'react';
import './dogs.css';

class DogsByClass extends React.Component {

	render() {
		const { dogInfo } = this.props;
		return (
			<div>
				<div>
					<button onClick={this.props.handleToggle}>Here!</button>
					{this.props.dogInfo.breedName}
					<button onClick={this.handleToggle}>Click Me!</button>
					{this.props.dogInfo.breedName}
				</div>
				
				<div id="classCard1" className="classCard">
					<h3>Working Class:</h3>
					
						{dogInfo.filter(function(dog) {
						return dog.class === 'Working'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
					
				</div>

				<div id="classCard2" className="classCard">
					<h3>Toy Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Toy'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>

				<div id="classCard3" className="classCard">
					<h3>Sporting Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Sporting'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>

				<div id="classCard4" className="classCard">
					<h3>Non-Sporting Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Non-Sporting'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>

				<div id="classCard5" className="classCard">
					<h3>Terrier Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Terrier'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>

				<div id="classCard6" className="classCard">
					<h3>Hound Class:</h3>
					{dogInfo.filter(function(dog) {
						return dog.class === 'Hound'
					}).map(function(dog) {
						return <p>{dog.breedName}</p>
					})}
				</div>

				<div id="classCard7" className="classCard">
						<h3>Herding Class:</h3>
						{dogInfo.filter(function(dog) {
							return dog.class === 'Herding'
						}).map(function(dog) {
							return (<div>
								<p className="dog_breed_name">{dog.breedName}</p>
								<img  className="image_props" src={dog.image} alt={dog.alt} />
								<p className="image_caption">Image: {dog.alt}</p>
								<p><h4>Coat Colors: </h4>{dog.colors.map(function(color) {
									return (<p>{color}</p>)
								})}</p>
							</div>)					
						})}
					</div>

					{dogInfo.map(function(dog) {
						return (
							<div className="DogInfoCard">
								<h4>{dog.breedName}</h4>
								<img  className="image_props" src={dog.image} alt={dog.alt} />
								<p className="image_caption">Image: {dog.alt}</p>
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

// handleToggle(e) {
// 		this.props.dogInfo
// 		// const dog = e.target.value
// 		// this.props.onClick(dog)
// 		// console.log('handleToggle')
// 	}
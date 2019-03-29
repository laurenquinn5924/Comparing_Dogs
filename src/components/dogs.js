import React from 'react';
import './dogs.css';
import DogsByClass from './dogsbyclass';

class Dogs extends React.Component {

	render() {		
		return (
			<div>
				<DogsByClass />	
			</div>
		)
	}
}

export default Dogs;



// const dogList = ['Doberman', 'Cavalier King Charles Spaniel', 'Golden Retriever', 'Gordon Setter', 'Schnauzer', 'German Shepard', 'Cumberland Spaniel', 'Havanese', 'Japanese Chin', 'American Alsatian', 'Newfoundland', 'Bernese Mountain Dog', 'Swiss Mountain Dog', 'Australian Cattle Dog', 'Australian Shepard', 'Bloodhound']
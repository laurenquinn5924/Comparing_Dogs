import React from 'react';
import DogBreed from './DogBreed';

class DogList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: this.props.title
		};
	}

	toggleList(){
		this.setState(prevState => ({
			listOpen: !prevState.listOpen
		}));
	}

	render(){
		const { breedInfo } = this.props;
		const { headerTitle } = this.state;

		return(
			<div className='center_all_breeds'>
				<div className="filter_by_class">
					<h2>Working Class</h2>
					{
						<ul className="unbullet_list">
							{breedInfo.filter(dog => 
								dog.class === 'Working'
							).map(dog => (
								<DogBreed 
								breedName={dog.breedName}
								colors={dog.colors}
								image={dog.image}
								alt={dog.alt}		
								class={dog.class}						
							/>
							))}
						</ul>
					}
				</div>
				<div className="filter_by_class">
					<h2>Toy Class</h2>
					{
						<ul className="unbullet_list">
							{breedInfo.filter(dog => 
								dog.class === 'Toy'
							).map(dog => (
								<DogBreed 
								breedName={dog.breedName}
								colors={dog.colors}
								image={dog.image}
								alt={dog.alt}		
								class={dog.class}						
							/>
							))}
						</ul>
					}
				</div>
				<div className="filter_by_class">
					<h2>Terrier Class</h2>
					{
						<ul className="unbullet_list">
							{breedInfo.filter(dog => 
								dog.class === 'Terrier'
							).map(dog => (
								<DogBreed 
								breedName={dog.breedName}
								colors={dog.colors}
								image={dog.image}
								alt={dog.alt}		
								class={dog.class}						
							/>
							))}
						</ul>
					}
				</div>
				<div className="filter_by_class">
					<h2>Sporting Class</h2>
					{
						<ul className="unbullet_list">
							{breedInfo.filter(dog => 
								dog.class === 'Sporting'
							).map(dog => (
								<DogBreed 
								breedName={dog.breedName}
								colors={dog.colors}
								image={dog.image}
								alt={dog.alt}		
								class={dog.class}						
							/>
							))}
						</ul>
					}
				</div>
				<div className="filter_by_class">
					<h2>Non-Sporting Class</h2>
					{
						<ul className="unbullet_list">
							{breedInfo.filter(dog => 
								dog.class === 'Non-Sporting'
							).map(dog => (
								<DogBreed 
								breedName={dog.breedName}
								colors={dog.colors}
								image={dog.image}
								alt={dog.alt}		
								class={dog.class}						
							/>
							))}
						</ul>
					}
				</div>
				<div className="filter_by_class">
					<h2>Hound Class</h2>
					{
						<ul className="unbullet_list">
							{breedInfo.filter(dog => 
								dog.class === 'Hound'
							).map(dog => (
								<DogBreed 
								breedName={dog.breedName}
								colors={dog.colors}
								image={dog.image}
								alt={dog.alt}		
								class={dog.class}						
							/>
							))}
						</ul>
					}
				</div>
				<div className="filter_by_class">
					<h2>Herding Class</h2>
					{
						<ul className="unbullet_list">
							{breedInfo.filter(dog => 
								dog.class === 'Herding'
							).map(dog => (
								<DogBreed 
								breedName={dog.breedName}
								colors={dog.colors}
								image={dog.image}
								alt={dog.alt}		
								class={dog.class}						
							/>
							))}
						</ul>
					}
				</div>
					
				<div className='title' >{headerTitle}</div>
					{
						<ul className="unbullet_list" >
							{breedInfo.map(dog => (
								<DogBreed 
									breedName={dog.breedName}
									colors={dog.colors}
									image={dog.image}
									alt={dog.alt}		
									class={dog.class}						
								/>
							))}
						</ul>
					}

					
			</div>
		)
	}
}

export default DogList;
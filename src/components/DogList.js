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
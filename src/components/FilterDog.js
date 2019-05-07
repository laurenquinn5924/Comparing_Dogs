import React from 'react';

class FilterDog extends React.Component {
	state = {
		show: false
	};

	handleClick = () => {
		this.setState(prevState => {
			return {
				show: !prevState.show
			};
		});
	};

	render() {
		const { show } = this.state;
		return (
				<div className="breed_card">
						<img  src={this.props.image} alt={this.props.alt} className="breed_photo" />

					<li onClick={this.handleClick} className="breedName">
						{this.props.breedName}
						{show ? (
							<div>
								<p className='dog_info_header'>AKC Class: {this.props.class}</p>
								<ul className='unbullet_list'>
									
									<li className='dog_info_header'> Coat Colors:
										{this.props.colors.map(color => (
											<ul className='coat_colors_list'>
												<li>{color}</li>
											</ul>
										))}
									</li>
								</ul>
							</div>
						) : null }
					</li>
				</div>
		); 
	}
}

export default FilterDog;
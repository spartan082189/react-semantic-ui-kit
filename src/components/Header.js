import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Menu, Input } from 'semantic-ui-react';

export class Header extends Component {
	static propTypes = {
	};

	render() {
		return (
			<Container textAlign='center'>
				<Menu secondary>
					<Menu.Item name='home' active />
					<Menu.Item name='about' />
					<Menu.Item name='videos' />
					<Menu.Item name='pictures' />
					<Menu.Menu position='right'>
						<Menu.Item>
							<Input icon='search' placeholder='Search...' />
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Container>
		);
	}
}

const actions = {
};

const mapStateToProps = () => {
	return {
	};
};


export default connect(mapStateToProps, actions)(Header);

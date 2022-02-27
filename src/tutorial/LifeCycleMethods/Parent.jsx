import { Component } from 'react';
import LifeCycles from './LifeCycles';

class App extends Component {
	constructor() {
		super();

		this.state = {
			showChild: true,
			text: ''
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<button
						onClick={() =>
							this.setState((state) => ({
								showChild: !state.showChild
							}))
						}
					>
						Toggle LifeCycles
					</button>
					<button
						onClick={() =>
							this.setState((state) => ({
								text: state.text + '_hello'
							}))
						}
					>
						Update Text
					</button>
					{this.state.showChild ? <LifeCycles text={this.state.text} /> : null}
				</header>
			</div>
		);
	}
}

export default App;

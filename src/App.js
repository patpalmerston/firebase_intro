import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			newData: ''
		};
		// arbitraty name
		this.dataRef = null;

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.dataRef = database.ref();

		this.dataRef.on('value', snapshot => {
			console.log('child_added', snapshot.val());
			this.setState({
				data: snapshot.val()
			});
		});
	}

	handleChange(event) {
		const newData = event.target.value;
		this.setState({
			newData
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.dataRef = database
			.ref('/wowowow/lolol/hehehe')
			// database.ref('/AMAZINGNEWDATA')
			// .ref()
			// .child('AMAZINGNEWDATA') -- two ways of writing the same thing
			.push(this.state.newData);
	}

	render() {
		return (
			<div className='App'>
				<div className='App--header'>
					<h2>Welcome to React and Firebase</h2>
				</div>
				<pre className='App--data'>
					{JSON.stringify(this.state.data, null, 2)}
				</pre>
				<form className='App--form' onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={this.state.newData}
						onChange={this.handleChange}
					/>

					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default App;

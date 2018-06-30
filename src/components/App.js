import './App.css';
import React from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import uuid from 'uuid';
import Title from './Title';
import Input from './Input';
import TodoList from './TodoList';
import ToggleAll from './ToggleAll';
import Footer from './Footer';
import Info from './Info';

const createTodo = label => ({
	id: uuid(),
	label: label.trim(),
	completed: false
});

class App extends React.Component {

	state = {
		list: []
	};

	addItem = label => {
		if (label) {
			this.setState({
					list: [...this.state.list, createTodo(label)]
				}
			);
		}
	};

	editTodo = editedItem => {
		this.setState(prevState => {
			return {
				list: prevState.list.map(todo => todo.id == editedItem.id ? editedItem : todo)
			}
		})
	};

	toggleAll = event => {
		const completed = event.target.checked;

		this.setState(prevState => {
			return {
				list: prevState.list.map(item => ({...item, completed}))
			};
		});
	};

	toggleTodo = id => {
		this.setState(prevState => {
			return {
				list: prevState.list.map(item => ({
					...item,
					completed: item.id === id ? !item.completed : item.completed
				}))
			}
		});
	};

	removeTodos = ids => {
		ids = ids.length ? ids : [ids];

		this.setState(prevState => {
			return {
				list: prevState.list.filter(item => !ids.includes(item.id))
			}
		});
	};

	clearCompleted = () => {
		this.setState(prevState => {
			return {
				list: prevState.list.filter(todo => !todo.completed)
			}
		});
	};

	getFilteredList = filter => {
		let predicate;
		switch (filter) {
			case "active":
				predicate = todo => !todo.completed;
				break;
			case "completed":
				predicate = todo => todo.completed;
				break;
			case "all":
				predicate = () => true;
				break;
		}
		return this.state.list.filter(predicate);
	};

	render() {
		const nbrOfIncompleteTodos = this.state.list.filter(todo => !todo.completed).length;
		const isThereCompletedTodo = this.state.list.some(todo => todo.completed);

		return (
			<Router>
				<React.Fragment>
					<section className="todoapp">
						<Title />
						<Input onEnter={this.addItem}/>

						{this.state.list.length > 0 &&
						<section className="main">
							<ToggleAll onToggleAll={this.toggleAll}/>
							<Switch>
								<Redirect exact from="/" to="/all"/>
								<Route path="/:filter" render={
									({match}) => <TodoList todos={this.getFilteredList(match.params.filter)}
														   removeTodo={this.removeTodos}
														   toggleTodo={this.toggleTodo} editTodo={this.editTodo}/>
								}/>
							</Switch>
						</section>
						}

						{this.state.list.length > 0 &&
						<Footer nbrOfIncompleteTodos={nbrOfIncompleteTodos}
								clearCompleted={this.clearCompleted}
								isThereCompletedTodo={isThereCompletedTodo}/>
						}

					</section>
					<Info/>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateTodo from './createTodo.component';
import TodoList from './todoList.component';
import EditTodo from './editTodo.component';
import logo from '../logo.svg'

class Main extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <nav className='navbar navbar-expand-md lg navbar-dark bg-dark'>
                        <a className='navbar-brand' href='https://www.github.com/lavish-jain/ToDo-mern-microservice' rel="noopener noreferrer" target='_blank'>
                            <img src={logo} width='30' height='30' alt='Github Repository'/>
                        </a>
                        <Link to='/' className='navbar-brand'>TODO</Link>
                        <div className='collapse navbar-collapse'>
                            <ul className='navbar-nav mr-auto'>
                                <li className='navbar-item'>
                                    <Link to='/' className='nav-link'>Todos</Link>
                                </li>
                                <li className='navbar-item'>
                                    <Link to='/create' className='nav-link'>Create</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path='/' exact component={TodoList} />
                    <Route path='/edit/:id' exact component={EditTodo} />
                    <Route path='/create' exact component={CreateTodo} />
                </div>
            </Router>
        )
    }
}

export default Main;
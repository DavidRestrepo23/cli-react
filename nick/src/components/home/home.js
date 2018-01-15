import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import './home.css';
class Home extends Component {

    render() {
        return (
            <div className="page home">
                <header>
                    <div className="hero-unit">
                        <div className="react-logo" />
                        <h1>Nick React boilerplate</h1>
                    </div>
                    <div className="hero-subunit">
                        <h4>
                            This template was generated by nick-react-create. A starter template with routing, protected routes, state management and data-fetching.
                        </h4>
                    </div>
                    <div className="github-buttons">
                        <a
                            href="https://github.com/nickverstocken/generated-react-boilerplate"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Download boilerplate from GitHub
                        </a>
                    </div>
                </header>
                <main>
                    <div className="section-header">
                        <h3>Included libraries</h3>
                        <hr />
                    </div>
                    <div className="boilerplate-item">
                        <div className="boilerplate-logo react" />
                        <div className="boilerplate-item-content">
                            <a
                                href="https://facebook.github.io/react/"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <h4>React</h4>
                            </a>
                            <small>UI Library</small>
                            <p>
                                A JavaScript library for building user interfaces.
                            </p>
                        </div>
                    </div>
                    <div className="boilerplate-item">
                        <div className="boilerplate-logo mobx" />
                        <div className="boilerplate-item-content">
                            <a
                                href="https://mobx.js.org/"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <h4>MobX</h4>
                            </a>
                            <small>Reactive State Management</small>
                            <p>
                                Simple, scalable state management
                            </p>
                        </div>
                    </div>
                    <div className="boilerplate-item">
                        <div className="boilerplate-logo reactrouter" />
                        <div className="boilerplate-item-content">
                            <a
                                href="https://reacttraining.com/react-router/"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <h4>React Router 4</h4>
                            </a>
                            <small>Routing Library</small>
                            <p>
                                Declarative routing for React
                            </p>
                        </div>
                    </div>
                    <div className="boilerplate-item">
                        <div className="boilerplate-logo sass" />
                        <div className="boilerplate-item-content">
                            <a href="http://webpack.github.io/"
                               target="_blank" rel="noopener noreferrer"
                            >
                                <h4>Sass</h4>
                            </a>
                            <small>Css Extension</small>
                            <p>
                                CSS with superpowers
                            </p>
                        </div>
                    </div>
                    <div className="section-header extras">
                        <h4>Extras</h4>
                        <hr />
                        <ul>
                            <li>✓ Async Component Loading</li>
                            <li>✓ Sass compatibility with hot reloading</li>
                            <li>✓ Code-splitting</li>
                        </ul>
                    </div>
                </main>
            </div>
        );
    }
}

export default (inject('store')) (observer(Home));
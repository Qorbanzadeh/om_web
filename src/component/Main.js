import React, { Component } from 'react';
import { Tab, Form } from 'semantic-ui-react';
import Location from './Tabs/Location';
import Background from '../assets/background.webp';


class Main extends Component {

    state = {
        color: 'red',
    };

    render() {

        let color = this.state.color;

        const panes = [
            {
                menuItem: { key: 'location', content: 'Location', icon: 'location arrow' },
                render: (
                ) => <Tab.Pane attached={false}><Location /></Tab.Pane>,
            },
            {
                menuItem: { key: 'history', content: 'History', icon: 'history' },
                render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
            },
            {
                menuItem: { key: 'profile', content: 'Profile', icon: 'users' },
                render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
            }
        ];

        return (
            <div>
                <div style={{ backgroundImage: `url(${Background})`, width: '100%', height: '300px' }} ></div>
                <div style={{ position: 'relative', top: '-190px' }} className='content' >
                    <h2 style={{ color: 'white', fontSize: '23px' }}>Whats your destination?</h2>
                    <Tab menu={{ color, attached: false }} panes={panes} />
                </div>
            </div >
        );

    }
}

export default Main;

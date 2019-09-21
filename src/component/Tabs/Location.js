import React, { Component } from 'react';
import { Button, Icon, Form, Select } from 'semantic-ui-react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';
import Passengers from './components/Passengers';

class Location extends Component {

    state = {
        date: '',
        source: '',
        destination: '',
        rotate: 0,
    }

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    handleRotate = () => {
        if (this.state.rotate) {
            this.setState({
                rotate: 0,
            })
        }
        else {
            this.setState({
                rotate: 1,
            })
        }
    }


    render() {

        const countryOptions = [
            { key: 'oneway', value: 'oneway', text: 'One way' },
            { key: 'roundtrip', value: 'roundtrip', text: 'Round Trip' },
        ];

        return (
            <div className='Location'  >
                <Form>
                    <Form.Field>
                        <div style={{ textAlign: 'right', margin: '10px' }} >
                            <span style={{ fontSize: '17px', marginRight: '7px', color: '#5f5f5f', fontWeight: 'bold' }} >14</span>
                            <Passengers />
                        </div>
                        <Select placeholder='Select your direction type' options={countryOptions} />
                    </Form.Field>
                    <Form.Field style={{ 'position': 'relative' }} >
                        <input placeholder='from: City, Station or Airport' />
                        <button onClick={this.handleRotate} style={{
                            position: 'absolute',
                            top: '20px',
                            right: '40px',
                            borderRadius: '50%',
                            padding: '11px',
                            borderStyle: 'none',
                            boxShadow: '0 0 4px 1px grey',
                            background: 'white',
                            outline: 'none',
                            cursor: 'pointer',
                            transition: '1s',
                            transform: this.state.rotate ? 'rotate(180deg)' : 'rotate(0)',
                        }}  >
                            <Icon style={{ 'margin': '0px' }} cicircular inverted color='black' name='refresh' />
                        </button>
                    </Form.Field>
                    <Form.Field>
                        <input placeholder='to: City, Station or Airport' />
                    </Form.Field>
                    <Form.Field>

                        <DateInput
                            name="date"
                            placeholder="Date"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                        />

                    </Form.Field>
                    <div style={{ 'textAlign': 'center' }} >
                        <Button style={{ 'width': '200px' }} negative type='submit'>Search</Button>
                    </div>
                </Form>
            </div >
        );

    }
}
export default Location;
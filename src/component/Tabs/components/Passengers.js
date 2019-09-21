
import React, { Component } from 'react';
import { Header, Icon, Modal } from 'semantic-ui-react';

class Passegers extends Component {

    render() {

        return (


            <Modal trigger={<Icon name='address card' size='big' />}>
                <Modal.Header>Select passegers</Modal.Header>
                <Modal.Content style={{ width: 'auto' }} >
                    <Modal.Description>

                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );

    }
}

export default Passegers;

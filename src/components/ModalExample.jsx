import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  render() {
    const pars = [];

    for (let ind = 0; ind < 10; ind++) {
      pars.push(
        <p key="key">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>,
      );
    }
    return (
      <div>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
          size="lg">
          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <img width="100%" src="/images/13.jpg" />
            <b>Subtitle</b>
            <br />
            {pars}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;

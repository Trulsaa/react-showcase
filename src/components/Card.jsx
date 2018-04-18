import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import ModalExample from './ModalExample';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={`/images/${this.randomNumber(12)}.jpg`}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button color="danger" onClick={this.toggle}>
              Click me
            </Button>
          </CardBody>
        </Card>
        <ModalExample modal={this.state.modal} toggle={this.toggle} />
      </div>
    );
  }
}

export default Article;

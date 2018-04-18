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

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={`https://picsum.photos/200/130?image=${this.props.index +
              974}`}
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
        <ModalExample
          modal={this.state.modal}
          toggle={this.toggle}
          imgUrl={`https://picsum.photos/500/325?image=${this.props.index +
            974}`}
        />
      </div>
    );
  }
}

export default Article;

import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class FormExample extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input
            type="number"
            name="number"
            id="exampleNumber"
            placeholder="number placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Country 1</option>
            <option>Country 2</option>
            <option>Country 3</option>
            <option>Country 4</option>
            <option>Country 5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple>
            <option>Avdeling 1</option>
            <option>Avdeling 2</option>
            <option>Avdeling 3</option>
            <option>Avdeling 4</option>
            <option>Avdeling 5</option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Great option 1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Great option 2
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Disabled option
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    );
  }
}

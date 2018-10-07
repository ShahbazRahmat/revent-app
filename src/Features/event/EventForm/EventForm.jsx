import React, { Component } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';

class EventForm extends Component {
  state = {
    event: {
      title: "",
      city: "",
      date: "",
      venue: "",
      hostedBy: ""
    }
  }

onInputChange = (evt) => 
{
  const newEvent = this.state.event;
  newEvent[evt.target.name]= evt.target.value;
  this.setState({
    event: newEvent
  });
}

  onFormSubmited = (e) =>
  {
    e.preventDefault();
    this.props.createEvent(this.state.event);
  }

  render() {
      const { handleCancel } = this.props;
      const { title, date, city, venue, hostedBy } = this.state.event;
    return (
            <Segment>
              <Form onSubmit={this.onFormSubmited}>
                <Form.Field>
                  <label>Event Title</label>
                  <input name="title" onChange={this.onInputChange} value={title} placeholder="Event title" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input name="date" onChange={this.onInputChange} value={date} type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input name="city" onChange={this.onInputChange} value={city} placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input name="venue" onChange={this.onInputChange} value={venue} placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input name="hostedBy" onChange={this.onInputChange} value={hostedBy} placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button onClick={handleCancel} type="button">Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default EventForm;

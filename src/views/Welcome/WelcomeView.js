import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { Grid, Button, Container, Statistic } from 'semantic-ui-react';
import { increment, decrement, fetchTodos } from '../../reducers/counter';

export class WelcomeView extends Component {
  static propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    fetchTodos: PropTypes.func,
    count: PropTypes.number
  }
  componentDidMount () {
    const { fetchTodos } = this.props;
    fetchTodos();
    console.log(process.env.NODE_ENV);
  }

  render() {
    const { increment, decrement, count } = this.props;
    return (
      <Container textAlign='center'>
        <Grid relaxed>
          <Grid.Row>
            <Grid.Column>
              <h1 as='h1'>React Semantic UI Starter Kit w/ Redux</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid relaxed>
          <Grid.Row>
            <Grid.Column>
              <Statistic.Group>
                <Statistic style={{width: '100%'}}>
                  <Statistic.Value>{count}</Statistic.Value>
                  <Statistic.Label>Counter</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2} relaxed>
          <Grid.Row>
            <Grid.Column>
              <Button primary onClick={() => increment(1)}>Increment</Button>
            </Grid.Column>
            <Grid.Column>
              <Button secondary onClick={() => decrement(1)}>Decrement</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const actions = {
  increment,
  decrement,
  fetchTodos
};

const mapStateToProps = (state) => {
  const counter = fromJS(state).get('counter');
  const count = counter.get('count');
  return {
    count: count
  };
};


export default connect(mapStateToProps, actions)(WelcomeView);

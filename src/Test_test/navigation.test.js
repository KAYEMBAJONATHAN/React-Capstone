import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Component/Navigation';

describe('Navigation', () => {
  it('Should renders correctly', () => {
    const component = renderer.create(
      <Router>
        <Navigation />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

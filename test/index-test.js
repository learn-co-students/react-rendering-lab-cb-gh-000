const React = require('react');
const { shallow } = require('enzyme');

const Rating = require('../components/Rating');
const Circle = require('../components/Circle');
const Animation = require('../components/Animation');
const Pikachu = require('../components/Pikachu');


describe('Rating', () => {
  it('sets the increasing state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: 2 });
    expect(wrapper.state()).toEqual({ increasing: true, decreasing: false });
  });

  it('sets the increasing state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: -4 });
    expect(wrapper.state()).toEqual({ increasing: false, decreasing: true });
  });

  it('sets the stable state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: 1 });
    expect(wrapper.state()).toEqual({ increasing: false, decreasing: false });
  });
});

describe('Circle', () => {
  it('does not re-render when the same color is passed in twice', () => {
    const spy = expect.spyOn(Circle.prototype, 'render').andCallThrough();
    const wrapper = shallow(<Circle color='red' />);
    wrapper.setProps({ color: 'red' });
    expect(spy.calls.length).toEqual(1);
  });
});

describe('Animation', () => {
  it('triggers the loading bar when a rerender is about to take place ', () => {
    const spy = expect.spyOn(Animation.prototype, 'showLoadingBar');
    const wrapper = shallow(<Animation />);
    wrapper.instance().componentWillUpdate();
    expect(spy.calls.length).toEqual(1);
  });
});

describe('Pikachu', () => {
  it('calls the function to resize the pikachu whenever the component re-renders', () => {
    const spy = expect.spyOn(Pikachu.prototype, 'resizePikachu');
    const wrapper = shallow(<Pikachu />);
    wrapper.instance().componentDidUpdate();
    expect(spy.calls.length).toEqual(1);
  });
});

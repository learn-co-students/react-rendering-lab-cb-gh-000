const React = require('react');
const { shallow } = require('enzyme');

const Translation = require('../components/Translation');


describe('Translation', () => {
  it('translates the new greeting code when one gets passed in from the props', () => {
    const wrapper = shallow(<Translation />);
    wrapper.setProps({ greetingCode: 'morning' });
    expect(wrapper.state().greeting).toEqual('Good morning!');
  });

  it('does not translate the new greeting code if it is the same as the previous greeting code', () => {
    const spy = expect.spyOn(Translation.prototype, 'translate');
    const wrapper = shallow(<Translation />);
    wrapper.setProps({ greetingCode: 'morning' });
    wrapper.setProps({ greetingCode: 'morning' });
    expect(spy.calls.length).toEqual(1);
    Translation.prototype.translate.restore();
  });
});
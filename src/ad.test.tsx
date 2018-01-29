import '@sortable/ads';
import 'jsdom-global/register';
import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import { assert } from 'chai';
import { Ad, TimeRefreshAd } from './index';
import { configure, mount } from 'enzyme';
import * as sinon from 'sinon';

configure({ adapter: new Adapter() });
const clock = sinon.useFakeTimers();

describe('Ad', () => {
  it('mount will request ad', async () => {
    const wrapper = mount(<Ad id="div-id"/>);
    assert.isTrue(wrapper.contains(<div id='div-id'/>));
    assert.sameMembers(sortableads.getRequestedElementIds(), ['div-id']);
    wrapper.unmount();
  });

  it('destroys the old div and requests ads for the new div', () => {
    const wrapper = mount(<Ad id="div-id"/>);
    wrapper.setProps({id: 'new-div-id'});
    assert.isTrue(wrapper.contains(<div id='new-div-id'/>));
    assert.sameMembers(sortableads.getRequestedElementIds(), ['new-div-id']);
    wrapper.unmount();
  });
});

describe('Time Refresh Ad', () => {
  it('mount will request ad', async () => {
    const wrapper = mount(<TimeRefreshAd id="div-id" interval={1}/>);
    assert.sameMembers(sortableads.getRequestedElementIds(), ['div-id']);
    wrapper.unmount();
  });

  it('destroys the old div and requests ads for the new div', () => {
    const wrapper = mount(<Ad id="div-id"/>);
    wrapper.setProps({id: 'new-div-id'});
    assert.sameMembers(sortableads.getRequestedElementIds(), ['new-div-id']);
    wrapper.unmount();
  });

  it('requests a new ad after 1 second', async () => {
    const wrapper = mount(<TimeRefreshAd id="div-id" interval={1}/>);
    assert.equal(wrapper.state().refreshCount, 0);
    assert.sameMembers(sortableads.getRequestedElementIds(), ['div-id']);

    clock.tick(1100);

    assert.equal(wrapper.state().refreshCount, 1);
    wrapper.unmount();

  });
});

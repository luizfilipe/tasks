import React from 'react'
import { Provider } from 'react-redux'
import Enzime, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Form } from './index'
import { Button } from './styles'
import { store } from '../../../../store'

Enzime.configure({ adapter: new Adapter() })

describe('<Form /> and components', () => {
  it('fields was changed', () => {
    const wrapper = mount(<Provider store={store}>
      <Form />
    </Provider>)
    const inputs = wrapper.find('input')
    inputs.at(0).simulate('change', { target: { value: 'Test Title' } })
    inputs.at(1).simulate('change', { target: { value: 'Test Description' } })
    expect(inputs.at(0).getDOMNode().value).toBe('Test Title')
    expect(inputs.at(1).getDOMNode().value).toBe('Test Description')
  })

  it('simulates click change status', () => {
    const click = jest.fn()

    const component = <Button onClick={click}>
      Button
    </Button>
    mount(component).simulate('click')
    expect(click).toBeCalled()
  })
})



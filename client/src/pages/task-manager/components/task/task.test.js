import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { store } from '../../../../store'
import { Task } from './index'
import { Button } from './styles'

Enzyme.configure({ adapter: new Adapter() })

describe('<Task /> and components', () => {
  it('checking props', () => {
    const task = {
      title: 'Test 1',
      description: 'Test 1 Description',
      status: 'In Progress',
      id: 1
    }
    const component = <Provider store={store}>
      <Task {...task} />
    </Provider>
    const wrapper = mount(component)
    expect(wrapper.find(Task).props().title).toBe(task.title)
    expect(wrapper.find(Task).props().description).toBe(task.description)
    expect(wrapper.find(Task).props().status).toBe(task.status)
    expect(wrapper.find(Task).props().id).toBe(task.id)
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


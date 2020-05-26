import React, { useState } from 'react'
import { debounce, camelCase } from 'lodash'
import Popover, { ArrowContainer } from 'react-tiny-popover'
import { Button, Content, Hover, Title } from './styles'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../../../services/tasks'

export const Task = ({ title, description, id, status, statuses }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const getStatusDecorator = () => statuses[camelCase(status)]

  const updateStatus = debounce(() => {
    if (!loading) {
      setLoading(true)
      changeStatus(dispatch, {
        id,
        description,
        title,
        status: getStatusDecorator().next
      }).then(() => setLoading(false))
    }
  }, 300)

  return <>
    <Popover
      isOpen={isOpen}
      position={'right'}
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor={'black'}
          arrowSize={5}
          arrowStyle={{ opacity: 0.75 }}
        >
          <Hover>{description}</Hover>
        </ArrowContainer>
      )}
    >
      {ref => (
        <Content
          ref={ref}
          status={status}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Title status={status}>
            {title || 'Untitled'}
          </Title>
          <Button onClick={updateStatus} loading={loading ? 1 : 0}>
            {statuses && getStatusDecorator()?.updateLabel}
          </Button>
        </Content>
      )}
    </Popover>

  </>
}

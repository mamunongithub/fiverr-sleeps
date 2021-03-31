import React from 'react'
import SleepsPageTemplate from '../../templates/sleeps-template-page'

const SleepsPagePreview = ({ entry }) => (
  <SleepsPageTemplate title={entry.getIn(['data', 'title'])} />
)

export default SleepsPagePreview

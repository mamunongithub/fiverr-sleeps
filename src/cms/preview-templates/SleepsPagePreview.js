import React from 'react'
import SleepsPageTemplate from '../../templates/sleeps-template-page'

export default function SleepsPagePreview({ entry }) {
  return <SleepsPageTemplate data={entry.getIn(['data']).toJS()} />
}

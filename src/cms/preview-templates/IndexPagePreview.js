import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

export default function IndexPagePreview({ entry }) {
  return <IndexPageTemplate data={entry.getIn(['data']).toJS()} />
}

import React from 'react'
import { FooterTemplate } from '../../components/Footer'

export default function FooterPreview({ entry }) {
  return <FooterTemplate data={entry.getIn(['data']).toJS()} />
}

import React from 'react'
import { FooterTemplate } from '../../components/Footer'

export default function FooterPreview({ entry }) {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <FooterTemplate
        section1={data.section1}
        section2={data.section2}
        section3={data.section3}
        section4={data.section4}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

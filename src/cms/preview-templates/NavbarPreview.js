import React from 'react'
import { NavbarTemplate } from '../../components/Navbar'

export default function NavbarPreview({ entry }) {
  return <NavbarTemplate data={entry.getIn(['data']).toJS()} />
}

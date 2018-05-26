import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DesktopContainer from '../component/DesktopContainer'
import MobileContainer from '../component/MobileContainer'


export const ResponsiveContainer = ({ children, path, heading }) => (
    <div>
      <DesktopContainer path={path} heading={heading}>{children}</DesktopContainer>
      <MobileContainer  path={path} heading={heading}>{children}</MobileContainer>
    </div>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }
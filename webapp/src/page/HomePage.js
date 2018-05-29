import React, { Component } from 'react'
import PageLayout from '../component/PageLayout'
import Footer from '../component/Footer'
import FeedList from '../component/FeedList'

class HomePage extends Component{

  render() {
    const { match } = this.props;
    return (
      <PageLayout path={match.path}>
        <FeedList/>
      </PageLayout>
    )
  }
}


export default HomePage
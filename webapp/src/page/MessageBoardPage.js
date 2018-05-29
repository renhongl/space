import React, { Component } from 'react'
import PageLayout from '../component/PageLayout'
import CommentList from '../component/CommentList'

const styles = {
  commentListContainer: {
    width: '100%',
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50
  }
}

class HomePage extends Component{

  render() {
    const { match, Target } = this.props;
    return (
      <PageLayout path={match.path}>
        <div style={styles.commentListContainer}>
          <CommentList Target={Target}/>
        </div>
      </PageLayout>
    )
  }
}


export default HomePage
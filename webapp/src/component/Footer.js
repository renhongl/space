import React, { Component } from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react'

export default class Footer extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        <Header inverted as='h4' content='关于' />
                        <List link inverted>
                            <List.Item as='a'>柚子</List.Item>
                            <List.Item as='a'>蘑菇</List.Item>
                        </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                        <Header inverted as='h4' content='联系' />
                        <List link inverted>
                            <List.Item as='a'>QQ: 1075220132</List.Item>
                            <List.Item as='a'>邮箱: 1075220132@qq.com</List.Item>
                        </List>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        )
    }
}

import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import axios from 'axios'
import { URL } from '../config/url'
import { message } from 'antd'
import { Status } from '../config/constant'

export default class CommentList extends React.Component{
	constructor(props) {
		super(props);
		this.userObj = JSON.parse(window.sessionStorage.getItem('userObj'));
		this.state = {
			list: [],
			showReply: false,
			replyId: '',
			message: ''
		}
	}

	sortListByDate(list) {
		return list;
	}

	updateList() {
		axios.get(URL.MESSAGE_BOARD, {
			params: {
			  userName: this.props.Target.targetUser
			}
		  }).then(result => {
			if (result.data.status === Status.SUCCESS) {
				let list = this.sortListByDate(result.data.result);
				this.setState({
					list: list
				})
			}
		}).catch(err => {
			message.error(JSON.stringify(err));
		}) 
	}

	componentDidMount() {
		this.updateList();
	}

	onMessageChage = (e, textarea) => {
		this.setState({
			message: textarea.value
		})
	}

	onTargetUserClick = (value) => {
		this.props.Target.changeTarget(value);
	}

	onSubmit = () => {
		let postData = {
			userName: window.sessionStorage.getItem('targetUser'),
			author: this.userObj.userName,
			datetime: new Date().toISOString(),
			avatar: this.userObj.userIcon,
			parentReplyId: '',
			text: this.state.message
		}
		axios.post(URL.MESSAGE_BOARD, postData).then(result => {
			if (result.data.status === Status.SUCCESS) {
				this.textarea = '';
				message.success('留言成功。');
				this.updateList();
			}
		}).catch(err => {
			message.error(JSON.stringify(err));
		})
		
	}
	
	onReply = (id) => {
		if (this.state.replyId !== id) {
			this.setState({
				showReply: true,
				replyId: id
			})
		} else {
			this.setState({
				showReply: false,
				replyId: ''
			})
		}
	}
	
	getCommentList(list) {
		return list.map((v, k) => {
			if (this.state.showReply && v.replyId === this.state.replyId) {
				return (
					<Comment.Group key={k}>
                            <Comment>
                    <Comment.Avatar src={v.avatar} />
                    <Comment.Content>
                        <Comment.Author as='a' onClick={() => this.onTargetUserClick(v.author)}>{v.author}</Comment.Author>
                        <Comment.Metadata>
                        <div>{v.datetime}</div>
                        </Comment.Metadata>
                        <Comment.Text>{v.text}</Comment.Text>
                        <Comment.Actions>
                        <Comment.Action onClick={() => this.onReply(v.replyId)}>回复</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                                {v.reply ? this.getCommentList(v.reply) : null}
                    </Comment>
					<Form reply>
						<Form.TextArea placeholder={`给${v.author}回复:`}/>
						<Button content='回复' labelPosition='left' icon='edit' primary />
					</Form>
						</Comment.Group>
					
		)
			} else {
				return (
					<Comment.Group key={k}>
                            <Comment>
                    <Comment.Avatar src={v.avatar} />
                    <Comment.Content>
                        <Comment.Author as='a'  onClick={() => this.onTargetUserClick(v.author)}>{v.author}</Comment.Author>
                        <Comment.Metadata>
                        <div>{v.datetime}</div>
                        </Comment.Metadata>
                        <Comment.Text>{v.text}</Comment.Text>
                        <Comment.Actions>
                        <Comment.Action onClick={() => this.onReply(v.replyId)}>回复</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                                        {v.reply ? this.getCommentList(v.reply) : null}
                    </Comment>
						</Comment.Group>
		)
			}
		})
	}
	
	render() {
		const commentList = this.getCommentList(this.state.list);
		return (
			<Comment.Group>
				<Form reply>
						<Form.TextArea onChange={this.onMessageChage} />
						<Button content='留言' labelPosition='left' icon='edit' primary onClick={this.onSubmit}/>
					</Form>
				<Header as='h3' dividing>全部留言</Header>
					{commentList}
				</Comment.Group>
			)
	}
}

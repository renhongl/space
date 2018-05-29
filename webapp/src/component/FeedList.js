
import { Feed } from 'semantic-ui-react'
import React from 'react'

export default class FeedList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			events: [{
				date: '1小时前',
				image: 'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
				meta: '4 喜欢',
				summary: 'renhong添加蘑菇为好友',
			}, {
				date: '4天前',
				image: 'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
				meta: '1 喜欢',
				summary: '沙巴真好玩',
				extraText: '我们一成不变的生活，并不是好的状态。我们一成不变的生活，并不是好的状态。我们一成不变的生活，并不是好的状态。我们一成不变的生活，并不是好的状态。',
				extraImages: [
					'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
					'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
				],
			}, {
				date: '3 天前',
				image: 'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
				meta: '8 喜欢',
				summary: '关于旅行',
				extraText: "我们一成不变的生活，并不是好的状态。我们一成不变的生活，并不是好的状态。我们一成不变的生活，并不是好的状态。我们一成不变的生活，并不是好的状态。我们一成不变的生活，并不是好的状态。",
			}, {
				date: '4 天前',
				image: 'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
				meta: '41 喜欢',
				summary: '学习也是一种乐趣',
				extraText: '去图书馆看看书,一天就过去了',
				extraImages: [
					'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
					'https://react.semantic-ui.com/assets/images/avatar/small/justen.jpg',
				],
			}]
		}
	}
	
	render() {
		return (
			<Feed events={this.state.events} />
		)
	}
}


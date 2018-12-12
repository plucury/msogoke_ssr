import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { autobind } from 'core-decorators'

import Tloader from '../Dist/react-touch-loader';

import { getHomeData } from '../Action/homeData';

import PostItem from '/templates/PostItem';
import './IndexPage.sass'


@connect(
	state => (
		{
			...state.homeData,
			loginedSogoker: {
				...state.userData
			}
		}),
	dispatch => ({
			getHomeData: bindActionCreators(getHomeData, dispatch)
		})
)

export default class IndexPage extends React.Component {
	constructor(props){
		super(props);

		this.state = {
            initializing: 0,
            showed: false
		}

		// this.refresh = this.refresh.bind(this)
		// this.loadMore = this.loadMore.bind(this)
	}

	componentDidMount(){
		const { token } = this.props.loginedSogoker
		const { dataGeted, homeData } = this.props

		if (token) {
			if ( !(dataGeted && homeData && homeData.length) ) {
				var req = `/api/streams/activities/?token=${token}`
					this.props.getHomeData(req, 1);
			}
		}else{
			browserHistory.push('/')
		}
	}

	@autobind
	refresh(resolve, reject){
		const { token } = this.props.loginedSogoker
		var req = `/api/streams/activities/?token=${token}`
		let result = this.props.getHomeData(req, 1, true)
		result.then(data => {
			data.status == 1 ?
				resolve() : reject()
		})
	}

	componentWillUpdate(newProps){
		return newProps !== this.props
	}

	componentWillReceiveProps(newProps){
		const { page } = this.state
		if (newProps.loginedSogoker && newProps.loginedSogoker.id) {
			return newProps != this.props
		}else{
			browserHistory.push('/')
		}
	}

	@autobind
	loadMore(resolve){
		const { hasMore, page } = this.props
		const { token } = this.props.loginedSogoker
		if (hasMore) {
			let req = `/api/streams/activities/?token=${token}`
			let result = this.props.getHomeData(req, page+1)
			result.then(data => {
				data.status == 1 ?
					resolve() : resolve()
			})
		}else{
			
		}
	}

	render() {
		let { homeData, hasMore } = this.props
        let { initializing, showed } = this.state
        let { refresh, loadMore } = this

		return (
			<div className="bg-gray pos-r">
				<div className="tloader-wrapper pure-g">
					<Tloader page="home" className="t-loader" onRefresh={refresh} onLoadMore={loadMore} hasMore={hasMore} initializing={initializing}>

					{
						homeData && homeData.length ?
						<div className="index-block">
							<div className="post-wrap">
							{
								homeData.map((item, index) => <PostItem key={index} { ...item } />)
							}
							</div>
							
						</div>
						: ''
					}

					{
						!hasMore ? <FootBlock /> : ''
					}

					</Tloader>
				</div>
			</div>
		)
	}
}

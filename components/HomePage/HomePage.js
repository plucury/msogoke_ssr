import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Tloader from '/static/react-touch-loader';

// import Tloader from '../Dist/react-touch-loader';

import { getHomeDataAction } from '/redux/actions/homePage';

import PostItem from '../templates/PostItem/PostItem';
// import HeadBar from './HeadBar/HeadBar'
// import FootBlock from './FootBlock'
// import CreationPost from './Creations/CreationPost';
// import './HomePage.scss'
// import 'styles/HomePage/style.scss'

class IndexPage extends React.Component {

	constructor(props){
		super(props);

		this.state = {
            initializing: 0,
            showed: false
		}

		this.refresh = this.refresh.bind(this)
		// this.loadMore = this.loadMore.bind(this)
	}

	componentDidMount(){

		

		// let token
		// // const { token } = this.props.loginedSogoker
		// const { dataGeted, homeData } = this.props

		// if (token) {
		// 	// if ( !(dataGeted && homeData && homeData.length) ) {
		// 	// 	var req = `/api/streams/activities/?token=${token}`
		// 	// 		this.props.getHomeDataAction(req, 1);
		// 	// }
		// }else{
		// 	// browserHistory.push('/')
		// }
	}

	refresh(resolve, reject){
		// const { token } = this.props.loginedSogoker
		// var req = `/api/streams/activities/?token=${token}`
		// let result = this.props.getHomeDataAction(req, 1, true)
		// result.then(data => {
		// 	data.status == 1 ?
		// 		resolve() : reject()
		// })
	}

	componentWillUpdate(newProps){
		return newProps !== this.props
	}

	componentWillReceiveProps(newProps){
		console.log(newProps, 'props of new props')
		const { page } = this.state
		// if (newProps.loginedSogoker && newProps.loginedSogoker.id) {
		// 	return newProps != this.props
		// }else{
		// 	browserHistory.push('/')
		// }
	}

	// @autobind
	// loadMore(resolve){
	// 	const { hasMore, page } = this.props
	// 	const { token } = this.props.loginedSogoker
	// 	if (hasMore) {
	// 		let req = `/api/streams/activities/?token=${token}`
	// 		let result = this.props.getHomeDataAction(req, page+1)
	// 		result.then(data => {
	// 			data.status == 1 ?
	// 				resolve() : resolve()
	// 		})
	// 	}else{
			
	// 	}
	// }

	render() {
		let { homeData, hasMore, flexed } = this.props
    let { initializing, showed } = this.state
    let { refresh, loadMore } = this

		return (
			<div className="bg-gray pos-r">
				<div className="pure-g">

					{
						!flexed ? 
						<div className="loading-div">
							<div className="line"></div>
						</div>
						: ''
					}

					{
						homeData && homeData.length  ?
						<div className="index-block">
							<div className="post-wrap">
							{
								homeData.map((item, index) => <PostItem key={index} { ...item } />)
							}
							</div>
							
						</div>
						: ''
					}

				</div>
			</div>
		)
	}
}


const mapStateToProps = state => { 
    return {
			...state.homeData,
			flexed: state.globalStatus.flexibleLoaded
		}
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeDataAction: bindActionCreators(getHomeDataAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)

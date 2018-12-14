import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getImgStyle } from '/utils/utils'
// import { autobind } from 'core-decorators'

// import { Link, browserHistory, hashHistory } from 'react-router';

// import { showTipsBlock } from '../../Action/tipsBlock'
// import { showShareBox } from '../../Action/shareBox'

// import ShareBlock from '../ShareBlock'
// import Simage from 'autoImage';

// @connect(
// 	state => (
// 		{
// 			loginedUser: state.userData
// 		}),
// 	dispatch => ({
// 			showTipsBlock: bindActionCreators(showTipsBlock, dispatch),
// 			showShareBox: bindActionCreators(showShareBox, dispatch)
// 		})
// )

export default class ActionBar extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			favouredNum : 0,
			can_favour: true,
			fav_class: 'icon-like',
		}

		this.favoriteItem = this.favoriteItem.bind(this)
		this.updateInfo = this.updateInfo.bind(this)
		this.reprintItem = this.reprintItem.bind(this)

		this.handleShare = this.handleShare.bind(this)
	}

	componentDidMount(){
		if (this.props.creator_id) {
			// this.updateInfo(this.props)
		}

		// if (this.props.detail) {
		// 	var oShare = document.getElementById('share-script');
		// 	if (oShare) {
		// 		document.body.removeChild(oShare)
		// 	}

		// 	var shareScript = document.createElement('script')
		// 	shareScript.src = "/src/Dist/social-share.min.js"
		// 	shareScript.id = "share-script"

		// 	document.body.appendChild(shareScript);
		// }

		// console.log(NativeShare,' nativeShare')
		// this.nativeShare = new NativeShare()

		// console.log(this.nativeShare, 'this.nativeShare')

		// const { title, description, photos } = this.props
		// let fPhotos = photos && photos.length > 0 ? photos.slice(0,1).map(photo => `https://sogoke-photo.b0.upaiyun.com/media/photos/${photo.suid}!squares`).join(',') : ''

  //       let shareData = {
  //           title: title,
  //           desc: `分享我在@手工客 kiinii.com 发现的 ${title}   - 手工艺人和独立设计师分享生活社区（分享自@手工客 官方应用kiinii ）`,
  //           link: `www.sogoke.com${window.location.pathname}`,
  //           icon: fPhotos[0],
  //           // 不要过于依赖以下两个回调，很多浏览器是不支持的
  //           success: function() {
  //               alert('success')
  //           },
  //           fail: function() {
  //               alert('fail')
  //           }
  //       }
  //       this.nativeShare.setShareData(shareData)
	}

	// 
	handleShare(e){
		// let ua = navigator.userAgent.toLowerCase();  
		// if(ua.match(/MicroMessenger/i)=="micromessenger") {  
		//     this.props.showTipsBlock('微信内请点击右上角进行分享')
		// } else {  
		//     this.props.showShareBox()
		// }
	}

	componentWillUpdate(np){
		// if (np !== this.props) {
		// 	if (np.creator_id !== this.props.creator_id) {
		// 		this.updateInfo(np)
		// 	}
		// 	return true
		// }
	}

	
	updateInfo(np){
		// const { id } = this.props.sogoker

		// let canFavour = (np.can_favour || (np.favoured_by && np.favoured_by.every(liked_id => liked_id != id )))

		// let finalClass = np.creator_id == id ? 'icon-like liked' 
		// 	: ( canFavour ? 'icon-like' : 'icon-like liked' )

		// let canShare = (np.can_share || (np.shared_by && np.shared_by.every(shared_id => shared_id != id)))

		// let finalShareText = np.creator_id == id ? '转载' : ( canShare ? '转载' : '已转' )

		// this.setState({
		// 	favouredNum: this.props.detail ? np.favorites_number : np.favoured_by_number,
		// 	can_favour: canFavour,
		// 	fav_class: finalClass,
		// 	can_share: canShare,
		// 	share_text: finalShareText
		// })
	}

	
	favoriteItem(){

		// const { id, token, userLogined } = this.props.sogoker
		// const { creator_id, postType, favoured_by, type, detail } = this.props
		// const { can_favour, favouredNum } = this.state
		// const post_id = detail ? this.props.id : this.props.raw_id
		// const finalType = detail ? postType : type

		// if (!userLogined) {
		// 	this.props.showTipsBlock('您未登陆，无法进行该操作')
		// 	setTimeout(()=>{
		// 		browserHistory.push('/accounts/login/')
		// 	},2000)
		// 	return false
		// }

		// if (id == creator_id) {
		// 	this.props.showTipsBlock('您无法对自己进行该操作')
		// 	return false
		// }else{
		// 	let actionType =  can_favour || ( favoured_by && favoured_by.every(liked_id => liked_id != id ))  
		// 		? 'favour' : 'unfavour'

		// 	let url = `/api/workshop/actions/${actionType}/${finalType}/${post_id}/?token=${token}`

		// 	fetch(url)
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		if (json.status == 1) {
		// 			const fav_text = can_favour ? '喜欢' : '取消喜欢'

		// 			this.props.showTipsBlock( fav_text + '成功')

		// 			this.setState({
		// 				favouredNum: can_favour ? favouredNum+1 : favouredNum-1,
		// 				can_favour: !can_favour,
		// 				fav_class: can_favour ? 'icon-like liked' : 'icon-like'
		// 			})
		// 		}else{
		// 			this.props.showTipsBlock(json.msg)
		// 		}
		// 	})
		// 	.catch(err => this.props.showTipsBlock('网络不畅，请稍后再试'))
		// }
	}

	
	reprintItem(){
		// console.log('clicked sharing')

		// const { id, token, userLogined } = this.props.sogoker
		// const { creator_id, postType, shared_by, type, detail } = this.props
		// const { can_share } = this.state
		// const post_id = detail ? this.props.id : this.props.raw_id
		// const finalType = detail ? postType : type

		// if (!userLogined) {
		// 	this.props.showTipsBlock('您未登陆，无法进行该操作')
		// 	setTimeout(()=>{
		// 		browserHistory.push('/accounts/login/')
		// 	},2000)
		// 	return false
		// }

		// console.log(postType, this.props.id, id, 'check')

		// if (creator_id && id == creator_id) {
		// 	this.props.showTipsBlock('您无法对自己进行该操作')
		// 	return false
		// }else{
		// 	let actionType =  can_share || ( shared_by && shared_by.every(shared_id => shared_id != id ))  
		// 		? 'share' : 'unshare'

		// 	let url = `/api/workshop/actions/${actionType}/${finalType}/${post_id}/?token=${token}`

		// 	fetch(url)
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		if (json.status == 1) {
		// 			const share_text = can_share ? '转载' : '取消转载'

		// 			this.props.showTipsBlock( share_text + '成功')
		// 			this.setState({
		// 				can_share: !can_share,
		// 				share_text: can_share ? '已转' : '转载'
		// 			})
		// 		}else{
		// 			if (postType == 'link') {
		// 				this.props.showTipsBlock('转载失败，是不是您自己发布的连接？')
		// 			}else{
		// 				this.props.showTipsBlock(json.msg)
		// 			}
		// 		}
		// 	})
		// 	.catch(err => this.props.showTipsBlock('网络不畅，请稍后再试'))
		// }
	}

	render(){

		// const { comments_number, detail, postType } = this.props
		// const post_id = detail ? this.props.id : this.props.raw_id
		// const post_type = detail ? postType : this.props.type
		// const { openShare } = this.state

		// const { title, text, description, photos } = this.props

		// let fPhotos = photos && photos.length > 0 ? photos.slice(0,1).map(photo => `//sogoke-photo.b0.upaiyun.com/media/photos/${photo.suid}!squares`).join(',') : ''

		return (
			<div className="action-bar post pure-g fs13">
				<div className="single-action pure-u-10-24"></div>
				<div onClick={this.favoriteItem} className="single-action pure-u-3-24">
					<img className="sogoke-image" style={getImgStyle('48x48')} src='/static/images/action-liked.png' />
					<span>66</span>
				</div>
				<div className="single-action pure-u-3-24">
					<a href={``}>
						<img className="sogoke-image" style={getImgStyle('51x45')} src='/static/images/action-comment-s.png' />
						<span>55</span>
					</a>
				</div>
				<div className="single-action pure-u-4-24">
					<a href={``}>
						<img className="sogoke-image" style={getImgStyle('39x48')} src='/static/images/action-wishlist-s.png' />
						<span>清单</span>
					</a>
				</div>
				<div onClick={this.reprintItem} className="single-action pure-u-4-24">
					<img className="sogoke-image" style={getImgStyle('45x45')} src='/static/images/action-reprint-s.png' />
					<span>转载</span>
				</div>
			</div>
		)
	}
}

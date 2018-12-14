import React from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import {format_unixtime} from 'dreamcog_timeformat'
// import LazyLoad from 'react-lazyload'
// import { autobind } from 'core-decorators'

// import ActionBar from '../DetailPages/ActionbarBlock'
// import Simage from '/components/templates/AutoImage/Simage';

import './PostItem.scss';

// @connect(
// 	state => (
// 		{
// 			loginedSogoker: {
// 				...state.userData
// 			}
// 		}
// 	)
// )

export default class PostItem extends React.Component {
	constructor(props){
		super(props)
		// this.setLocalData = this.setLocalData.bind(this);
	}

	// @autobind
	// setLocalData(){
	// 	localStorage.setItem('seted','true');
	// 	var item = localStorage.getItem('seted');
	// }

	componentDidMount(){
	}

	render() {
		const { avatar, comments_number, cover_photo, created_at, creator_id, creator_name, favoured_by_number, raw_id, title, type, text, sellable, is_shared_by, is_favoured_by, favoured_time, shared_at, video, videos } = this.props

		// let hasVideo = video || videos.length 
		let finalCover, finalType, useCustom
		if ( type == 'tutorial' && video ) {
			finalCover = cover_photo
			finalType = 'videoclass'
			useCustom = true
		}else if( type == 'link' ){
			if(cover_photo && cover_photo.slice(0,4) == "http") {
		        finalCover = cover_photo
		        useCustom = true
		    }else{
		    	finalCover = `https://sogoke-photo.b0.upaiyun.com/media/photos/${cover_photo}!/both/750x362/quality/75`
		    }
			finalType = type
		}else if ( type == 'creation' ) {
			if (sellable) {
				finalType = 'goods'
			}else{
				finalType = type
			}
		}else{
			finalCover = `https://sogoke-photo.b0.upaiyun.com/media/photos/${cover_photo}!/both/750x362/quality/75`
			finalType = type
		}

		return (
			<div className="postItem" itemType={ type } itemID={ raw_id }>

				{
					cover_photo ? 
					<div className="post-cover-wrap">
							<img className={`cover ${useCustom ? 'use-custom' : 'use-sogoke'}`} src={finalCover} />
					</div>
					: ''
				}

				<div className={ cover_photo ? "post-body-wrap padding-x" : "post-body-wrap padding-x padding-t"}>
						<h4 className="fs16">{ title }</h4>
						<p className="context fs13" dangerouslySetInnerHTML={{__html: text}}></p>
					
					<div className="user">
							<img className="avatar" src={`https://sogoke-avatar.b0.upaiyun.com/media/user/${ creator_id }/${ avatar }/avatar!large`} />
						<div className="little-block">
						</div>
					</div>
					<div className="hr-line"></div>
				</div>
			</div>
		)
	}
}
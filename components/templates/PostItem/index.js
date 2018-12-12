import React from 'react';
import { connect } from 'react-redux';

import './PostItem.sass';

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
					<Simage className="icon-type" size="162x81" target={`label-${type}.png`} />
					: ''
				}

				{
					cover_photo ? 
					<div className="post-cover-wrap">
						<Link to={`/${finalType}/${raw_id}/`}>
							{
								video || ( videos && videos.length ) ?
								<Simage className="play-video-btn" size="94x94" target="play-btn.png" />
								: ''
							}
							<img className={`cover ${useCustom ? 'use-custom' : 'use-sogoke'}`} src={finalCover} />
						</Link>
					</div>
					: ''
				}

				<div className={ cover_photo ? "post-body-wrap padding-x" : "post-body-wrap padding-x padding-t"}>
					<Link to={`/${finalType}/${raw_id}/`}>
						<h4 className="fs16">{ title }</h4>
						<p className="context fs13" dangerouslySetInnerHTML={{__html: text}}></p>
					</Link>
					
					<div className="user">
						<Link to={`/r/${creator_id}/`}>
							<img className="avatar" src={`https://sogoke-avatar.b0.upaiyun.com/media/user/${ creator_id }/${ avatar }/avatar!large`} />
						</Link>
						<div className="little-block">
							<Link to={`/r/${ creator_id }/`} className="userlink fs12">{creator_name}</Link>
							<span>{ format_unixtime(created_at) }</span>
						</div>
						
						{
							is_shared_by ? <div className="fr post-tips">
								<Simage size="45x45" target="action-reprint.png" />
								<span>
								{
									shared_at && Number(shared_at) > 0 ? 
									`${format_unixtime(shared_at)} 转载` 
									: `转载过的内容`
								}
								</span>
							</div> : ''
						}

						{
							is_favoured_by && !is_shared_by ? <div className="fr post-tips">
								<Simage size="48x48" target="action-liked.png" />
								<span>
								{
									favoured_time && Number(favoured_time) > 0 ? 
									`${format_unixtime(favoured_time)} 喜欢` 
									: `赞过的内容`
								}
								</span>
							</div> : ''
						}
					</div>
					<div className="hr-line"></div>

					<ActionBar sogoker={this.props.loginedSogoker} { ...this.props } />
				</div>
			</div>
		)
	}
}
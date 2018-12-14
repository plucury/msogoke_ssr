
import React from 'react';

export default class Simage extends React.Component {

	constructor(props){
	    super(props);
	    this.getStyle = this.getStyle.bind(this)
	}

	getStyle(){
		const { size, middle, styleStr } = this.props
		const style = size.split('x').map((x,i) => {
			return x/3*2/75	 
		})

		return {width: `${style[0]}rem`, height: `${style[1]}rem`}
	}

	render(){
		const { onClick, className, target } = this.props

		return (
			<img 
				style={this.getStyle()} 
				onClick={onClick} 
				{...this.props}
				className={`sogoke-image ${className || ''}`} 
				src={require(`../../Images/${target}`)}
			>
			</img>
		)
	}
}

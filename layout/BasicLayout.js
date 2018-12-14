import React from 'react'
import Head from 'next/head'
import 'styles/index.scss'
import NoSSR from 'react-no-ssr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import makeFlexible from '/static/flexible.js'

import { readyFlexible } from '/redux/actions/globalActions';

async function getFlexible(){
    // const flexibleJs = document.createElement('script')
    // flexibleJs.src="/static/flexible.js"
    // console.log(makeFlexible)
    // await document.body.appendChild(flexibleJs)
    // await console.log(this.props)
    // await setTimeout(()=>{
    //     this.props.readyFlexible()
    // },300)
    await makeFlexible(window, window['lib'] || (window['lib'] = {}), ()=>{this.props.readyFlexible()})
}

class BasicLayout extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            initializing: 0,
            showed: false
        }

        this.getFlexible = getFlexible.bind(this)
    }

    componentDidMount() {
        this.getFlexible()
    }

    render() {
        const { children, title = 'kiinii x 手工客 叫醒生活的人' } = this.props
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet='utf-8' />
                    <meta content="yes" name="apple-mobile-web-app-capable" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
                </Head>
                {children}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        readyFlexible: bindActionCreators(readyFlexible, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(BasicLayout)


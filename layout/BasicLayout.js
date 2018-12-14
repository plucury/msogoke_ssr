import React from 'react'
import Head from 'next/head'
import 'styles/common.less'
import 'purecss'
import NoSSR from 'react-no-ssr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import makeFlexible from '/static/flexible.js'

import { readyFlexible } from '/redux/actions/globalActions';

async function getFlexible(){
    const node = document.createElement('link');
    node.rel = 'stylesheet';
    node.href = '/static/font.css';

    await document.getElementsByTagName('head')[0].appendChild(node);

    await setTimeout(()=>{
        makeFlexible(window, window['lib'] || (window['lib'] = {}), ()=>{this.props.readyFlexible()})
    },1)
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


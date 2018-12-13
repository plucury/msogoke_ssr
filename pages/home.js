import React from 'react'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from 'layout/BasicLayout'
import HomePage from '../components/HomePage/HomePage'
import Head from 'next/head'

class Home extends React.Component {
    componentDidMount () {

    }
    
    componentWillUnmount () {
        //clearInterval(this.timer)
    }
    
    render () {
        return (
            <Layout title={`个人动态`}>
                <HomePage />
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //addCount: bindActionCreators(addCount, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    }
}

export default withRedux(initStore, null, mapDispatchToProps)(Home)

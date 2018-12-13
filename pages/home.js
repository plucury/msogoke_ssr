import React from 'react'
import { initStore } from '../redux/store'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux';
import Layout from 'layout/BasicLayout'
import HomePage from '../components/HomePage/HomePage'
import Head from 'next/head'
import { getHomeDataAction } from '/redux/actions/homePage';

class Home extends React.Component {
    // static getInitialProps ({ store, isServer }) {
    static getInitialProps ({ store, req }) {
        const baseUrl = req ? `http://120.27.134.211:90` : '';
      store.dispatch(getHomeDataAction({token: 'DBF6C199828A0F555E09-73HLKC-47P9' }, baseUrl))
      return { custom: 'custom' }
    }



    componentDidMount () {

    }

    componentWillReceiveProps (props) {
        console.log(props, 'new props')
    }
    
    componentWillUnmount () {
        //clearInterval(this.timer)
    }
    
    render () {
        return (
            <Layout title={`个人动态`}>
                <HomePage homeData />
            </Layout>
        )
    }
}

const mapStateToProps = state => { 
    return {
            homeData: state.homeData
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeDataAction: bindActionCreators(getHomeDataAction, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

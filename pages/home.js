import React from 'react'
import { initStore } from '../redux/store'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux';
import Layout from 'layout/BasicLayout'
import HomePage from '../components/HomePage/HomePage'
import Head from 'next/head'
import { getHomeDataAction } from '/redux/actions/homePage';
import 'styles/HomePage/style.scss'

class Home extends React.Component {
    // static getInitialProps ({ store, isServer }) {
    static async getInitialProps ({ store, req }) {
        const baseUrl = `http://120.27.134.211:90`
        // await this.props.getHomeDataAction({token: 'DBF6C199828A0F555E09-73HLKC-47P9' }, baseUrl)
      await store.dispatch(getHomeDataAction({token: 'DBF6C199828A0F555E09-73HLKC-47P9' }, baseUrl))
      return {}
    }



    componentDidMount () {
        // const baseUrl = `http://120.27.134.211:90`
        // this.props.getHomeDataAction({token: 'DBF6C199828A0F555E09-73HLKC-47P9' }, baseUrl)
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

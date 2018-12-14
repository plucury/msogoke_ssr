import React from 'react'
import { initStore } from '../redux/store'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux';
import Layout from 'layout/BasicLayout'
import HomePage from '../components/HomePage/HomePage'
import Head from 'next/head'
import { getHomeDataAction } from '/redux/actions/homePage';
import { readyFlexible } from '/redux/actions/globalActions';
import 'styles/HomePage/style.scss'

async function getFlexible(){
    const flexibleJs = document.createElement('script')
    flexibleJs.src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.2/??flexible_css.js,flexible.js"
    await document.body.appendChild(flexibleJs)
    console.log('flexed loaded')
    await setTimeout(()=>{
        this.props.readyFlexible()
    },500)
}

class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            initializing: 0,
            showed: false
        }

        this.getFlexible = getFlexible.bind(this)
    }

    // static getInitialProps ({ store, isServer }) {
    static async getInitialProps ({ store, req }) {
        const baseUrl = `http://120.27.134.211:90`
        console.log('get init in home component')
        // await this.props.getHomeDataAction({token: 'DBF6C199828A0F555E09-73HLKC-47P9' }, baseUrl)
      await store.dispatch(getHomeDataAction({token: 'DBF6C199828A0F555E09-73HLKC-47P9' }, baseUrl))
      return {}
    }



    componentDidMount () {
        // const flexed = this.getFlexible()
        // console.log(flexed, 'flexed')
        // console.log('ready to show')
        // flexed.then(res => {
        //     res && 
        // })
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
        readyFlexible: bindActionCreators(readyFlexible, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

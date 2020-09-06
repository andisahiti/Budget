import React, { useEffect } from 'react'
import Top from '../components/Top/Top'
import Bot from '../components/Bot/Bot'
import { connect } from 'react-redux'
import * as action from '../store/actions/index'
const Main = React.memo(props => {

    useEffect(() => {

        props.local()

        props.clear()


    }, [])

    return (
        <React.Fragment>
            <Top></Top>
            <Bot></Bot>
        </React.Fragment>
    )
})

const mapStateToProps = state => {
    return {
        auth: state.data.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        local: () => dispatch(action.local()),
        localStart: () => dispatch(action.localStart()),
        clear: () => dispatch(action.clearAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
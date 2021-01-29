import {connect} from 'react-redux'
import IndexContainer from "../js/components/index/Index";
import {setGameData} from "../js/store/index/actions"

const mapDispatchToProps = {
    setGameData
}

export default connect(state=>state, mapDispatchToProps)(IndexContainer);

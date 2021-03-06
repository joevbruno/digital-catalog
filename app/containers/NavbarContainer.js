import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import { logout } from '../actions/AuthActions';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
        user: state.authReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

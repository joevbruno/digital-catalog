import React from 'react';
import { browserHistory } from 'react-router';

import AuthStore from '../stores/AuthStore';

export default class EnsureLoggedInContainer extends React.Component {
    componentDidMount() {
        const { pathname } = this.props.location;

        if (!AuthStore.isLoggedIn()) {
            browserHistory.replace({ pathname: 'login', query: { return_to: pathname }});
        }
    }

    render() {
        if (AuthStore.isLoggedIn()) {
            return this.props.children;
        }
        return null;
    }
}
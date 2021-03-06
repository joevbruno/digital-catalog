import ItemConstants from '../constants/ItemConstants';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function createItem(formData) {
    let config = {
        method: 'post',
        body: formData,
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
        })
    };

    return {
        type: ItemConstants.POST_ITEM,
        payload: fetch('/api/items', config)
            .then(handleErrors)
            .then(response => response.json())
    };
}

export function updateItem(formData, id) {
    let config = {
        method: 'put',
        body: formData,
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
        })
    };

    return {
        type: ItemConstants.PUT_ITEM,
        payload: fetch(`api/items/${id}`, config)
            .then(handleErrors)
            .then(response => response.json())
    };
}

export function fetchItem(id) {
    let config = {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
        })
    };

    return {
        type: ItemConstants.GET_ITEM,
        payload: fetch(`/api/items/${id}`, config)
            .then(handleErrors)
            .then(response => response.json())
    };
}

export function resetItemState() {
    return {
        type: ItemConstants.RESET_ITEM_STATE
    };
}

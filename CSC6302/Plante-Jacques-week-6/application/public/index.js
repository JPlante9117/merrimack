function selectCredentials (credentialType) {
    if (credentialType == 'read_only' || credentialType == 'modify_role') {
        fetch('/api/switchUser', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                userType: credentialType
            })
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.success) {
                location.reload();
            }
        });
    }
}

function getInverseUser (currentUserType) {
    return currentUserType === 'read_only' ? 'modify_role' : 'read_only';
}

function swapUserType (userType) {
    if (['read_only', 'modify_role'].includes(userType)) {
        let swappedUser = getInverseUser(userType);
        selectCredentials(swappedUser);
    }
}

window.scriptLoaded = false;

document.addEventListener('DOMContentLoaded', () => {
    window.scriptLoaded = true;
});
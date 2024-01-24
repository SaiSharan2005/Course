
export function IsAuthenticated () {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        return true;
    }
    else{
        return false;
    }
}


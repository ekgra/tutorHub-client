function decodeJWT(token) {
    // Split the JWT into its three parts
    const base64Url = token.split('.')[1];
    
    // Base64 decode (replace '-' with '+' and '_' with '/', also add padding)
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    // Parse JSON
    return JSON.parse(jsonPayload);
}

export { decodeJWT };
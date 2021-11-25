function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});

// if a token was passed in we should send it on.
if (token) {
    options.headers.Authorization = `Bearer ${token}`;
}

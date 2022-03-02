export const FetchApi =  {
    getTodo(){
        console.log('실행');
        return fetch("/api/main", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'follow',
            referrer: 'no-referrer',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then((response) => {
                return response.json()
            })
            .catch(error => console.log('error', error));
    },

    registerTodo(dashBoradData){
        console.log(dashBoradData.tododto);
        return fetch("/api/todo", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'follow',
            referrer: 'no-referrer',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify ({
                tododto:dashBoradData.tododto
            })
        })
            .then((response) => {
                return response.json()
            })
            .catch(error => console.log('error', error));
    }
}
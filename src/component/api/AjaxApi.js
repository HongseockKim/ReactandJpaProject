
class BorderApi{

    static covideData(){
       return  fetch("https://api.corona-19.kr/korea/country/new/?serviceKey=7p1VkbiaRTEqyxMLGZFghlsvW2rocCntd", {
            method: 'GET',
            redirect: 'manual'
        })
            .then((result) => {return result.json()})
            .catch(error => console.log('error', error));
    }

    static getDashboardDetail(id){
        return  fetch(`/api/tododetail/${id}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            redirect: 'manual'
        })
            .then((response)=> {
                return response.json()
            })
            .catch(error=>console.log(error))
    }

    static requestTodoContent(request) {
        return  fetch(`/api/reg/todolist`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                dashbordDataTodo:request.dashbordDataTodo
            }),
            dashbordDataTodo: 'manual'
        })
            .then((response)=> {
                return response.json()
            })
            .catch(error=>console.log(error))
    }

    static getResponseToDo () {
        return  fetch("/api/todolist", {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            redirect: 'manual'
        })
            .then((response)=> {
                return response.json()
            })
            .catch(error=>console.log(error))
    }

    static DeleteItem(id){
        return  fetch(`/api/delete/${id}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            redirect: 'manual'
        })
            .then((response)=> {
                return response.json()
            })
            .catch(error=>console.log(error))
    }

    static searchRequest(searchRequest) {
        const search = searchRequest.search;
        return  fetch(`/api/searchrequest/${search}`, {
            method: 'GET',
            headers: {"Content-Type": "application/text; charset=UTF-8"},
            redirect: 'manual',
        })
            .then((response)=> {
                return response.json()
            })
            .catch(error=>console.log(error))
    }
}

export default BorderApi
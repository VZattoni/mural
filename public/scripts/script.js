
document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts(){

    let url = 'http://192.168.15.29:3000/api/all'

    fetch(url).then((res)=>{
        return res.json();
    }).then((json) => { //This json is actually a string, thas why the JSON.parse

        let postElements = '';
        let posts = JSON.parse(json);
        posts.forEach(post => {
            let postElement = `<div id="${post.id}" class="card mb-4">
                                    <div class="card-header">
                                        <h5 class="card-title"> ${post.title} </h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text"> ${post.description} </div>
                                    </div>
                                </div>`
            postElements += postElement;
        });
        document.getElementById('posts').innerHTML = postElements;
    })

}

function newPost(){
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    let post = {title, description}

    let url = 'http://192.168.15.29:3000/api/new'
    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json' }),
        body: JSON.stringify(post)}

    fetch(url, options).then(res => {
        console.log(res.status)
    })

    document.getElementById('form').reset()


}
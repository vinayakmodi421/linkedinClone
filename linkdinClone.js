const addPost = document.getElementById('addPost')
const body1 = document.getElementById('body1')
const textareaId = document.getElementById('textareaId')
const buttPost = document.getElementById('butt-post')
const addPostByJs = document.getElementById('addPostByJs')
const file = document.getElementById('file')
const image1 = document.getElementById('image1')
const post2 = document.getElementById('post2')


const postDatabase = JSON.parse(localStorage.getItem('posts'))??[]
localStorage.setItem('posts',JSON.stringify(postDatabase))

function wrong(){
    addPost.classList.add('display')
    body1.classList.remove('overflow-hidden')
}
function addPost1(){
    // let scroll = document.documentElement.scrollTop
    // post2.style.marginTop = `${scroll}px`;
    // console.log(scroll)
    addPost.classList.remove('display')
    body1.classList.add('overflow-hidden')
}
addPost.addEventListener('click',function(e){
    if(e.target.id == 'addPost'){
        addPost.classList.add('display')
        body1.classList.remove('overflow-hidden')
    }
})

textareaId.addEventListener('keyup',function(){
    if(textareaId.value == ''){
        buttPost.classList.remove('post-button');
    }else{
        buttPost.classList.add('post-button');
    }
})

function createPost(post){
    // console.log(post)
    const parent = document.createElement('div');
    parent.classList = 'post1'

    const child1 = document.createElement('div');
    child1.classList = 'wrong-icon pointer'
    const wrongIcon  = document.createElement('i');
    wrongIcon.classList = 'fa-solid fa-xmark'
    child1.appendChild(wrongIcon);
    parent.appendChild(child1)

    const child2 = document.createElement('div');
    child2.classList = 'three-dot-icon pointer'
    const dotIcon = document.createElement('i')
    dotIcon.classList = 'fa-solid fa-ellipsis'
    child2.appendChild(dotIcon)
    parent.appendChild(child2)

    const hidden = document.createElement('div');
    hidden.textContent = 'Hide'
    hidden.classList = 'post-hide display'
    parent.appendChild(hidden)

    const child3 = document.createElement('div');
    child3.classList = 'flex'
    const imgProfile = document.createElement('img')
    // console.log(post.profilePic)
    imgProfile.src = post.profilePic
    imgProfile.classList = 'user-profile'
    child3.appendChild(imgProfile)
    const child3of2 = document.createElement('div')
    const div1 = document.createElement('div')
    div1.classList = 'text-5'
    div1.textContent = `${post.name}`
    child3of2.appendChild(div1)
    const div2 = document.createElement('div')
    div2.classList = 'text-4'
    div2.textContent = `${post.followers} followers`
    child3of2.appendChild(div2)
    const div3 = document.createElement('div')
    div3.classList = 'flex'
    const divChild3of1 = document.createElement('div')
    divChild3of1.classList = 'text-4'
    divChild3of1.textContent = 'now • '
    div3.appendChild(divChild3of1)
    const globeIcon = document.createElement('i')
    globeIcon.classList = 'text-4 fa-solid fa-earth-americas margin-down'
    div3.appendChild(globeIcon)
    child3of2.appendChild(div3)
    child3.appendChild(child3of2);
    parent.appendChild(child3)

    const child4 = document.createElement('div');
    child4.textContent = post.description
    parent.appendChild(child4)

    if(post.image != ''){
        const img = document.createElement('img')
        img.src = post.image
        img.classList = 'img-post'
        parent.appendChild(img)
    }

    const child5 = document.createElement('div');
    child5.classList = 'flex text-3 reaction'
    const child5of1 = document.createElement('div')
    child5of1.classList = 'flex'
    const thumbIcon1 = document.createElement('i')
    thumbIcon1.classList = 'fa-solid fa-thumbs-up margin-down'
    const noOfLike  = document.createElement('div')
    noOfLike.textContent = post.likes + (post.isLiked ? 1 : 0)
    child5of1.appendChild(thumbIcon1)
    child5of1.appendChild(noOfLike)
    child5.appendChild(child5of1)
    const child5of2 = document.createElement('div')
    child5of2.textContent = `${post.comment.length} Comments • ${post.repost} reposts`
    child5.appendChild(child5of2)
    parent.appendChild(child5)

    const child6 = document.createElement('div');
    child6.classList = 'flex response'
    const child6of1 = document.createElement('div');
    console.log(post.isLiked)
    child6of1.classList = `box-response flex ${(post.isLiked ? 'ic-blue' : '')}`
    const like = document.createElement('div')
    like.textContent = " Like"
    const thumbIcon2 = document.createElement('i')
    thumbIcon2.classList = 'fa-solid fa-thumbs-up margin-down'
    child6of1.appendChild(thumbIcon2)
    child6of1.appendChild(like)
    child6.appendChild(child6of1)
    const child6of2 = document.createElement('div')
    child6of2.classList = 'box-response flex'
    const commentIcon = document.createElement('i')
    commentIcon.classList = 'fa-solid fa-comment-dots margin-down'
    child6of2.appendChild(commentIcon);
    const comment = document.createElement('div')
    comment.textContent = 'Comment'
    child6of2.appendChild(comment)
    child6.appendChild(child6of2)
    const child6of3 = document.createElement('div')
    child6of3.classList ='box-response flex'
    const repostIcon = document.createElement('i')
    repostIcon.classList = 'fa-solid fa-retweet margin-down'
    child6of3.appendChild(repostIcon)
    const repost = document.createElement('div')
    repost.textContent = 'Repost'
    child6of3.appendChild(repost)
    child6.appendChild(child6of3)
    const child6of4 = document.createElement('div')
    child6of4.classList ='box-response flex'
    const sendIcon = document.createElement('i')
    sendIcon.classList = 'fa-solid fa-paper-plane margin-down'
    child6of4.appendChild(sendIcon)
    const send = document.createElement('div')
    send.textContent = 'Send'
    child6of4.appendChild(send)
    child6.appendChild(child6of4)
    parent.appendChild(child6)

    wrongIcon.addEventListener('click',function(){
        delete1(post)
    })
    child6of1.addEventListener('click',function(){
        if(child6of1.classList.contains('ic-blue')){
            noOfLike.textContent--;
            child6of1.classList.remove('ic-blue')
        }
        else{
            noOfLike.textContent++;
            child6of1.classList.add('ic-blue')
        }
        let posts =  JSON.parse(localStorage.getItem('posts'))
        let changeArray = posts.map(ele => {
            if(ele.id == post.id){
                ele.isLiked = (ele.isLiked)?false:true;
            }
            return ele
        })
        posts = changeArray
        localStorage.setItem('posts',JSON.stringify(posts));
    })
    child6of2.addEventListener('click',function(){
        const comment1 = document.getElementById(`${post.id}-comment`)
        // console.log(comment1)
        if(comment1){
            comment1.remove();
        }
        else{
            const commentSection = createCommentDiv(post);
            parent.appendChild(commentSection)
        }
        
    })
    child2.addEventListener('click',function(){
        if(hidden.classList.contains('display')){
            hidden.classList.remove('display');
        }else{
            hidden.classList.add('display')
        }
    })
    hidden.addEventListener('click',function(){
        let post2 = JSON.parse(localStorage.getItem('posts'))
        let post1 = post2.map(ele => {
            if(ele.id == post.id){
                ele.hidden = true;
            }
            return ele;
        })
        post2 = post1;
        localStorage.setItem('posts',JSON.stringify(post2))
        parent.classList.add('display')
    })
    return parent;
}

function delete1(post){
    let posts = JSON.parse(localStorage.getItem('posts'))
    // console.log(posts)+
    let changeArray = posts.filter(ele => ele.id != post.id);
    posts = changeArray
    localStorage.setItem('posts',JSON.stringify(posts));
    showPosts()
}

buttPost.addEventListener('click',function(){
    // console.log(e)
    if(textareaId.value == '') return;
    const posts = JSON.parse(localStorage.getItem('posts'))
    let imgUrl = ''
    if(file.value != '') imgUrl = URL.createObjectURL(file.files[0]);
    posts.unshift({
        likes :0,
        comment : [],
        repost : 0,
        followers : 123,
        name : 'Vinayak Modi',
        description : textareaId.value,
        id : new Date().getTime(),
        image : imgUrl,
        isLiked : false,
        work : 'Mtech student in international institute of professional',
        profilePic : 'https://www.iconarchive.com/download/i112147/fa-team/fontawesome/FontAwesome-Circle-User.1024.png',
        stage : '1st+',
        hidden : false,
    })
    localStorage.setItem('posts',JSON.stringify(posts))
    addPost.classList.add('display')
    textareaId.value = ''
    image1.src = ''
    body1.classList.remove('overflow-hidden')
    showPosts();
})

function showPosts(){
    addPostByJs.innerHTML = '';
    const posts = JSON.parse(localStorage.getItem('posts'))??[]
    // console.log(posts)
    for(let post of posts){
        if(post.hidden) continue
        const div = createPost(post);
        addPostByJs.appendChild(div)
    }
}
showPosts()

file.addEventListener('change',function(){
    let imgUrl = ''
    if(file.value != '') imgUrl = URL.createObjectURL(file.files[0]);
    image1.src = imgUrl
    // console.log(file,file.files,imgUrl)
})

function createCommentDiv(post){
    const parent = document.createElement('div')
    parent.id = `${post.id}-comment`
    parent.classList = "comment-box"

    const child1 = document.createElement('div')
    child1.classList = 'optionsForComment'
    const child1of1 = document.createElement('button')
    child1of1.classList = 'comment-button-design'
    child1of1.textContent = 'Well done!'
    child1.appendChild(child1of1)
    const child1of2 = document.createElement('button')
    child1of2.classList = 'comment-button-design'
    child1of2.textContent = 'Congrats'
    child1.appendChild(child1of2)
    const child1of3 = document.createElement('button')
    child1of3.classList = 'comment-button-design'
    child1of3.textContent = 'Congratulation!'
    child1.appendChild(child1of3)
    const child1of4 = document.createElement('button')
    child1of4.classList = 'comment-button-design'
    child1of4.textContent = 'Absolutely Amazing'
    child1.appendChild(child1of4)
    const child1of5 = document.createElement('button')
    child1of5.classList = 'comment-button-design'
    child1of5.textContent = 'Keep Shinning'
    child1.appendChild(child1of5)
    const child1of6 = document.createElement('button')
    child1of6.classList = 'comment-button-design'
    child1of6.textContent = 'Thanks For Sharing!'
    child1.appendChild(child1of6)
    const child1of7 = document.createElement('button')
    child1of7.classList = 'comment-button-design'
    child1of7.textContent = 'Exited For You'
    child1.appendChild(child1of7)
    parent.appendChild(child1)

    const child2 = document.createElement('div')
    child2.classList = 'flex add-comment'
    const img = document.createElement('img');
    img.src = post.profilePic
    img.classList = 'comment-profile'
    child2.appendChild(img)
    const div = document.createElement('div')
    div.classList = 'relative'
    const input = document.createElement('input')
    input.type = "text"
    input.placeholder = 'Add a commment...'
    input.className = "pointer input-comment"
    div.appendChild(input)
    const smileIcon = document.createElement('i')
    smileIcon.classList = 'fa-regular fa-face-smile comment-emoji big'
    div.appendChild(smileIcon)
    const photoIcon = document.createElement('i')
    photoIcon.classList = "fa-regular fa-image comment-image big"
    div.appendChild(photoIcon)
    const button = document.createElement('button')
    button.classList = 'button-comment'
    button.textContent = 'Comment'
    child2.appendChild(div)
    child2.appendChild(button)
    parent.appendChild(child2)

    if(post.comment.length != 0){
        const child3 = document.createElement('div')
        child3.classList = 'flex text-5'
        const child3of1 = document.createElement('div')
        child3of1.textContent = 'Most relevant'
        child3.appendChild(child3of1)
        const child3of2 = document.createElement('i')
        child3of2.classList = 'fa-solid fa-caret-down margin-down'
        child3.appendChild(child3of2)
        parent.appendChild(child3)
    }

    const child4 = document.createElement('div')
    for(let boxcomment1 of post.comment){
        const div1 = createComment1(boxcomment1)
        child4.appendChild(div1);
    }
    parent.appendChild(child4)

    input.addEventListener('keyup',function(){
        if(input.value != ''){
            button.classList.add('button-comment1')
        }else{
            button.classList.remove('button-comment1')
        }
    })
    child1.addEventListener('click',function(e){
        console.log(e.target.textContent)
        input.value = e.target.textContent
        button.classList.add('button-comment1')

    })
    button.addEventListener('click',function(){
        if(input.value == ''){
            return
        }
        let post2 = JSON.parse(localStorage.getItem('posts'))
        let post1 = post2.map((ele) => {
            if(ele.id == post.id){
                ele.comment.unshift({
                    text: input.value,
                    name : 'Vinayak Modi',
                    noOfLikes : 0,
                    work : 'Mtech student in international institute of professional',
                    profilePic : 'https://www.iconarchive.com/download/i112147/fa-team/fontawesome/FontAwesome-Circle-User.1024.png',
                    stage : '1st+',
                    isliked : false, 
                    id : new Date().getTime(),
                    datasetId : post.id,
                })
            }
            return ele
        })
        post2 = post1
        child4.innerHTML = ''
        for(let box1 of post2){
            if(box1.id == post.id){
                for(let boxcomment1 of box1.comment){
                    const div1 = createComment1(boxcomment1)
                    child4.appendChild(div1);
                }
            }
        }
        parent.appendChild(child4)
        localStorage.setItem('posts',JSON.stringify(post2)) 
        input.value = ''
        button.classList.remove('button-comment1')
    })
    return parent
}
function createComment1(comment){
    // console.log(comment.isliked)
    const parent = document.createElement('div')
    parent.classList = 'flex comment-div1'

    const child1 = document.createElement('img')
    child1.src = comment.profilePic
    child1.classList = 'commentdiv-pic'
    parent.appendChild(child1)

    const child2 = document.createElement('div')
    child2.classList = 'gap2 comment-width'
    const child2of1 = document.createElement('div')
    child2of1.textContent = `${comment.name} • ${comment.stage}`
    child2of1.classList = 'text-5'
    child2.appendChild(child2of1)
    const child2of2 = document.createElement('div')
    child2of2.textContent = comment.work
    child2of2.classList = 'margin-top-10 text-4'
    child2.appendChild(child2of2)
    const child2of3 = document.createElement('div')
    child2of3.textContent = comment.text
    child2.appendChild(child2of3)

    const child2of4 = document.createElement('div')
    // child2of4.textContent = 'Likes | Replay'
    child2of4.classList = 'text-3 flex'
    const grandchild1 = document.createElement('div')
    grandchild1.textContent = 'Likes'
    grandchild1.classList = `pointer ${comment.isliked ?'ic-blue':'' }`
    child2of4.appendChild(grandchild1)
    const grandchild2 = document.createElement('i')
    grandchild2.classList = `fa-solid fa-thumbs-up margin-down ic-blue ${comment.isliked ?'':'display'}`
    child2of4.appendChild(grandchild2)
    const grandchild3 = document.createElement('div')
    grandchild3.textContent = comment.noOfLikes
    grandchild3.classList = `ic-blue ${comment.isliked ?'':'display'}`
    child2of4.appendChild(grandchild3)
    const grandchild4 = document.createElement('div')
    grandchild4.textContent = '|'
    child2of4.appendChild(grandchild4)
    const grandchild5 = document.createElement('div')
    grandchild5.textContent = 'Reply'
    child2of4.appendChild(grandchild5)
    child2.appendChild(child2of4)
    parent.appendChild(child2)

    const child3 = document.createElement('div')
    child3.classList = 'flex text-4' 
    const child3of1 = document.createElement('div')
    child3of1.textContent = 'now'
    child3.appendChild(child3of1)
    const child3of2 = document.createElement('i')
    child3of2.classList = 'fa-solid fa-ellipsis margin-down'
    child3.appendChild(child3of2)
    parent.appendChild(child3)

    grandchild1.addEventListener('click',function(){
        // console.log(comment)
        if(comment.isliked){
            comment.isliked = false
            grandchild1.classList.remove('ic-blue')
            grandchild2.classList.add('display')
            grandchild3.classList.add('display')
            grandchild3.textContent--;
        }else{
            comment.isliked = true
            grandchild1.classList.add('ic-blue')
            grandchild2.classList.remove('display')
            grandchild3.classList.remove('display')
            grandchild3.textContent++;
        }
        let post = JSON.parse(localStorage.getItem('posts'))
        let post1 = post.map((ele) => {
            if(ele.id == comment.datasetId){
                ele.comment = ele.comment.map((elm )=> {
                    if(elm.id == comment.id){
                        if(elm.isliked){
                            elm.isliked = false;
                            elm.noOfLikes--;
                        }else{
                            elm.isliked = true;
                            elm.noOfLikes++;
                        }
                    }
                    return elm;
                })
            }
            return ele
        })
        // console.log(post)
        post = post1
        localStorage.setItem('posts',JSON.stringify(post))
    })
    return parent
}
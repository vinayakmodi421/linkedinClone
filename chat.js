
 

if(!(JSON.parse(localStorage.getItem('users')))){
  const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    skill: "Frontend Development",
    workingAt: "Google",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    stage: "1st",
    chat : [{
      chatId : 1,
      isSeen : true,
      text : 'Hello,how are you?',
      sentAtDate : new Date().toDateString(),
      sentAtTime : new Date().toLocaleTimeString()
    }]
  },
  {
    id: 2,
    name: "Diya Patel",
    skill: "UI/UX Design",
    workingAt: "IIT Delhi",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    stage: "2nd",
    chat : []
  },
  {
    id: 3,
    name: "Rohan Mehta",
    skill: "Machine Learning",
    workingAt: "Amazon",
    profilePic: "https://randomuser.me/api/portraits/men/51.jpg",
    stage: "3rd",
    chat : []
  },
  {
    id: 4,
    name: "Sneha Singh",
    skill: "Data Analysis",
    workingAt: "TCS",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    stage: "1st",
    chat : []
  },
  {
    id: 5,
    name: "Kabir Verma",
    skill: "Cybersecurity",
    workingAt: "Infosys",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
    stage: "2nd",
    chat : [
    ]
  },
  {
    id: 6,
    name: "Ananya Joshi",
    skill: "Mobile App Development",
    workingAt: "NIT Trichy",
    profilePic: "https://randomuser.me/api/portraits/women/33.jpg",
    stage: "3rd",
    chat : []
  },
  {
    id: 7,
    name: "Yash Kapoor",
    skill: "Backend Development",
    workingAt: "Microsoft",
    profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
    stage: "2nd",
    chat : []
  },
  {
    id: 8,
    name: "Ishita Roy",
    skill: "Cloud Computing",
    workingAt: "Amazon Web Services",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
    stage: "1st",
    chat : []
  },
  {
    id: 9,
    name: "Arjun Nair",
    skill: "Blockchain",
    workingAt: "Startup: ChainNet",
    profilePic: "https://randomuser.me/api/portraits/men/46.jpg",
    stage: "3rd",
    chat : []
  },
  {
    id: 10,
    name: "Meera Iyer",
    skill: "Game Development",
    workingAt: "Unity Technologies",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    stage: "2nd",
    chat : []
  }
  ];

  localStorage.setItem('users',JSON.stringify(users))
}

const chatBox = document.getElementById('chat4')
const chatPage = document.getElementById('chatPage')
const downId = document.getElementById('downId')
const upId = document.getElementById('upId')
const chatHead = document.getElementById('chat-head')
const chatPage2 = document.getElementById('chat-page2')
const searchProfile = document.getElementById('searchProfile')
const userMain = JSON.parse(localStorage.getItem('users'))
showChat(userMain)
function showChat(user1){
  // console.log(user1)
  chatBox.innerHTML = ''
  for(let user of user1){
    const div = createChat(user);
    chatBox.appendChild(div)
  }
}

function createChat(user){
  const parent = document.createElement('div')
  parent.classList = "flex chat-parent"
  parent.id = user.id

  const child1 = document.createElement('img')
  child1.src = user.profilePic
  child1.id = user.id
  child1.classList = 'my-photo1'
  parent.appendChild(child1)

  const child2 = document.createElement('div')
  child2.classList = 'chat-child2'
  child2.id = user.id
  const child2of1 = document.createElement('div') 
  child2of1.textContent = user.name
  child2of1.id = user.id
  child2.appendChild(child2of1)
  const child2of2 = document.createElement('div')
  child2of2.classList = 'text-3'
  child2.appendChild(child2of2)
  parent.appendChild(child2)

  const child3 = document.createElement('div')
  child3.classList = 'text-3'
  return parent
}
chatHead.addEventListener('click',function(){
  if(upId.classList.contains('display')){
      downId.classList.add('display')
      upId.classList.remove('display')
      chatPage.classList.add('up')
  }else{
      upId.classList.add('display')
      downId.classList.remove('display')
       chatPage.classList.remove('up')
  }
})

chatBox.addEventListener('click',function(e){
  chatPage2.innerHTML = ''
  chatPage2.classList.remove('display')
  const users = JSON.parse(localStorage.getItem('users'))
  for(let user of users){
    if(user.id == e.target.id){
      const div = createChatDiv(user);
      chatPage2.appendChild(div)
      const target = document.getElementById(`child2-${e.target.id}`)
      target.scrollTo({
        top : target.scrollHeight,
      })
    }
  }

})

function createChatDiv(user){
  // console.log(user.chat[0].sentAtTime,user.chat[0].sentAtDate)
  const parent = document.createElement('div')

  const child1 = document.createElement('div')
  child1.classList = 'chat1 flex'
  const child1of1 = document.createElement('img')
  child1of1.src = user.profilePic
  child1of1.classList = 'my-photo border-radius-50'
  child1.appendChild(child1of1)
  const child1of2 = document.createElement('div')
  const div1 = document.createElement('div')
  div1.textContent = user.name
  child1of2.appendChild(div1)
  const div2 = document.createElement('div')
  div2.textContent = 'Active now'
  div2.classList = 'text-3'
  child1of2.appendChild(div2)
  child1.appendChild(child1of2)
  const icon1 = document.createElement('i')
  icon1.classList = 'fa-solid fa-ellipsis chat-ic-1 pointer'
  child1.appendChild(icon1)
  const icon2 = document.createElement('i')
  icon2.classList = 'fa-solid fa-down-left-and-up-right-to-center chat-ic-2'
  child1.appendChild(icon2)
  const icon3 = document.createElement('i')
  icon3.classList = 'fa-solid fa-xmark chat-ic-3'
  child1.appendChild(icon3)
  parent.appendChild(child1)

  const child2 = document.createElement('div')
  child2.classList = 'chat-page-middle'
  child2.id = `child2-${user.id}`
  const child2of1 = document.createElement('div')
  child2of1.classList = 'padding-10'
  const div3 = document.createElement('img')
  div3.src = user.profilePic
  div3.classList = 'img-chatPage2'
  child2of1.appendChild(div3)
  const div4 = document.createElement('div')
  div4.textContent = `${user.name} • ${user.stage}`
  div4.classList = 'text-8'
  child2of1.appendChild(div4)
  const div5 = document.createElement('div')
  div5.textContent =`${user.workingAt} || ${user.skill}`
  div5.classList = 'text-7'
  child2of1.appendChild(div5)
  child2.appendChild(child2of1)
  const child2of2 =createMessage(user);
  child2.appendChild(child2of2)
  
  parent.appendChild(child2)

  const child3 = document.createElement('div')
  child3.classList = 'page2-last'
  const child3of1 = document.createElement('div')
  child3of1.classList =  'message'
  const div6 = document.createElement('textarea')
  div6.placeholder = 'Write a message...'
  div6.classList = 'page2-textarea'
  child3of1.appendChild(div6)
  const up = document.createElement('i')
  up.classList = 'fa-solid fa-chevron-up'
  child3of1.appendChild(up)
  child3.appendChild(child3of1)

  const child3of2 = document.createElement('div')
  child3of2.classList = 'chat-1 relative'
  const send = document.createElement('button')
  send.textContent = 'send'
  send.classList = 'button chat-ic2'
  child3of2.appendChild(send)
  const threedot = document.createElement('i')
  threedot.classList = 'fa-solid fa-ellipsis chat-ic-5'
  child3of2.appendChild(threedot)
  child3.appendChild(child3of2)
  parent.appendChild(child3)

  icon3.addEventListener('click',function(){
    // console.log(chatPage2,1)
    chatPage2.classList.add('display')
  })
  div6.addEventListener('keyup',function(){
    if(div6.value != ''){
      send.classList.add('send-button')
    }
    else{
      send.classList.remove('send-button')
    }
  })
  send.addEventListener('click',function(){
    console.log(child2.scrollHeight)
    if(div6.value == '') return
    child2of2.innerHTML = ''
    let user2 = JSON.parse(localStorage.getItem('users'))
    let user1 = user2.map(ele => {
      if(ele.id == user.id){
        ele.chat.push({
          chatId : 0,
          isSeen : true,
          text : div6.value ,
          sentAtDate : new Date().toDateString(),
          sentAtTime : new Date().toLocaleTimeString()
        })
      }
      return ele
    })
    // console.log(user1)  
    for(let a of user1) {
      if(a.id == user.id){
        const div = createMessage(a)
        child2of2.appendChild(div)
      }
    }
    child2.scrollTo({
      top : child2.scrollHeight,
      behavior:"smooth",
    })
    localStorage.setItem('users',JSON.stringify(user1))
    div6.value = ''
    send.classList.remove('send-button')
  })
  return parent

}

searchProfile.addEventListener('keyup',function(){
  let word = searchProfile.value.split('').map((ele,i) => (i==0)?ele.toUpperCase():ele)
  
  // console.log(word)
  // if(searchProfile.value.length == 0) return
  let users1 = JSON.parse(localStorage.getItem('users'))
  let users2 = users1.filter(ele => {
    let flag = 1;
    for(let i=0;i<word.length;i++){
      if(ele.name[i] != word[i]){
        flag = 0;
      }
    }
    if(flag) return ele;
  })
  // console.log(users2)
  showChat(users2)
})

function createMessage(user){


  const grand = document.createElement('div');
  for(let msg of user.chat){
    let time = myGetTime(msg.sentAtTime,msg.sentAtDate)
    console.log(time)
    const parent = document.createElement('div')
    parent.classList = 'flex msg'
    
    if(msg.chatId == user.id){
      const child1 = document.createElement('img')
      child1.src = user.profilePic
      child1.classList = 'msg-part1'
      parent.appendChild(child1)
    
      const child2 = document.createElement('div')
      child2.classList = 'msg-part2'
      const child2of1 = document.createElement('div')
      // child2of1.textContent = `${user.name} • ${time}`
      child2of1.classList =  'flex'
      const div1 = document.createElement('div')
      div1.classList = 'text-8'
      child2of1.appendChild(div1)
      div1.textContent = `${user.name} •`
      const div2 = document.createElement('div')
      div2.classList = 'text-3'
      div2.textContent = `${time}`
      child2of1.appendChild(div2)
      child2.appendChild(child2of1)
      const child2of2 = document.createElement('div')
      child2of2.classList = 'text-10'
      child2of2.textContent = msg.text
      child2.appendChild(child2of2)
      parent.appendChild(child2)
    }else{
      const child1 = document.createElement('img')
      child1.src = 'https://www.iconarchive.com/download/i112147/fa-team/fontawesome/FontAwesome-Circle-User.1024.png'
      child1.classList = 'msg-part1'
      parent.appendChild(child1)
    
      const child2 = document.createElement('div')
      child2.classList = 'msg-part2'
       const child2of1 = document.createElement('div')
      // child2of1.textContent = `${user.name} • ${time}`
      child2of1.classList =  'flex'
      const div1 = document.createElement('div')
      div1.classList = 'text-8'
      child2of1.appendChild(div1)
      div1.textContent = `Vinayak Modi •`
      const div2 = document.createElement('div')
      div2.classList = 'text-3'
      div2.textContent = `${time}`
      child2of1.appendChild(div2)
      child2.appendChild(child2of1)
      const child2of2 = document.createElement('div')
      child2of2.classList = 'text-10'
      child2of2.textContent = msg.text
      child2.appendChild(child2of2)
      parent.appendChild(child2)
    }
    grand.appendChild(parent)
  }
  return grand
}

function myGetTime(time,date){
  const currentDate = new Date().toDateString().split(' ')
  const currentTime = new Date().toLocaleTimeString().split(' ')
  const previousDate = date.split(' ')
  const previousTime = time.split(' ')
  // console.log(previousTime,previousDate)
  // console.log(currentTime,currentDate)
  if(currentDate[1] == previousDate[1] &&currentDate[2] == previousDate[2] &&currentDate[3] == previousDate[3]){
    let t = previousTime[0].split(':')
    return `${t[0]}:${t[1]} ${previousTime[1]}`
  }
  else{
    return `${previousDate[1]} ${previousDate[2]} ${previousDate[3]}`
  }
}
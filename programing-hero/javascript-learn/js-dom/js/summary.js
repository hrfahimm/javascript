console.log('iam from the summary js file');

const blogs = document.getElementsByTagName('p');
//console.log(blogs);

for(const blog of blogs){
    //console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
}

const harun = document.getElementById('special-blog');
//harun.innerText = 'New harum';
harun.innerHTML = `
    <h4>speacual inner html</h4>
    <p>lorum10smdmhbshkdbh jdnrf</p>
    <div>
        <ul>
            <li>ami pari</li>
            <li>toi janoc</li>
            <li>ami pari</li>
        </ul>
        
    </div>
`

const friends = document.getElementById('friends');
//console.log(friends.childrean);

const fifth = friends.children[9];
console.log(fifth);
friends.removeChild(fifth);


//creat element

const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend);

 
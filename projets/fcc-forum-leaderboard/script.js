const forumLatest =
    'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
    299: { category: 'Career Advice', className: 'career' },
    409: { category: 'Project Feedback', className: 'feedback' },
    417: { category: 'freeCodeCamp Support', className: 'support' },
    421: { category: 'JavaScript', className: 'javascript' },
    423: { category: 'HTML - CSS', className: 'html-css' },
    424: { category: 'Python', className: 'python' },
    432: { category: 'You Can Do This!', className: 'motivation' },
    560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(date) {
    const now = new Date().getTime();
    const dateEnterted = new Date(date).getTime();
    const timeAgoNumber = ((now - dateEnterted) / 60000);
    if (timeAgoNumber < 60) {

        return `${Math.floor(timeAgoNumber)}m ago`;
    } else if (timeAgoNumber < 1440) {

        return `${Math.floor(timeAgoNumber / 60)}h ago`;
    } else {

        return `${Math.floor(timeAgoNumber / 1440)}d ago`;
    }
}

function viewCount(numOfViews) {
    if (numOfViews >= 1000) {
        return Math.trunc(numOfViews / 1000) + 'k';
    } else {
        return numOfViews;
    }
}
// for id= 299 should return href="https://forum.freecodecamp.org/c/career/299".

function forumCategory(categoryId) {
    if (allCategories[categoryId]) {
        return `<a href="${forumCategoryUrl}${allCategories[categoryId].className}/${categoryId}" class="category ${allCategories[categoryId].className}">${allCategories[categoryId].category}</a>`;
            
    } else {
        return `<a href="${forumCategoryUrl}general/${categoryId}" class="category general">General</a>`;

    }

}
// the wrong way - inefficient, creates duplicate avatars for users with multiple posts
// function avatars(posterArr, userArr){
//     let result = '';
//   userArr.forEach(user=>{
//         //find all posters with poster.user_id === user.id
//         const posters = posterArr.filter(poster=> poster.user_id === user.id);
//         if(posters.length > 0){
//             posters.forEach(poster=>{
//                 result += `<img src="${avatarUrl}${user.avatar_template.replace('{size}', '30')}" alt="${user.name}"/>`;
//             }); 
//         }
//   });
//     return result;

// }
// efficient way - use a map to store avatars for each user
function avatars(posters, users) {
  return posters.map(poster => {
    const user = users.find(user => user.id === poster.user_id);
    if (user) {
      let avatar = user.avatar_template.replace('{size}', 30);
      if (avatar.startsWith('/')) {
        avatar = `${avatarUrl}${avatar}`;
      }
      const altText = user.name || user.username;
      return `<img src="${avatar}" alt="${altText}" />`;
    }
    return '';
  }).join('');
}
// The first td element of each table row from the string returned by showLatestPosts should contain two anchor elements, 
// the first with the class of post-title, 
// an href of <forumTopicUrl><slug>/<id>, an anchor text of <title>, 
// and the second obtained by calling forumCategory with category_id.
function showLatestPosts(data) {
    let users = data.users;
    let topic_list = data.topic_list;
    let topics = topic_list.topics;
    let result = '';
    topics.forEach(topic => {
        console.log("Category ID:",topic.category_id)
        console.log("topic:",topic);
        const { id, slug, title, category_id, posters, posts_count, views, bumped_at } = topic;
        result += `<tr>
            <td>
                <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
                ${forumCategory(category_id)}
            </td>

            <td>
                <div class="avatar-container">${avatars(posters, users)}</div>
            </td>
            <td>
                ${posts_count - 1}
            </td>
            <td>
                ${viewCount(views)}
            </td>
            <td>
                ${timeAgo(bumped_at)}
            </td>
        </tr>`;
    });

    document.getElementById("posts-container").innerHTML = result;


}



// Fetch data from forumLatest and call showLatestPosts with the data received
function fetchData(){
    fetch(forumLatest)
        .then(response => response.json())
        .then(data => showLatestPosts(data))
        //.then(data => console.log('data fetched', data))
        .catch(error => console.error('Error fetching data:', error));
}

fetchData();
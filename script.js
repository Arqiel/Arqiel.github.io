// ბლოგ პოსტების მაგალითი
const posts = [
    {
        title: 'ჩემი პირველი პოსტი',
        content: 'ეს არის ჩემი პირველი ბლოგი, სადაც გავუზიარებ ჩემს საყვარელ გამოცდილებას.',
        image: 'FOTO/m01.jpg',
        video: 'VIDEO/003.mp4'
    },
    {
        title: 'მეორე პოსტი',
        content: 'მეორე პოსტი ეხება იმ ფაქტს, რომ განათლება არის მთავარი!',
        image: 'https://via.placeholder.com/300',
        video: 'VIDEO/002.mp4'
    }
];

// პოსტების კონტეინერის ამოღება
const postContainer = document.getElementById('post-container');

// ფუნქცია პოსტების გამოსატანად
function renderPosts() {
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;

        const postContent = document.createElement('p');
        postContent.textContent = post.content;

        postElement.appendChild(postTitle);
        postElement.appendChild(postContent);

        // თუ პოსტს აქვს სურათი, დაამატეთ სურათი
        const postImage = document.createElement('img');
        postImage.src = post.image || "path/to/default-image.jpg";  // დეფოლტური სურათი თუ არ არის პოსტის სურათი
        postImage.alt = post.title;
        postImage.classList.add('post-image');
        postElement.appendChild(postImage);

        // თუ პოსტს აქვს ვიდეო, დაამატეთ ვიდეო
        if (post.video) {
            const postVideo = document.createElement('iframe');
            postVideo.src = post.video;
            postVideo.frameBorder = 0;
            postVideo.allowFullscreen = true;
            postVideo.classList.add('post-video');
            postElement.appendChild(postVideo);
        }

        // პოსტების კონტეინერში დამატება
        postContainer.appendChild(postElement);
    });
}

// დავიძახოთ ფუნქცია პოსტების გამოსატანად, როდესაც გვერდი ჩაიტვირთება
document.addEventListener("DOMContentLoaded", renderPosts);

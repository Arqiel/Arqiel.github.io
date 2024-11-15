// ბლოგ პოსტების მაგალითი
const posts = [
    {
        title: 'ჩემი პირველი პოსტი',
        content: 'ეს არის ჩემი პირველი ბლოგი, სადაც გავუზიარებ ჩემს საყვარელ გამოცდილებას.',
        image: 'https://via.placeholder.com/300',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        title: 'მეორე პოსტი',
        content: 'მეორე პოსტი ეხება იმ ფაქტს, რომ განათლება არის მთავარი!',
        image: 'https://via.placeholder.com/300',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];

// პოსტების კონტეინერის ამოღება
const postContainer = document.getElementById('post-container');

// თითოეული პოსტის გავლით HTML-ის შექმნა
posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <img src="${post.image}" class="post-image" alt="${post.title}">
        <iframe class="post-video" src="${post.video}" frameborder="0" allowfullscreen></iframe>
    `;

    // პოსტების კონტეინერში დამატება
    postContainer.appendChild(postElement);
});

];

// ფუნქცია პოსტების გამოსატანად
function renderPosts() {
    const postContainer = document.getElementById("post-container");

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = post.title;

        const postContent = document.createElement("p");
        postContent.textContent = post.content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);

        // თუ პოსტს აქვს სურათები, დაამატეთ ყველა სურათი
        if (post.images) {
            post.images.forEach(image => {
                const postImage = document.createElement("img");
                postImage.src = image;
                postImage.alt = post.title;
                postImage.classList.add("post-image");
                postDiv.appendChild(postImage);
            });
        } else if (post.image) { // თუ ერთი სურათი არსებობს
            const postImage = document.createElement("img");
            postImage.src = post.image;
            postImage.alt = post.title;
            postImage.classList.add("post-image");
            postDiv.appendChild(postImage);
        } else { // თუ არცერთი სურათი არ არის, დაამატე დეფოლტური სურათი
            const defaultImage = document.createElement("img");
            defaultImage.src = "path/to/default-image.jpg";  // ჩაანაცვლე რეალური სურათით
            defaultImage.alt = "Default Image";
            postDiv.appendChild(defaultImage);
        }

        // თუ პოსტს აქვს ვიდეო, დაამატეთ
        if (post.video) {
            const postVideo = document.createElement("video");
            postVideo.src = post.video;
            postVideo.controls = true; // ვიდეოს მართვის ელემენტების ჩართვა
            postVideo.classList.add("post-video"); // ვიდეოს CSS კლასი
            postDiv.appendChild(postVideo);
        }

        postContainer.appendChild(postDiv);
    });
}

// დავიძახოთ ფუნქცია პოსტების გამოსატანად, როდესაც გვერდი ჩაიტვირთება
document.addEventListener("DOMContentLoaded", renderPosts);

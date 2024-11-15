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

        // თუ პოსტს აქვს მხოლოდ ერთი სურათი, დაამატეთ
        if (post.image) {
            const postImage = document.createElement("img");
            postImage.src = post.image;
            postImage.alt = post.title;
            postImage.classList.add("post-image"); // CSS კლასი დამატება

            postDiv.appendChild(postImage);
        }
        // თუ პოსტს აქვს მრავალი სურათი, დაამატეთ თითოეული
        else if (post.images && Array.isArray(post.images)) {
            post.images.forEach(imageSrc => {
                const postImage = document.createElement("img");
                postImage.src = imageSrc;
                postImage.alt = post.title;
                postImage.classList.add("post-image"); // CSS კლასი დამატება

                postDiv.appendChild(postImage);
            });
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

// ბლოგ პოსტების მასივი
const posts = [
    {
        title: "ჩემი პირველი ბლოგის პოსტი",
        content: "მოგესალმებით ჩემს პირველ ბლოგ პოსტში! მოხარული ვარ ყველას გაგიზიაროთ ჩემი მოგზაურობა და იდეები. დარჩით მეტი!",
        image: "", // სურათის ბმული
        video: "VIDEO/002.mp4" // ვიდეოს ბმული
    },
    {
        title: "JavaScript რჩევები და ხრიკები",
        content: "JavaScript არის მრავალმხრივი ენა, რომლის დაუფლებაც რთულია. აქ მოცემულია რამდენიმე რჩევა, რომელიც დაგეხმარებათ გახდეთ JavaScript-ის პროფესიონალი!",
        images: ["FOTO/კრისტენ.jpg", "m01.jpg", "m02.jpg", "m03.jpg"], // სურათების მასივი
        video: "" // ვიდეოს ბმული
    },
    {
        title: "CSS-ის სილამაზე",
        content: "CSS-ს შეუძლია უბრალო ვებგვერდი გარდაქმნას რაღაც ლამაზად და ფუნქციონალურად. მოდით ერთად გამოვიკვლიოთ CSS-ის ძალა.",
        image: "FOTO/snipers.jpg", // სურათის ბმული
        video: "" // ვიდეოს ბმული
    },
    {
        title: "სილამაზე",
        content: "პეიზაჟი",
        image: "", // სურათის ბმული
        video: "VIDEO/003.mp4" // ვიდეოს ბმული
    }
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

        // თუ პოსტს აქვს სურათი, დაამატეთ
        if (post.image) {
            const postImage = document.createElement("img");
            postImage.src = post.image;
            postImage.alt = post.title;
            postImage.classList.add("post-image"); // CSS კლასი დამატება

            postDiv.appendChild(postImage);
        }
        if (post.images) {
    post.images.forEach(image => {
        const postImage = document.createElement("img");
        postImage.src = image;
        postImage.alt = post.title;
        postImage.classList.add("post-image");
        postDiv.appendChild(postImage);
    });
}

        if (post.image) {
    const postImage = document.createElement("img");
    postImage.src = post.image;
    postImage.alt = post.title;
    postImage.classList.add("post-image");
    postDiv.appendChild(postImage);
} else {
    // თუ სურათი არ არის, დაამატე დეფოლტური სურათი
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
            postVideo.autoplay = true;


            postDiv.appendChild(postVideo);
        }

        postContainer.appendChild(postDiv);
    });
}

// დავიძახოთ ფუნქცია პოსტების გამოსატანად, როდესაც გვერდი ჩაიტვირთება
document.addEventListener("DOMContentLoaded", renderPosts);

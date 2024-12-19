
const suggestedContent = [
    { title: "Film 1", description: "Bu film gerçekten harika!" },
    { title: "Albüm 1", description: "Mükemmel bir albüm, dinleyin!" },
    { title: "Film 2", description: "Göz alıcı görseller ve sürükleyici hikaye!" },
    { title: "Albüm 2", description: "Müzik tarzı çok özgün ve dikkat çekici." }
];

const suggestedDiv = document.getElementById('suggestedContent');
suggestedContent.forEach(content => {
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = `<h3>${content.title}</h3><p>${content.description}</p>`;
    suggestedDiv.appendChild(contentDiv);
});

let comments = [];

function submitComment() {
    const commentInput = document.getElementById('commentInput');
    if (commentInput.value.trim() !== "") {
        comments.push(commentInput.value);
        displayComments();
        commentInput.value = ""; 
    }
}

function displayComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = "";
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        commentsList.appendChild(commentDiv);
    });
}

function rateContent(star) {
    const ratingMessage = document.getElementById('ratingMessage');
    ratingMessage.textContent = `Puan: ${star} yıldız`;
}

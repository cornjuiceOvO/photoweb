console.log('Hello World!');
const photos = document.querySelectorAll('.photo-grid img');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.style.transform = 'scale(1.1)';
    });
});
const commentForm = document.getElementById('comment-form');
const commentText = document.getElementById('comment-text');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = commentText.value;
    // 在这里添加评论逻辑，例如将评论保存到数据库或本地存储
    console.log('Comment:', comment);
    commentText.value = '';
});
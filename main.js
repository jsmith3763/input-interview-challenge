const container = document.querySelector('.container');
const inputContainer = document.querySelector('.input-container');
const submitBtn = document.querySelector('#submit');
const inputBox = document.querySelector('#comment');
const header = document.createElement('div');
const commentList = document.createElement('ul');
inputContainer.append(commentList);

const flaggedWords = ['zoom', 'channel', 'galvanize', 'mcsp', 'garrett', 'ross', 'incompetent', 'unfunny'];

function buildStr(str) {
    let i = 1;
    let newStr = "";
    while (i < str.length) {
        newStr += "-";
        i++;
    }
    return newStr;
}

function newComment() {
    const comment = document.createElement('li');
    comment.classList.add('individual-comment');
    let current = inputBox.value;
    let lowerCase = inputBox.value.toLowerCase();
    if (flaggedWords.some(word => lowerCase.includes(word.toLowerCase()))) {
        let newStr = buildStr(current);
        comment.textContent = current[0] + newStr;
        commentList.append(comment)
        return
    } else {
        comment.textContent = inputBox.value;
        commentList.append(comment);
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newComment()
    inputBox.value = '';
})

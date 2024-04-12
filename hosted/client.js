const uploadFile = async (e) => {
    e.preventDefault();

    const response = await fetch('/upload', {
        method: 'POST',
        body: new FormData(e.target),
    });

    const json = await response.json();
    const img = document.createElement('img');
    img.src = `/retrieve?_id=${json.fileID}`;
    img.width = 400 + 'px';
    document.getElementById('messages').appendChild(img);

    return false;
}

const init = () => {
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', uploadFile);
}

window.onload = init;
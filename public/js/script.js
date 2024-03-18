document.querySelector('#button').addEventListener('click', () => {
    if (document.querySelector('input[name="searchParameter"]:checked').value === 'title') {
            const titulo = document.querySelector('#title').value
            window.location.assign('/search?titulo=' + titulo); 
        } else {
            const ano = document.querySelector('#year').value
            window.location.assign('/search/' + ano); 
        }
    })
addChirps = (event) => {
    event.preventDefault();
    let obj = $(":input");
    fetch('/chirps', {
        method: $.post,
        body: JSON.stringify(obj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
};
document.addEventListener('DOMContentLoaded', (event) => {
    var functions = firebase.functions();
    var addMessage = functions.httpsCallable('addMessage');
    var testName;

    var vimeoTest = functions.httpsCallable('vimeoTest');
    vimeoTest().then((result) => {
        var videoList = [];
        testName = result.data.data[0].name;
        result.data.data.forEach(element => {
            var video = {
                name : element.name,
                link : element.link,
                thumbnail: element.pictures.base_link
            }
            videoList.push(video);
        });
        addMessage(videoList);
        console.log(result.data.data[0].name);
    });
});
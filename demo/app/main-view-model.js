var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();

    viewModel.myItems = [{
        photo_url: "https://i.ytimg.com/vi/V4ykrYFcUvA/hqdefault.jpg"
    }, {
        photo_url: "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/styles/image_embed/public/2015/05/18/super-smash-bros-4-dlc-dragon-ball-z.png"
    }, {
        photo_url: "https://i.ytimg.com/vi/6F9cDSEizFM/maxresdefault.jpg"
    }, {
        photo_url: "https://pmcdeadline2.files.wordpress.com/2015/08/dbzf47.png?w=446&h=299&crop=1"
    }, {
        photo_url: "https://mmhh9a.sn2.livefilestore.com/y1poevPoa8z42IjCj6hYuOiwKODHPxuh-4EctztkTutCLdo0eSSGyFYcSQBCi3SJGKH3KReCw1fYcsACL06bqDerF0Lrkp1DAIK/dbz005.JPG?psid=1"
    }, {
        photo_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyBbARybDAySYZFkWlB9qJpX29c7qPPRiifS_1X8-DDI1q5fWW"
    }, {
        photo_url: "https://s-media-cache-ak0.pinimg.com/originals/ad/50/af/ad50afa74c8499de61c2a2d53108f769.jpg"
    }]

    return viewModel;
}

exports.createViewModel = createViewModel;
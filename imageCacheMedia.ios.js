/**
 * Created by NNieto on 23-11-2016.
 */
var imageCommon = require("./imageCacheMedia.common.js"),
    application = require("application"),
    imageSrc = require("image-source"),
    types = require("utils/types"),
    utils = require("utils/utils"),
    dependencyObservable = require("ui/core/dependency-observable"),
    IMAGE = "ImageCacheMedia",
    utils = require("utils/utils"),
    STRETCH = "stretch",
    fs = require("file-system");

imageCommon.ImageCacheMedia.imageUriProperty.metadata.onSetNativeValue = function(data) {
    var image = data.object;
    var value = data.newValue;
    if (image.placeholder) image.ios.sd_setImageWithURLPlaceholderImage(getRealPath(value), getUIImage(image.placeholder));
    else image.ios.sd_setImageWithURL(getRealPath(value));
};


function getRealPath(value) {
    var fileName = value;
    if (0 === value.indexOf("~/")) {
        fileName = fs.path.join(fs.knownFolders.currentApp().path, value.replace("~/", ""));
        fileName = "file:" + fileName;
    } else if (0 == value.indexOf("res")) {
        fileName = value;
        var res = utils.ad.getApplicationContext().getResources();
        var resName = fileName.substr(utils.RESOURCE_PREFIX.length);
        var identifier = res.getIdentifier(resName, 'drawable', utils.ad.getApplication().getPackageName());
        fileName = "res:/" + identifier;
    } else if (0 === value.indexOf("http")) {
        fileName = value;
    }
    return fileName
}

function getUIImage(value) {
    var image = require('ui/image');
    newImage = new image.Image();
    newImage.src = value;
    return newImage.ios.image;

}

exports.ImageCacheMedia = imageCommon.ImageCacheMedia;
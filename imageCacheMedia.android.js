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
    var Picasso = com.squareup.picasso.Picasso;

    if (image.placeholder) Picasso.with(application.android.context).load(getRealPath(value)).placeholder(getImage(image.placeholder)).into(image.android);
    else Picasso.with(application.android.context).load(getRealPath(value)).into(image.android);
};


function getRealPath(value) {
    var fileName = value;
    if (0 === value.indexOf("~/")) {
        fileName = fs.path.join(fs.knownFolders.currentApp().path, value.replace("~/", ""));
        fileName = "file:" + fileName;
    } else if (0 == value.indexOf(utils.RESOURCE_PREFIX)) {
        fileName = value;
        var res = utils.ad.getApplicationContext().getResources();
        var resName = fileName.substr(utils.RESOURCE_PREFIX.length);
        var identifier = res.getIdentifier(resName, 'drawable', utils.ad.getApplication().getPackageName());
        fileName = utils.RESOURCE_PREFIX + identifier;
    } else if (0 === value.indexOf("http")) {
        fileName = value;
    }
    return fileName
}

function getImage(image) {
    switch (typeof image) {
        case 'string':
            if (image && 0 == image.indexOf(utils.RESOURCE_PREFIX)) {
                let src = imageSrc.fromResource(image.substr(utils.RESOURCE_PREFIX.length));
                var res = utils.ad.getApplicationContext().getResources();
                return new android.graphics.drawable.BitmapDrawable(res, src.android);
            } else if (image && image.indexOf("~/") === 0) {
                let src = imageSrc.fromFile(image);
                var res = utils.ad.getApplicationContext().getResources();
                return new android.graphics.drawable.BitmapDrawable(res, src.android);
            }

    }

}

exports.ImageCacheMedia = imageCommon.ImageCacheMedia;

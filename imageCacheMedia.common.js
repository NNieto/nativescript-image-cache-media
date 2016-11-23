/**
 * Created by NNieto on 23-11-2016.
 */
var dependencyObservable = require("ui/core/dependency-observable"),
    image = require("ui/image"),
    proxy = require("ui/core/proxy"),
    IMAGE = "ImageCacheMedia",
    IMAGEURI = "imageUri",
    PLACEHOLDER = "placeholder";

var ImageCacheMedia = function(_super) {

    __extends(ImageCacheMedia, _super);

    function ImageCacheMedia() {

        _super.apply(this, arguments);
    }

    Object.defineProperty(ImageCacheMedia.prototype, IMAGEURI, {
        get: function() {
            return this._getValue(ImageCacheMedia.imageUriProperty);
        },
        set: function(value) {
            this._setValue(ImageCacheMedia.imageUriProperty, value);
        },
        enumerable: true,
        configurable: true
    });

    ImageCacheMedia.imageUriProperty = new dependencyObservable.Property(IMAGEURI, IMAGE, new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None));

    return ImageCacheMedia;
}(image.Image);

exports.ImageCacheMedia = ImageCacheMedia;
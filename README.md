# NativeScript-Nativescript-image-cache-media
A plugin for caching web and local images on Android and iOS

Using Picasso on Android and SDWebImage on iOS is a simple library that uses the nativescript image component and just adding a cache funcionality. Inspired by nativescript-web-image-cache and nativescript-image-cache-it plugins, Feel free to contribuite or suggest changes.

## License
This plugin is licensed under the MITlicense by Alejandro Nieto

## Installation
To install type

```
tns plugin add nativescript-image-cache-media
```

## Usages
You can use all the nativescript native image module, just set the imageUri property.
## Example
```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:IM="nativescript-image-cache-media">
	<StackLayout>
		<IC:ImageCacheMedia placeholder="~/resources/images/placeholder.png" stretch="aspectFill" imageUri="{{ photo_url }}"/>
	</StackLayout>
</Page>
```

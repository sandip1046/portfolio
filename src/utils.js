// create a utility fucntion which can uses the images present in the assest folder

//this will make easier and we can dynamically import images at different component

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;                 //   assets/${path} this is a  relative path which  need to be append at last of base url of our website.
}

// URL constructor takes two arguments:
// 1. The first argument is a relative path string, constructed by concatenating the path parameter with the string assets/.
//           This means if you pass a path like image.png to the function, the first argument becomes assets / image.png.

// 2. The second argument is import.meta.url, which provides the base URL of the current module(the JavaScript file where this code is running).
//    This ensures that the relative path is resolved correctly against the base URL of the current module.

// .href: The href property of the URL object is used to get the full URL as a string.
// This full URL points to the location of the image file relative to the module's base URL.
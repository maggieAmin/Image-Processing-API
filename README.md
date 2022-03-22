# Image Processing API
## Project description
Bulding an API that can be used in two different ways. The first allows you to place images into your frontend with the size set via URL parameters.
the second use case is as a library to serve properly scaled versions of the images to the front end to reduce page load size.
This API can handle rsizing and serving stored images for you.

## Installation Instructions

1. Extract the submission ZIP
1. Open a terminal and change directory to the project root `$ cd PATH/OF/EXTRACTED/PROJECT/FOLDER`
1. Install the dependencies `$ npm install`
1. Build the project `$ npm run build`
1. Start the server `$ npm run start` OR using `$ node dist/index.js`


## Testing the endpoint
### Running unit tests
1. `npm run test`

### Running the endpoint manually
1. `npm run start`
1. Go to assets/full and put the input image for resizing
1. Visit URL http://localhost:3500/api/image/resize. You should use the following query Parameters:
    1. filename (**_required_**, provided some sample images: encenadaport.jpg, icelandwaterfall.jpg, santamonica.jpg, fjord.jpg, palmtunnel.jpg)
    1. width (**_default = 200_**)
    1. height  (**_default = 200_**)

> Example URL: `http://localhost:3500/api/image/resize?filename=fjord.jpg&width=300&height=300`

## Errors
`400: Bad request! No filename provided`: Filename is a required parameter.
`404: No file in full folder for filename`: Filename provdided doesn't match any files in `assets/full` folder
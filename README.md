# Bounty CSR Application 

This Project is a Simple ReactJS Project which demonstrates the following: 
1. Create a component in React
2. Using useful third party library
3. Create will a good composition 

## Getting started

Follow the instructions below to get the project up and running on your local machine.

## Prerequisite
### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs
Nodejs (v18) is required. 

## Setup 

Install all the npm packages. Go into the project folder and type the following command to install all npm packages
```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```
The Application Runs on **localhost:3000**

## Application design

#### Pages 
- Home - Landing page of the application consist the follow:
    -- Hero image carousel display
    -- And center content
- About - About us information page.
- NoMatch - Landing page for invalid routes/url.

#### Routes 
- Root - This component is where you configured you page route using react-router  

#### Layouts 
- Layout - This component is where you layout the page which has the Header, Footer and Content.
    Is was import in Root(Routes) component 

#### Components 
- Header - this component is part of the layout component that display the logo and navigation links 
- Footer - this component is part of the layout component that contains copy right info
- CenterContent - this component is display in home page and has the center content details 
- HeroCarousel - this component is display in home page and content the hero images slider 
- HeroImage - this component is used in HeroCarousel component and display dynamic image and text.

## Technology Stack 

**ReactJS** - (v18) framework to build the applications
**TailwindCss** - for design library
**ReactRouter** - For managing the routes of the pages 
**Swiper** - for the carousel of the component/image 
**Typescript** - to able to add static type
**Eslint** & **prettier** - For code clean
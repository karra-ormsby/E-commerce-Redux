# E-commerce-Redux

## Description

Given a full functioning E-commerce application built using React Reducers and Context, I have refactored it so that it uses Redux. 

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)

## Installation

No installation necessary. You can view the application [here](https://redux-e-com-app-7923128e3cbd.herokuapp.com/)

## Usage

When the user opens the application they will see a page full of products. 

![homepage](./client/src/images/Homepage.png)

They can click the 'Add to cart' button to add the item to their cart. If they are not signed in however, they will be unable to checkout and will be met with text saying "log in to check out" where the 'Checkout' button would be.

![cart not logged in](./client/src/images/Cart%20(not%20logged%20in).png)

The user can find the log in/sign up button in the navbar. Once the user is logged in, when they click on their cart, they can click the 'Checkout' button

![cart logged in](./client/src/images/Cart%20(logged%20in).png)

and will be brought to a Stripe checkout page.

![checkout](./client/src/images/Checkout.png)


## Credits

Starter code provided by Monash Bootcamp: https://git.bootcampcontent.com/Monash-University/MONU-VIRT-FSF-PT-02-2023-U-LOLC/-/tree/main/Week-22/Day-03/26-Stu_Actions-Reducers/Solved

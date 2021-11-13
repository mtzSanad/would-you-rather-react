# Would You Rather - React Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is part of Udacity React nano degree, it focus on linking all topics learned in the nano-degree to a real project with full functionalities.

## Introduction

This application give the following functionalities: -

    1- Login functionality.
    2- Polls are shown into two category answererd and unanswered.
    3- User is allowed to answere the unanswered questions.
    4- User is allowed to view the result of the answered questions.
    5- User can add a new question.
    6- User can check the leader board that calculate the score based on sum of questions created and questions answered.

## Installing the application

Thia application was created using *create-react-app* it also uses *react-router-dom* , *redux*, *react-redux*

Follow these steps to be able to install the application: -

    1- Clone the main branch of this repo 

    ```
        git clone https://github.com/mtzSanad/would-you-rather-react.git
    ```

    2- Go to application directory and install dependencies

    ```
        npm install
    ```

    3- After finishing installing dependencies we can run the application using

    ```
        npm start
    ```

## Application hierarchy

The application was developed using Rails style, you can find the views under componenet folde, action folder contains actions , action creators and thunk creators.
Reducers folder contains all application reducers.
This application data is controlled enternally inside utils folder, it is faking end point but no real back server


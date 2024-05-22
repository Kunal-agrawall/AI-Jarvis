
# Title & Description

### Virtual Assistant

This code sets up a basic virtual assistant named JARVIS, capable of responding to voice commands and performing various tasks. It uses SpeechRecognition and SpeechSynthesis APIs for voice input and output. The assistant can greet the user based on the time of day, open websites like Google, YouTube, and Facebook, search Google and Wikipedia, tell the current time and date, and even launch applications like Calculator and WordPad. It provides a personalized touch by recognizing the user's name and acknowledging its creator. Overall, it's a functional virtual assistant script ready for further customization and enhancement.


## Table of content
* [Title & Description](#Title&Description)
* [Key-Feature](#Key-Feature)
* [Installation](#Installation)
* [Technology Used](#Tech-used)
* [Project Status](#Project)
* [Contact](#contact)
## Screenshot

<!-- If you have screenshots you'd like to share, include them here. -->

# Key-Feature

### Initialization:  

● It selects the talk button and content element from the HTML.

● Defines functions for speech synthesis (speak) and a function to greet the user based on the time (wishMe).

● Initializes the assistant when the window loads by speaking an initialization message and greeting the user.

### Speech Recognition Setup:

● Checks for browser support for Speech Recognition API and initializes a SpeechRecognition instance.

● Listens for speech input when the talk button is clicked.

### Command Handling:

● Defines a function (takeCommand) to handle different commands recognized by the assistant.

● Responds to greetings ('hey' or 'hello') with a greeting.

● Responds to questions about identity or creator.

● Opens different websites based on user commands like 'open Google', 'open YouTube', or 'open Facebook'.

● Searches Google for general queries starting with 'what is', 'who is', or 'what are'.

● Tells the current time or date when asked.

● If none of the specific commands match, it performs a generic Google search for the query.

## How to make a PR in a project

If you are interested to contribute in this project how to start contribute

1. Fork the repo.

2. After forking, clone the repo to your local machine. To clone the repo to your local machine, run the following command in your terminal:

  ```bash
   git clone https://github.com/<your-github-username>
```

3. Add a remote upstream to the original repo. To add a remote upstream, run the following command in your terminal:
```
git remote add upstream <your-github repo>
```

4. Create a new branch. To create a new branch, run the following command in your terminal:
```
git checkout -b <your-branch-name>
```
5. Make changes in source code.


6. Add your changes To add your changes, run the following command in your terminal:
```
git add <File1 changed> <File2 changed> ...
```
7. Commit your changes. To commit your changes, run the following command in your terminal:
```
git commit -m "<your-commit-message>"
```
8. Push your changes. To push your changes, run the following command in your terminal:
```
git push origin <your-branch-name>
Create a PR.
```
## Alternatively Using GitHub Desktop

1. Open GitHub Desktop and log in to your GitHub account.

2. Make sure you are on the "Current Repository" view. If not, go to "File" and select "Add Local Repository" to add your repository.

3. In the "Current Repository" view, ensure you are on the branch that you want to submit a pull request for. If you're not on the correct branch, use the "Branch" menu to switch to the correct branch.

4. Once you're on the correct branch, make your changes and commit them to the branch. You can do this by clicking the "+" button in the upper-left corner of the GitHub Desktop window, making your changes, and then entering a commit message.

5. After you've made your changes and committed them, click the "Push origin" button in the top-right corner of the GitHub Desktop window. This will push your changes to the remote repository on GitHub.

6. Now, go to the GitHub website, navigate to your fork of the repository, and you should see a button to "Compare & pull request" between your fork and the original repository, click on it.

7. On the pull request page, you can review your changes and add any additional information, such as a title and a description, that you want to include with your pull request.

8. Once you're satisfied with your pull request, click the "Create pull request" button to submit it.

Note: In order to create a pull request, you must have a fork of the original repository in your GitHub account and you must have made the changes in that forked repository.
## Technologies Used

● Javascript      

● HTML  

● CSS 

## Features

#### Natural Language Processing (NLP) :-

● Ability to understand and interpret human language through text or voice inputs.

● Conversational capabilities, enabling more natural interactions with users.

#### Voice Recognition :-

● Capability to recognize and process voice commands.

● Often includes voice activation features like "Hey Siri" or "Ok Google."

#### Personalization :-

● Ability to learn user preferences and habits over time to provide customized responses and suggestions.

● Integration with user calendars, contacts, and personal information to tailor interactions.

#### Task Management :-

● Setting reminders, alarms, and timers.

●Managing to-do lists and scheduling appointments.

#### Information Retrieval :-

● Providing answers to questions using internet searches and database queries.

● Summarizing news, weather updates, and other relevant information.

#### Device Control :-

● Controlling smart home devices such as lights, thermostats, and security systems.

● Integration with IoT (Internet of Things) devices for seamless automation.





## Project Status
Project is :-  / _complete_ / . If you are  working on it, provide reasons why.





## Contact

Created by [@Kunal-agarwall](https://github.com/Kunal-agrawall/) - feel free to contact me! 


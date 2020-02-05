This project was created using create-react-app 
The app was developed and written using Typescript
State management using reacts local state management and Hooks
Styling was written with Styled Components
Testing is written with React testing Library

Dependencies :

 "dependencies": {
    "@material-ui/core": "^4.9.0",
    "@testing-library/user-event": "^7.1.2",
    "@types/jest": "^24.0.0",
    "@types/node": "^12.0.0",
    "@types/react-dom": "^16.9.5",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-icons": "^3.9.0",
    "react-scripts": "3.3.0",
    "styled-components": "^5.0.0",
    "typescript": "~3.7.2"
  }

  Note: "@material-ui/core": "^4.9.0" was not used in the end as i opted for react-icons which worked better with Typescript

Dev Dependencies :

 "devDependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.4.0",
    "@types/react": "^16.9.19",
    "react-test-renderer": "^16.12.0"
  }

Run npm install

Github Repository: https://github.com/robdcon/to-do-app.git

Requirements:

Design/UI : App was styled using Styled Components with the addition of react-icons
Component Nesting : 3 levels of nesting are evident in ToDoContainer and ToDo components
Funtionality: The App meets all the funcitonality requirements: Add, Remove, Edit, Mark Done
Accessibility: I ran lighthouse to test for basic accessibility issues which passed fully. I tested the app for ease of use with keyboard controls which is working as expected. Aria labels are applied for screen readers. Contrast test passes accessibility guidelines. 

Bonus Points: All areas achieved, with some issues

React Testing Library:
Having not had experience with a testing library before, i decided to try React Testing Library with moderate success.
I had success writing some test scripts after research on the subject, however some of the more complex tests presented issues which I am currently researching further to develop my skills.

Typescript:
This was also something I had not used in a project yet but was again compelled to take on the challenge of learning quickly. 
The results were somewhat successful in that the ap works as expected, however I suspecg there are better ways to implement the language which I will discover with more experience.

React Hooks:
I used react Hooks to handle data in the ToDo component, however again, as the technique was completely new to me, I expect to find better means of implementation.

Data persistence:
This was achieved using local storage.

Issues:

I would like to explore the accessibility of the app further and optimise with more enhanced techniques. Future iteration will add the option to change to a darker theme for instance. An even better enhancement would be speech recognition.

I had issues with testing as I am not yet well experienced with TDD, however the benifits are obvious and I have learned a great deal in the last 7 days and will continue to grow my skills in react Testing Library

Typescript presented as many frustrations as rewards! I enjoyed what I have learned so far however and look forward to learning more about its implementation.

I attempted to use Context API for this project, especially to avoid prop drilling, however it proved too much of a learning curve along with the other unfamiliararities I was trying to learn and I could not get it to work how I wanted. This method was abandoned in favour of simple local state management, pending further research into React Context API

I have learned a great deal in the last & days, so thank you for the opportunity, I look forward to your feedback!







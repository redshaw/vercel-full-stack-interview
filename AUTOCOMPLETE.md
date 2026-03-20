The goal of this interview is for you to create a User Interface that performs autocomplete against a dictionary of words using an API endpoint that you'll also write. The frontend interface (as simple as an input in the middle of a page) displays matches based on user input (think of how google autocomplete results look/work as an example). So if the user types “foo” you'll want to look up results using your API and display the results such that the user could select one. The only thing selection absolutely needs to do is `console.log` the chosen result item. You should avoid using external libraries that try to solve too much of the problem — they can get in the way of showing us where you shine. AI tools can’t be used in this interview; we want to see your own thinking and decisions. Please share your screen while you work so we’re on the same page as you build

The goal of this interview is to learn what you can do in a fixed amount of time to deliver the best user experience possible (and what that means to you) - we’re hoping to see your creativity and ingenuity and debugging skills over something that merely works.


1) Form that accepts a text input

2) backend server action that /autocomplete that accepts query params
    POST {
        message: string;
    }

3) model the text file as a trie
    A: Nodes[]
    B: Nodes[]
    ....
    1: 

4) console.log output on selection

# Problem:
Create a histogram of bigrams (adjacent words) from a text file input.

*ex.*

Input:
“The quick brown fox and the quick blue hare.”

Output:
+ “the quick” 2
+ “quick brown” 1
+ “brown fox” 1
+ “fox and” 1
+ “and the” 1
+ “quick blue” 1
+ “blue hare” 1

# Installation requirements:
nodeJS 6.9.4 or higher to ensure ES6 features are supported.

Run `npm install` and then `npm test` to execute unit test coverage.

# Example Usage:
From project root run `node app/main.js ./sampleFiles/supported/sample.txt`

or `npm start`

# Solution notes:
The problem is divided into 3 sub problems:
1) Acquiring text content with support for multiple file extensions
2) Converting the text into well-formed data free from punctuation, special characters, excessive whitespace, etc.
3) Iterating the collection of word pairs and sorting each into a hash structure to be output.

As a homework exercise this application is unlikely to have exhaustive support for every extension in every OS.
For best results, please test with a .txt file. Experimenting with off-the-shelf nodeJS reveals support for txt, docx, rtf, xml,
but not pdf, odt, or doc.

Regarding a "well-formed" data string, the app assumes that a-z and 0-9 are acceptable characters when forming a
space-delimited list of words. Take a look at the cleanInput test coverage for an example of this transformation.

I would have liked to experiment with streaming the input via nodeJS's pipe 
interface, but I am not sure if splitting the text content into chunks would 
create inaccurate histogram output. For now I'll take the performance hit of loading
the entire file into memory first to keep things simple.
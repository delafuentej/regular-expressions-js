// -to define text patterns
// - to validate data submitted by  users
// -to extract parts from longer strings
// -to convert data into a new format

// for example: 
//  - test if a CC Number has the correct number of digits
//  - test if an email address is in a valid format


// WHAT ARE REGULAR EXPRESSIONS?
//  - Regular expressions are a tool for searching and matching parts of a text
//    by describing the patterns
//  - is a set(pattern) of symbols that (match text)describes a text pattern => they are an important und useful tool for working with text
//  - formal language interpreted by a regular expression processor that describe text patterns
//  - they are used for matching, searching, and replacing text
//     => have a defined set of rules that the computer understands, 
//        but there are no variables, 
//        they do not set values/contain instructions/ cannot make decisions => (are not a programming language)

// REGULAR EXPRESSION ENGINES
//  - https://regexr.com
//  - https://regex101.com
//  - https://regexpal.com


// MATCHES => a RegEx matches text if it correctly describes the text
// "A good regular expression should match the text you want to target and only that text, nothing more"

// Characters: literals, metacharacters: wildcard, escaping
//- LITERALS
 //our regular expressions contains the exact text that we want to match
 // regular expressions operate by moving character by character, from left to right, trough a piece of text
 // when regular expressions finds a character that matches the first piece of expressions, 
 //it looks to find a continuous sequence of matching characters
 
 //- METACHARACTERS: 
 // Metacharacter is characters with special meaning:
 //     - can be used to transform literal characters into powerful expressions
 //     - sometimes they can have more than one meaning in order to know how they operate
 //       inside a particular regular expressions
 //     - Wildcard metacharacter (broadest match possible): the character we use is a period or a dot by itself
 //         /h.t/ => matches "hat", "hit", and "hot"
 //         /.a.a.a/ => matches "banana","papaya"
 //         /s...er/ => matches "silver", "sliver", und "slider"
 //     - Escaping metacharacter: "\" tells the regex engine that the next character, the one that comes 
 //       right after it, should be escaped, to treat the matacharacter  that follows as a literal character
 //         "escaping" only for metacharacters, literal characters should never be escaped, because adding them, may give them meaning

 //         /h.._export\.txt/g => matches with "his_export.txt" and "her_export.txt"
 //         /resume..txt/g => matches with "resume1.txt", "resume2.txt", and "resume3_txt.zip"
 //         /resume.\.txt/ => matches only with "resume1.txt" and "resume2.txt", NOT with "resume3_txt.zip"
 
 //- OTHER SPECIAL CHARACTERS:
 /*     - spaces
        - tabs (\t) =>      /a\tb/ matches "a  b"
        - line returns (\r, \n, \r\n) => /p\nt/ matches with:
            sap
            tam
 
 */


 // NOTATION CONVENTIONS =>  /expression/

 // MODES: 
 /* 
    g => global: /expression/g  => match this over and over again throughout the document
                                    find all the matches, look globally

    i => insensitive: /expression/i => pay attention to whether it is uppercase or lowercase letters
    
    m => multiline: /expression/m => can the regular expression match text that stretches across more than one line
 */

 //- ALTERNATION
 // # Regex: orange|yellow


 // CHARACTER SETS=>
 // denoted by a pair of brackets []
 // # Regex: con[sc]en[sc]us => will math consensus, concensus, consencus, concencus

 // # Regex: [cat]  => will match the characters "c","a",or "t", but not the text "cat"
// -we can make more powerful with the help of the caret "^" => # Regex: [^cat]=> will match any character that is not "c","a", or "t"
// and completely match each character "d", "o", or "g"


// Regex: ......... => will completely match with  "orangutan" or "marsupial"
// we can use the escape character "\", to scape the wildcard functionality of the "."

//RANGES
//-Ranges: allow us to specify a range of characters in which we can make a match without having to type out each individual character
//- with Ranges we can match any single capital letter with the # Regex: [A-Z], or any lowercase letter with # Regex: [a-Z], and any digit [0-9]
// the "-" character allow us to specify that we are interesting in matching a range of characters
// # Regex: [a,b,c] === [a-c]
// # Regex: "I adopted [2-9] [b-h]ats" will match which => "I adopted 4 bats", "I adopted 5 cats", or "I adopted 8 hats"
//To match any single capital or lowercase alphabetical character => # Regex: [A-Za-Z]

//SHORTHAND CHARACTER CLASSES
// "\w" => the word character class => represents the  # Regex: [A-Za-z0-9] => it matches a single uppercase character, lowercase character, digit or underscore
// "\d" => the digit character class => represent the # Regex: [0-9] => it matches  a single digit character
// "\s" => the white space character class => represent the # Regex: [ \t\r\n\f\v] => it matches a single space, tab, carriage return, line break, from feed, or vertical tab

//for example: 
// # Regex: \d\s\w\w\w\w\w\w\w =>it matches the text "3 monkeys"

//NEGATED SHORTHAND CHARACTER CLASSES
// - will match any character that is NOT IN THE REGULAR SHORTHAND CLASSES
// "/W" => the non-word character class => represents the # Regex: [^A-Za-z0-9_] => matching any character that is not included in the this range
// "/D" => the non-digit character class => represents the # Regex: [^0-9] => matching any character that is not included in the this range
// "/S" => the non-whitespace character class => represents the # Regex: [^ \t\r\n\f\v => matching any character that is not included in the this range

//GROUPING
 // Grouping denoted with the open parenthesis ( and the closing parenthesis)=>  let us  group parts of a regular expression together, 
 //and allow us to limit alternation to part of the regex
 // Regex: I love (baboons| gorillas) => it match with "I love baboons" snd with "I love gorillas"

 // QUANTIFIERS-FIXED
 // Fixed quantifiers, denoted with curly braces => {} => let us indicate the exact quantify of a character we wish to match, 
 //or allow us to provide a quantity range to match on
//for example: # Regex: \w{3} => it will match exactly 3 words characters || # Regex: \w{4,7} => minimum 4 words and maximum 7 words
// # Regex: amazi{1,3}ng => it will match with "amazing", "amaziing", or "amaziiing"


// QUANTIFIERS-OPTIONAL
// Optional quantifiers indicated by the question mark "?" => allow us to indicate a character in a regex is optional, or can appear
// either 0 times or 1 time
// "?" => only applies to the character directly before it
//for example : # Regex: "The dog eat (spiced)?chips"=> it will match with "The dog eat spiced chips" or "The dog eat chips"

// QUANTIFIERS -0 OR MORE, 1 OR MORE
// "*" => the KLEENE START is a quantifier => matches the preceding character "0" or more times => this means that the character doesnt need
// to appear, can appear once, or can appear many times
// for example: # Regex: meo*x => will match with "mex", "meox", "meoox", "meoooooooooox"
// "+" => The KLEENE PLUS Iis a quantifier which matches the preceding character 1 or more times
// for example:  # Regex: meo+x => will match with "meox","meoox",......"meoooooooooox"

//ANCHORS
// for example => # Regex: ^beach: a good place$ => it matches with "beach: a good place" but it will not match with "beach: a good place to make fun"
// the text must begin with "beach" and the text must end with "place"

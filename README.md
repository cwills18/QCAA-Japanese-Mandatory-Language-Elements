### QCAA Japanese Mandatory Language Elements
---
### Overview and Goals
This website is the first project of mine that I started working on when I started seriously learning how to code. The website's purpose is to provide high school students of Japanese in Queensland with a single portal to use to refer to material they are expected to know by the end of their Year 12 studies. The current version of this material available to students and teachers is a black-and-white PDF containing a few basic lists, but no additional information on any of the grammar or characters presented in the document. My goal was to make it easier for students to look up the words and characters they didn't know, while developing and consolidating their knowledge of grammatical concepts. The design aesthetic has been developed with a teenage, predominantly female, student audience in mind.

### Tech Stack
Being one of my first projects, I hard-coded the whole lot in HTML, CSS and Vanilla Javascript. If I had the skills when I first started this webpage that I do now, I would have created a webpage in React or Vue, and used a custom database with an API to fetch the fields for the large tables and long lists. 

### Interactive Features
1. Large tables of vocabulary can be sorted alphabetically or reverse alphabetically by language (When sorting in Japanese, I decided to allow users to sort by hiragana character only, since most users would not be aware of complex methods behind how kanji is sorted "alphabetically").
2. Users can customise which columns are visible in vocabulary tables. This choice was made to provide users with lots of information about each word, but the ability to focus the table down to the target information they are trying to find and/or study.
3. On the Kanji page, users can choose to open the character up in a popular online dictionary which shows extensive information on that character, including how to write it and common words it appears in. Links were hard-coded (I know right?) as this was the only way I knew at the time, and I didn't want to recreate what was already available on another website.

### Known Bugs and Needed-Improvements
1. Content still needs to be added on several pages
2. Large tables sort slowly and a user may think their button click has not triggered an action. I would like to look into both displaying some kind of "Loading" notice on the screen, and also storing a local cache of tables when they are sorted to allow future sorts to be quicker.

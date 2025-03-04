# WEB102 Prework - *Sea Monster*

Submitted by: **Josue Flores**

**Sea Monster** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **6.5** hours spent in total

## Required Features

The following **required** functionality is completed:

* [ ] The introduction section explains the background of the company and how many games remain unfunded.
* [ ] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [ ] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [ ] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:


* [ ] Implemented a Search Bar feature that allows the user to search for a game present within the current list of available games.
* [ ] Implemented an anchor link named "Our Games" that focuses the page to the document fragment pertaining to the Our Games section.
* [ ] Implemented a progress bar for each of the games that reflects the pledged/goal percentage for the specified game.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='./assets/SeaMonsterGIF.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif.  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

While implementing the Game Search feature, I had some difficulty with updating the currently displayed list of games to reflect the search bar's input value. Initially, the search bar, despite being empty, would not display all the games whenever text was inputted and subsequently deleted as a whole. However, I was able to resolve the issue by invoking the setTimeout function with the searchResults function as the first argument and a time delay of 100ms as the second argument.

While implementing the Progress bar feature, I had difficulty displaying the progress bar within the game-container cards with an empty innerText value. I was able to circumvent this by incorporating an innerText Value of "." and changing the color of text to match the background and making the innerText non-selectable.

## License

    Copyright [2023] [Josue Flores]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

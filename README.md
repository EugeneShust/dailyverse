# DailyVerse 📝

Welcome to **DailyVerse**, your personal digital diary! This project is designed to help you enhance your skills in React, TailwindCSS, and localStorage management by building a basic yet functional personal diary application. You will create a user-friendly interface that displays daily entries sorted by date, allowing users to view, add, and manage their diary entries.

## 📖 Project Overview

**DailyVerse** allows users to create, view, and manage daily diary entries. Each entry includes a title, date, image, and content, which can be easily reviewed in a modal window. Entries are stored in `localStorage`, ensuring data persistence even after refreshing the page.

## 🎯 Features

- **Homepage**: 
  - Displays a list of diary entries sorted by date (newest first).
  - Each entry is shown as a card with a preview image, title, and date.
  - Clicking on a card opens a modal displaying the full entry details (title, image, content, and date).

- **Add Entry**: 
  - Includes a button for adding a new entry, which opens a modal form.
  - Users can enter the title, date, image URL, and content.
  - Prevents adding multiple entries for the same day.
  - Validates that all fields are filled before submission.

- **State Management**: 
  - Manages state using React’s `useState` and `useEffect`.
  - Updates the state to reflect changes like adding or removing entries.

- **LocalStorage**: 
  - Saves all diary entries in `localStorage`.
  - Loads saved entries on page load.

- **Modal for Entries**: 
  - Full entry details are displayed in a modal when clicking on a card.
  - Allows for smooth interaction with content.

## 🛠️ Technologies Used

- **React**: Frontend framework for building dynamic user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **LocalStorage API**: Persistent data storage for diary entries.
- **Render**: Platform for deploying the app as a static site.

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EugeneShust/dailyverse

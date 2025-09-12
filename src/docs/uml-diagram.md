# UML Diagram – System Admin Panel (Demo)

```mermaid
classDiagram
    AdminUser --> Frontend : Uses
    Frontend --> Backend : Sends Requests
    Backend --> Database : Stores/Retrieves Data

    class AdminUser {
      +Login()
      +ViewStatus()
    }

    class Frontend {
      +React + TypeScript
      +UI Components
    }

    class Backend {
      +Node.js Express
      +/api/status
    }

    class Database {
      +MySQL (Mocked)
    }

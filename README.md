# HealthX Project

## Overview
HealthX is a full-stack application that consists of a client-side React application and a server-side application. This project is structured as a Yarn workspace, allowing for efficient management of dependencies and scripts across both the client and server.

## Project Structure
```
HealthX
├── client
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── components
│   │       └── ExampleComponent.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── server
│   ├── src
│   │   ├── index.ts
│   │   └── routes
│   │       └── exampleRoute.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── tsconfig.build.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Yarn (version 1.22 or higher)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd HealthX
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Client
To start the client-side application, navigate to the `client` directory and run:
```
yarn dev
```

### Running the Server
To start the server-side application, navigate to the `server` directory and run:
```
yarn dev
```

### Building the Applications
To build the client-side application, run:
```
yarn build
```
To build the server-side application, navigate to the `server` directory and run:
```
yarn build
```

## Usage
- The client application is a React-based UI that interacts with the server.
- The server application handles API requests and serves data to the client.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
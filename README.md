# 🧱 Blockchain Proposals

A modern, open-source platform for creating, managing, and discussing blockchain-related proposals. Built with Next.js and TypeScript, this project aims to streamline the proposal lifecycle within decentralized ecosystems.

## 🚀 Features

- **Proposal Management**: Create and edit proposals with a user-friendly interface.
- **MetaMask Integration**: Seamless wallet connectivity for authentication and interactions.
- **Next.js Framework**: Utilizes the latest features of Next.js for optimal performance.
- **TypeScript Support**: Ensures type safety and better developer experience.
- **ESLint & PostCSS Configured**: Maintains code quality and styling consistency.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/get-npm)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lucasgabrielgsp/blockchain-proposals.git
   cd blockchain-proposals
   ```
2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```
3. **Run the development server:**

    ```bash
    yarn dev
    # or
    npm run dev
    ```
4. **Open your browser:**

    Navigate to `http://localhost:3000` to see the application in action.

## 🔗 Configure MetaMask

1. Install the [MetaMask](https://metamask.io/) browser extension if you haven't already.
2. Open MetaMask and log in or create a new wallet.
3. Switch to the **Ethereum Sepolia Testnet**:
   - Click on the network dropdown at the top of MetaMask.
   - If the Sepolia Testnet is not listed, click **Show/Hide Networks** or **Add Network**.
   - Enable the **Sepolia Testnet** or manually add it with the following details:
      - **Network Name**: Sepolia Testnet
      - **New RPC URL**: `https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID`
      - **Chain ID**: `11155111`
      - **Currency Symbol**: ETH
      - **Block Explorer URL**: `https://sepolia.etherscan.io`
4. Ensure you have Sepolia ETH in your wallet. You can get test ETH from a [Sepolia faucet](https://sepoliafaucet.com/).

## 🤝 Contributing

Contributions are welcome!

 1.	Fork the repository
 2.	Create your feature branch: git checkout -b feature/YourFeature
 3.	Commit your changes: git commit -m "Add YourFeature"
 4.	Push to the branch: git push origin feature/YourFeature
 5.	Open a pull request

Please ensure your code follows the project standards and passes all linting checks.

## 👨‍💻 Author

> Lucas Santos
- GitHub: @lucasgabrielgsp
- Email: lucasgabrielgtx@gmail.com

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

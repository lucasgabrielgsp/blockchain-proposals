This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Configure MetaMask

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

Now your MetaMask is configured to interact with the Ethereum Sepolia Testnet.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

'use client'
import {useEffect, useState} from 'react';
import {ethers} from 'ethers';

declare global {
    interface Window {
        ethereum: any;
    }
}

interface IProposal {
    title: string;
    description: string;
    proposer: string;
}

const CONTRACT_ADDRESS = "0xAaFBe8c2A388Ae3D155452aF8700EF9CDdEd2AC7";
const ABI = [
    "function createProposal(string _title, string _description) public",
    "function getProposalCount() public view returns (uint256)",
    "function getProposal(uint256 index) public view returns (string memory, string memory, address)"
];

export default function Home() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [proposals, setProposals] = useState<IProposal[]>([]);
    const [loading, setLoading] = useState(false);

    const loadProposals = async () => {
        if (!window.ethereum) return;
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, {provider});
        const count = await contract.getProposalCount();

        const list = [];
        for (let i = 0; i < count; i++) {
            const proposal = await contract.getProposal(i);
            list.push({
                title: proposal[0],
                description: proposal[1],
                proposer: proposal[2],
            });
        }
        setProposals(list);
    };

    const submitProposal = async () => {
        if (!window.ethereum) return;
        setLoading(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        const tx = await contract.createProposal(title, description);
        await tx.wait();
        setTitle('');
        setDescription('');
        loadProposals();
        setLoading(false);
    };

    useEffect(() => {
        loadProposals();
    }, []);

    return (
        <main style={{padding: '2rem'}}>
            <h1>Governance dApp</h1>
            <div>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                /><br/>
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                /><br/>
                <button onClick={submitProposal} disabled={loading}>
                    {loading ? "Submitting..." : "Submit Proposal"}
                </button>
            </div>
            <hr/>
            <h2>Proposals</h2>
            {proposals.map((p, idx) => (
                <div key={idx} style={{marginBottom: '1rem'}}>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <small>By: {p.proposer}</small>
                </div>
            ))}
        </main>
    );
}

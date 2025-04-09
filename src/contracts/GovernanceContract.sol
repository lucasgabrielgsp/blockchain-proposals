// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Governance {
    struct Proposal {
        string title;
        string description;
        address proposer;
    }

    Proposal[] public proposals;

    function createProposal(string calldata _title, string calldata _description) external {
        proposals.push(Proposal({
            title: _title,
            description: _description,
            proposer: msg.sender
        }));
    }

    function getProposals() external view returns (Proposal[] memory) {
        return proposals;
    }

    function getProposalCount() external view returns (uint256) {
        return proposals.length;
    }

    function getProposal(uint256 index) external view returns (string memory, string memory, address) {
        Proposal memory p = proposals[index];
        return (p.title, p.description, p.proposer);
    }
}

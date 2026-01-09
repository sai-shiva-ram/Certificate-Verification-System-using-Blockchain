// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {

    struct Certificate {
        string certHash;
        bool exists;
    }

    mapping(string => Certificate) public certificates;

    function issueCertificate(string memory certId, string memory hash) public {
        require(!certificates[certId].exists, "Certificate already exists");
        certificates[certId] = Certificate(hash, true);
    }

    function verifyCertificate(string memory certId, string memory hash)
        public view returns (bool)
    {
        return certificates[certId].exists &&
               keccak256(bytes(certificates[certId].certHash)) ==
               keccak256(bytes(hash));
    }
}

import React from "react";
import { Box, Icon, Link } from "@adminjs/design-system";
import { BasePropertyProps } from "adminjs";
import { FaRegFileAlt } from "react-icons/fa";

const Document: React.FC<BasePropertyProps> = ({ record, property }) => {

    if (!record) return null;

    const proofKeys = Object.keys(record.params)
        .filter((key) => key.startsWith("proof."))
        .sort((a, b) => {
        const indexA = parseInt(a.split(".")[1]);
        const indexB = parseInt(b.split(".")[1]);
        return indexA - indexB;
        });

    const proofs = proofKeys.map((key) => record.params[key]);

    if (!proofs || proofs.length === 0) {
        return null;
    }

    return (
        <Box display="flex" flexDirection="column" gap="xs">
        {proofs.map((url, idx) => (
            <Link href={url} target="_blank" key={idx}>
            <FaRegFileAlt size={18} />
            Proof {idx + 1}
            </Link>
        ))}
        </Box>
    );
};

export default Document;

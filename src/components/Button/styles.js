import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 22px 10px;
    border: 1px solid #323946;
    background-color: ${props => {
        if (['=', '+', '-', 'x', '/'].includes(props.children)) return '#3b82f6';
        if (['C', 'DEL', '%', '+/-'].includes(props.children)) return '#374151';
        return '#1f2530';
    }};
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    flex: 1;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    outline: none;
    user-select: none;
    
    &:hover {
        background-color: ${props => {
            if (['=', '+', '-', 'x', '/'].includes(props.children)) return '#2563eb';
            if (['C', 'DEL', '%', '+/-'].includes(props.children)) return '#4b5563';
            return '#2c3545';
        }};
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
        opacity: 0.85;
    }
`;

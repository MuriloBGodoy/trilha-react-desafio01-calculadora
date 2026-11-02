import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Content = styled.div`
    background-color: #262c36;
    width: 100%;
    max-width: 360px;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    border: 1px solid #374151;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

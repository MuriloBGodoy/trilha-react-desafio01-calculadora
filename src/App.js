import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      if (prev === '0' || prev === 'Erro') {
        return `${num}`;
      }
      return `${prev}${num}`;
    });
  };

  const handleAddDecimal = () => {
    setCurrentNumber(prev => {
      if (prev === 'Erro') return '0.';
      if (prev.includes('.')) return prev;
      return `${prev}.`;
    });
  };

  const handleDelete = () => {
    setCurrentNumber(prev => {
      if (prev.length <= 1 || prev === 'Erro') return '0';
      return prev.slice(0, -1);
    });
  };

  const handleToggleSign = () => {
    setCurrentNumber(prev => {
      if (prev === '0' || prev === 'Erro') return prev;
      return String(Number(prev) * -1);
    });
  };

  const executeOperation = (num1, num2, op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (op) {
      case '+':
        return n1 + n2;
      case '-':
        return n1 - n2;
      case 'x':
      case '*':
        return n1 * n2;
      case '/':
        if (n2 === 0) return 'Erro';
        return n1 / n2;
      case '%':
        return (n1 * n2) / 100;
      default:
        return n2;
    }
  };

  const handleSetOperation = (op) => {
    if (currentNumber === 'Erro') {
      handleOnClear();
      return;
    }

    if (firstNumber === '0' || operation === '') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    } else {
      const result = executeOperation(firstNumber, currentNumber, operation);
      if (result === 'Erro') {
        setCurrentNumber('Erro');
        setFirstNumber('0');
        setOperation('');
      } else {
        const rounded = String(Math.round(result * 100000000) / 100000000);
        setFirstNumber(rounded);
        setCurrentNumber('0');
        setOperation(op);
      }
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== 'Erro') {
      const result = executeOperation(firstNumber, currentNumber, operation);
      if (result === 'Erro') {
        setCurrentNumber('Erro');
      } else {
        const rounded = String(Math.round(result * 100000000) / 100000000);
        setCurrentNumber(rounded);
      }
      setFirstNumber('0');
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="DEL" onClick={handleDelete} />
          <Button label="%" onClick={() => handleSetOperation('%')} />
          <Button label="/" onClick={() => handleSetOperation('/')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={() => handleSetOperation('x')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleSetOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleSetOperation('+')} />
        </Row>
        <Row>
          <Button label="+/-" onClick={handleToggleSign} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={handleAddDecimal} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;

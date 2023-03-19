import React, {useState} from 'react';
import styles from './counter.module.css';

type Props = {
    value?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
    onBlur?: (value: number) => void;
}

const Counter = ({ value = 1, min = 1, max = 10, onChange }: Props) => {
    const [counterValue, setCounterValue] = useState<number>(0);

    const handleIncrement = () => {
        if (counterValue < max) {
            const newValue = counterValue + 1;
            setCounterValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        }
    }

    const handleDecrement = () => {
        if (counterValue > min) {
            const newValue = counterValue - 1;
            setCounterValue(newValue);
            if (onChange) {
                onChange(newValue);
            }
        }
    }

    return (
        <div className={styles.body}>
            <button className={styles.btn} onClick={handleDecrement}>-</button>
            <span className={styles.count_txt}>{counterValue}</span>
            <button className={styles.btn} onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Counter;
/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react';
import { statusOrderRowStyle, checkboxGridStyle, filterStyle, buttonsColumnStyle, fieldsColumnStyle, filtersContainerStyle } from '../styles/css/filters.styles';
import { useTodoContext } from '../context/TodoContext';
import Button from '../styles/containers/Button';

const FILTER_TYPES = ['RH', 'Tech', 'Marketing', 'Communication'];
const STATUS_OPTIONS = [
    { value: '', label: 'All' },
    { value: 'true', label: 'Completed' },
    { value: 'false', label: 'Pending' },
];
const ORDER_BY_OPTIONS = [
    { value: 'DATE_DESC', label: 'Newest First' },
    { value: 'DATE_ASC', label: 'Oldest First' },
];

const Filters = () => {
    const { filters, setFilters } = useTodoContext();

    const handleTypeChange = useCallback((e) => {
        const selectedType = e.target.value;
        setFilters((prevFilters) => {
            const newTypes = prevFilters.types.includes(selectedType)
                ? prevFilters.types.filter((type) => type !== selectedType)
                : [...prevFilters.types, selectedType];

            return { ...prevFilters, types: newTypes };
        });
    }, [setFilters]);

    const handleStatusChange = useCallback((e) => {
        const value = e.target.value;
        const isDoneValue = value === 'true' ? true : value === 'false' ? false : null;
        setFilters((prevFilters) => ({ ...prevFilters, isDone: isDoneValue }));
    }, [setFilters]);

    const handleOrderByChange = useCallback((e) => {
        setFilters((prevFilters) => ({ ...prevFilters, orderBy: e.target.value }));
    }, [setFilters]);

    const handleBusinessOnly = useCallback(() => {
        setFilters((prevFilters) => ({ ...prevFilters, types: ['Marketing', 'Communication'] }));
    }, [setFilters]);

    const handleResetFilters = useCallback(() => {
        setFilters({ types: [], isDone: null, orderBy: 'DATE_DESC' });
    }, [setFilters]);

    const isBusinessOnly = filters.types.length === 2 && filters.types.includes('Marketing') && filters.types.includes('Communication');

    const CheckboxGroup = ({ types, filters, handleChange }) => (
        <div css={checkboxGridStyle}>
            {types.map((type) => (
                <label key={type}>
                    <input
                        type="checkbox"
                        value={type}
                        checked={filters.types.includes(type)}
                        onChange={handleChange}
                    />
                    {type}
                </label>
            ))}
        </div>
    );

    return (
        <div css={filtersContainerStyle}>
            <div css={fieldsColumnStyle}>
                <div css={filterStyle}>
                    <label>Type:</label>
                    <CheckboxGroup types={FILTER_TYPES} filters={filters} handleChange={handleTypeChange} />
                </div>

                <div css={statusOrderRowStyle}>
                    <div>
                        <label>Status: </label>
                        <select value={filters.isDone === null ? '' : filters.isDone.toString()} onChange={handleStatusChange}>
                            {STATUS_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Order by: </label>
                        <select value={filters.orderBy} onChange={handleOrderByChange}>
                            {ORDER_BY_OPTIONS.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div css={buttonsColumnStyle}>
                <Button type={isBusinessOnly ? 'valid' : 'primary'} onClick={handleBusinessOnly}>TODO Business Only</Button>
                <Button type="primary" onClick={handleResetFilters}>Reset Filters</Button>
            </div>
        </div>
    );
};

export default React.memo(Filters);

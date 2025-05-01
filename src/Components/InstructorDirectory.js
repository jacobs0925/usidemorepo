import React, { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initAuth } from "../Services/Auth";
import LoginModal from "./Login";
import { setNode, listenForData, getNode } from "../Services/DBManager";

const FirearmsTrainingDirectory = () =>
{
    // State for search, sort, and data
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({
        key: 'companyName',
        direction: 'ascending'
    });
    const [data, setData] = useState({});
    const [selectedClassType, setSelectedClassType] = useState(null);
    const [admin, setAdmin] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [editingEnabled, setEditingEnabled] = useState(false);
    const [classTypesList, setClassTypesList] = useState([
        "general", "pistol", "rifle", "shotgun", "ladies", "defense", "ccw", "skeet"
    ])

    // Convert object data to array for display and manipulation
    const dataArray = React.useMemo(() =>
    {
        return Object.entries(data || {}).map(([id, item]) => ({
            id,
            ...item
        }));
    }, [data]);

    useEffect(() =>
    {
        listenForData('instructors/data', setData, true);
        initAuth(() => setAdmin(true), () => { })
    }, []);


    // Handle sorting for regular columns
    const requestSort = (key) =>
    {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending')
        {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Handle class type selection
    const toggleClassTypeFilter = (classType) =>
    {
        if (selectedClassType === classType)
        {
            // If clicking the already selected class type, deselect it
            setSelectedClassType(null);
        } else
        {
            // Otherwise, select the new class type
            setSelectedClassType(classType);
        }
    };

    // Filter by selected class type
    const classTypeFilteredData = React.useMemo(() =>
    {
        if (!selectedClassType) return dataArray;

        return dataArray.filter(item =>
            item.classTypes && item.classTypes[selectedClassType]
        );
    }, [dataArray, selectedClassType]);

    // Sort the data
    const sortedData = React.useMemo(() =>
    {
        let sortableItems = [...classTypeFilteredData];
        if (sortConfig.key)
        {
            sortableItems.sort((a, b) =>
            {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (aValue < bValue)
                {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue)
                {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [classTypeFilteredData, sortConfig]);

    const EditButton = () =>
    {
        const saveEdits = () =>
        {
            setEditingEnabled(false);
            setNode('instructors/data', data);
        }

        if (admin)
        {
            return (
                <><span
                    className={`badge bg-secondary`}
                    style={{ cursor: 'pointer', padding: '8px 12px' }}
                    onClick={editingEnabled ? () => saveEdits() : () => setEditingEnabled(true)}
                >
                    {editingEnabled ? "Save" : "Edit"}
                </span><span
                    className={`badge bg-secondary`}
                    style={{ cursor: 'pointer', padding: '8px 12px' }}
                        onClick={ async () => {
                            setData(await getNode('instructors/data'))
                            setEditingEnabled(false)}}
                >
                        {editingEnabled && "Discard"}
                    </span></>
            )
        } else
        {
            return (
                <span
                    className={`badge bg-secondary`}
                    style={{ cursor: 'pointer', padding: '8px 12px' }}
                    onClick={() => setModalVisible(true)}
                >
                    {editingEnabled ? "Save" : "Edit"}
                </span>
            )
        }
    }

    // Filter by search
    const filteredData = React.useMemo(() =>
    {
        if (!searchTerm) return sortedData;

        return sortedData.filter((item) =>
        {
            const searchFields = [item.companyName, item.contactName, item.email].join(' ').toLowerCase();
            return searchFields.includes(searchTerm.toLowerCase());
        });
    }, [sortedData, searchTerm]);

    // Get sort direction indicator
    const getSortDirectionIndicator = (key) =>
    {
        if (sortConfig.key !== key) return '⇵';
        return sortConfig.direction === 'ascending' ? '↑' : '↓';
    };

    const Button = ({ type, className, style, onClick, item, text, children }) =>
    {
        const [editingText, isEditingText] = useState(false);
        const [currentText, setCurrentText] = useState(text);

        const deleteButton = () =>
        {
            const updatedItem = {
                ...item,
                classTypes: {
                    ...item.classTypes,
                    [type]: false
                }
            };
            const newData = {
                ...data,
                [item.id]: updatedItem
            };
            setData(newData);
        };

        const deleteTypeButton = () =>
        {
            let newArray = classTypesList.filter(element => element !== type);
            setClassTypesList(newArray);
        };

        const handleChange = (e) =>
        {
            setCurrentText(e.target.value);
        };

        const handleBlur = () =>
        {
            if (item)
            {
                const updatedClassTypes = { ...item.classTypes };

                for (const key in updatedClassTypes)
                {
                    if (key === text.toLowerCase())
                    {
                        console.log(1)
                        delete updatedClassTypes[key];
                        break;
                    }
                }

                updatedClassTypes[currentText.toLowerCase()] = true;

                const updatedItem = {
                    ...item,
                    classTypes: updatedClassTypes
                };

                const newData = {
                    ...data,
                    [item.id]: updatedItem
                };

                setData(newData);
            }
            else
            {
                const updatedList = classTypesList.map(t => t === text.toLowerCase() ? currentText.toLowerCase() : t);
                setClassTypesList(updatedList);
            }
            isEditingText(false);
        };

        return (
            <span
                style={style}
                onClick={editingEnabled ? () => isEditingText(true) : () => onClick?.()}
                key={type}
                className={className}
            >
                {editingText ? (
                    <input onChange={handleChange} onBlur={handleBlur} value={currentText} autoFocus />
                ) : (
                    currentText
                )}
                {children}
                {editingEnabled && (
                    <span style={{ cursor: 'pointer' }} onClick={onClick == null ? () => deleteButton() : () => deleteTypeButton()} className="ms-1">
                        X
                    </span>
                )}
            </span>
        );
    };


    const EditableField = ({ className, children, item }) =>
    {
        return (
            <td style={editingEnabled && { cursor: "pointer" }} className={className}>
                {children}
            </td>
        )
    }

    const ButtonContainer = () =>
    {

        return (
            <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="fw-bold">Filter by class type:</span>
                {classTypesList.map(type => (
                    <Button
                        key={type}
                        type={type}
                        className={`badge ${selectedClassType === type ? 'bg-success' : 'bg-secondary'}`}
                        style={{ cursor: 'pointer', padding: '8px 12px' }}
                        onClick={() => toggleClassTypeFilter(type)}
                        text={type.charAt(0).toUpperCase() + type.slice(1)}>

                        {selectedClassType === type && <span className="ms-1">✓</span>}
                    </Button>
                ))}
                {selectedClassType && (
                    <button
                        className="btn btn-sm btn-outline-secondary ms-2"
                        onClick={() => setSelectedClassType(null)}
                    >
                        Clear filter
                    </button>
                )}
                {editingEnabled && <span className="badge bg-secondary" onClick={() => setClassTypesList([...classTypesList, 'NEW'])} style={{ cursor: 'pointer', padding: '8px 12px' }}>+</span>}
            </div>
        )
    }

    const Entry = ({ className, value, handleChange, onSave }) =>
    {
        const [isEditing, setIsEditing] = useState(false);

        const handleBlur = () =>
        {
            setIsEditing(false);
            onSave();
        };

        return (
            <td onClick={editingEnabled ? () => setIsEditing(true) : () => { }} className={className}>
                {isEditing ? (
                    <input
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                        onBlur={handleBlur}
                        onKeyDown={(e) =>
                        {
                            if (e.key === 'Enter')
                            {
                                e.preventDefault();
                                handleBlur();
                            }
                        }}
                        autoFocus
                    />
                ) : (
                    value
                )}
            </td>
        );
    };


    const InstructorData = ({ item }) =>
    {
        const [itemData, setItemData] = useState({
            email: item.email || "",
            phone: item.phoneNumber || "",
            name: item.contactName || "",
            companyName: item.companyName || "",
        });

        const updateData = () =>
        {
            const newData = {
                ...data,
                [item.id]: {
                    ...data[item.id],
                    email: itemData.email,
                    phoneNumber: itemData.phone,
                    contactName: itemData.name,
                    companyName: itemData.companyName,
                },
            };
            setData(newData);
        };

        return (
            <>
                <Entry
                    className="companycolumn"
                    value={itemData.companyName}
                    handleChange={(val) => setItemData({ ...itemData, companyName: val })}
                    onSave={updateData}
                />
                <Entry
                    className="namecolumn"
                    value={itemData.name}
                    handleChange={(val) => setItemData({ ...itemData, name: val })}
                    onSave={updateData}
                />
                <Entry
                    className="emailcolumn"
                    value={itemData.email}
                    handleChange={(val) => setItemData({ ...itemData, email: val })}
                    onSave={updateData}
                />
                <Entry
                    className="phonecolumn"
                    value={itemData.phone}
                    handleChange={(val) => setItemData({ ...itemData, phone: val })}
                    onSave={updateData}
                />
            </>
        );
    };


    return (
        <>
            {modalVisible && <LoginModal onSuccess={() => setAdmin(true)} onClose={() => setModalVisible(false)}></LoginModal>}
            <div className="container mt-4">
                <h2 className="mb-4">Authorized Instructors Directory</h2>

                {/* Search Box */}
                <div className="mb-3 d-flex gap-2 align-items-center">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name, contact, or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <EditButton />
                </div>

                {/* Class Type Filter Section */}
                <div className="mb-3">
                    <ButtonContainer></ButtonContainer>
                </div>

                {/* Data Table with Bootstrap */}
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th onClick={() => requestSort('companyName')} className="companycolumn cursor-pointer">
                                    Company {getSortDirectionIndicator('companyName')}
                                </th>
                                <th onClick={() => requestSort('contactName')} className="namecolumn cursor-pointer">
                                    Contact {getSortDirectionIndicator('contactName')}
                                </th>
                                <th onClick={() => requestSort('email')} className="emailcolumn cursor-pointer">
                                    Email {getSortDirectionIndicator('email')}
                                </th>
                                <th onClick={() => requestSort('phoneNumber')} className="phonecolumn cursor-pointer">
                                    Phone {getSortDirectionIndicator('phoneNumber')}
                                </th>
                                <th className="typecolumn">Class Types</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => (
                                <tr key={item.id}>
                                    <InstructorData item={item}></InstructorData>
                                    <td className="typecolumn">
                                        <div className="d-flex flex-wrap gap-1">
                                            {item.classTypes && Object.entries(item.classTypes).map(([type, offered]) =>
                                                offered && (
                                                    <Button
                                                        item={item}
                                                        key={`${item.id}-${type}`}
                                                        type={type}
                                                        className={`badge ${type === selectedClassType ? 'bg-success' : 'bg-primary'} me-1 mb-1`}
                                                        text={type.charAt(0).toUpperCase() + type.slice(1)}
                                                    >
                                                    </Button>
                                                )
                                            )}
                                            {editingEnabled && <span style={{ cursor: 'pointer' }} className='badge bg-primary me-1 mb-1'
                                                onClick={() =>
                                                {
                                                    const updatedItem = {
                                                        ...item,
                                                        classTypes: {
                                                            ...item.classTypes,
                                                            "new": true
                                                        }
                                                    };

                                                    const newData = {
                                                        ...data,
                                                        [item.id]: updatedItem
                                                    };

                                                    setData(newData);
                                                }}
                                            >+</span>}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredData.length === 0 && (
                    <div className="alert alert-info">
                        {selectedClassType
                            ? `No instructors found offering ${selectedClassType.charAt(0).toUpperCase() + selectedClassType.slice(1)} classes.`
                            : 'No results found.'}
                    </div>
                )}

                <div className="mt-3">
                    <small className="text-muted">
                        Showing {filteredData.length} of {dataArray.length} entries
                        {selectedClassType && ` (filtered by ${selectedClassType} class type)`}
                    </small>
                </div>
            </div>
        </>
    );
};

export default FirearmsTrainingDirectory;
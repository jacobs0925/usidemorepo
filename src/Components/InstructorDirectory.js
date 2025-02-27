import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const firearmTrainingData = [
    {
        "companyName": "2A Academy",
        "contactName": "Douglas Kevilus",
        "email": "contact@2afirearmsacademy.com",
        "phoneNumber": "(707) 410-0389",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "2A Academy",
        "contactName": "Ryan Lewis",
        "email": "contact@2afirearmsacademy.com",
        "phoneNumber": "(707) 410-0389",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Amplio Tactical Training",
        "contactName": "Geraldo Moraes",
        "email": "moraesbr@hotmail.com",
        "phoneNumber": "(571) 405-8546",
        "classTypes": {
            "general": true,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": true,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Applied Civilian Tactics",
        "contactName": "Kevin Pride",
        "email": "kevinpride214@gmail.com",
        "phoneNumber": "(510) 776-0278",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": true,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Bay Area Black Gun Owners Association In",
        "contactName": "Nathanael Jones",
        "email": "bayareabgoa@gmail.com",
        "phoneNumber": "(513) 642-9667",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": true,
            "defense": true,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "CoCo Firearms Training LLC",
        "contactName": "Timothy Trickel",
        "email": "tim@cocofirearmtraining.com",
        "phoneNumber": "(925) 384-1920",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": false,
            "defense": true,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Dan Kimball",
        "contactName": "Dan Kimball",
        "email": "BMIPlusPPlus@gmail.com",
        "phoneNumber": "(925) 348-6007",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Defensive Accuracy",
        "contactName": "Denise King",
        "email": "king@daccw.com",
        "phoneNumber": "(408) 687-3791",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": true,
            "defense": true,
            "ccw": true,
            "skeet": true
        }
    },
    {
        "companyName": "Diablo Defense",
        "contactName": "Nelson Marquez",
        "email": "diablodefense925@gmail.com",
        "phoneNumber": "(925) 550-6192",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": true,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Expert Firearms Training LLC",
        "contactName": "Roy Bryson",
        "email": "roy@expertfirearmstrainingllc.com",
        "phoneNumber": "(925) 550-2780",
        "classTypes": {
            "general": true,
            "pistol": false,
            "rifle": true,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Firearm and Combative Solutions LLC",
        "contactName": "Rene Lauzon",
        "email": "lauzon.rene@gmail.com",
        "phoneNumber": "(408) 406-9196",
        "classTypes": {
            "general": true,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "GMC Training",
        "contactName": "Gabriel Cotton",
        "email": "Gamcotton@gmail.com",
        "phoneNumber": "(510) 955-7058",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Golden State Defense",
        "contactName": "Bud Massey",
        "email": "580@comcast.net",
        "phoneNumber": "(510) 669-0580",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Golden State Defense",
        "contactName": "Guadalupe Thomas",
        "email": "guadalupet1951@gmail.com",
        "phoneNumber": "(510) 375-7126",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Grover Group",
        "contactName": "Anoop Grover",
        "email": "anoop@grovergroup.biz",
        "phoneNumber": "(510) 676-6076",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": true,
            "defense": true,
            "ccw": true,
            "skeet": true
        }
    },
    {
        "companyName": "GunSmart Educators",
        "contactName": "Bruce Brandt",
        "email": "brucebrandtent@gmail.com",
        "phoneNumber": "(925) 890-9881",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "GY6 Tactical Innovations",
        "contactName": "Kevin Rabon",
        "email": "kevin.rabon@gy6ti.com",
        "phoneNumber": "(925) 209-4886",
        "classTypes": {
            "general": true,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Johnathan Marques",
        "contactName": "Jonathan Marques",
        "email": "jgm010@gmail.com",
        "phoneNumber": "(415) 595-6117",
        "classTypes": {
            "general": false,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": true
        }
    },
    {
        "companyName": "Joshua John",
        "contactName": "joshua.john@comcast.net",
        "email": "joshua.john@comcast.net",
        "phoneNumber": "(925) 766-9680",
        "classTypes": {
            "general": false,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": true
        }
    },
    {
        "companyName": "Kelly Brown",
        "contactName": "Kelly Brown",
        "email": "shesapistol2a@yahoo.com",
        "phoneNumber": "(510) 529-9602",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": true,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Paladin Tactical",
        "contactName": "Daniel Butler",
        "email": "dan@paladin-tactical-us.com",
        "phoneNumber": "(707) 863-1064",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": true,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Paladin Tactical",
        "contactName": "Barry Grove",
        "email": "hengrove@sbcglobal.net",
        "phoneNumber": "(925) 357-1368",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": false,
            "ladies": true,
            "defense": true,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Progressive Accuracy Training Group",
        "contactName": "Stephen Perrilliat",
        "email": "progressiveaccuracy@gmail.com",
        "phoneNumber": "(925) 787-6224",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Safe and Sane Training",
        "contactName": "Mark Taylor",
        "email": "safeandsanetraining@gmail.com",
        "phoneNumber": "(650) 740-8969",
        "classTypes": {
            "general": false,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Seamus Hodgin",
        "contactName": "Seamus Hodgin",
        "email": "moxie 2428@gmail.com",
        "phoneNumber": "(415) 571-60091",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": true,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Shakib Akbari",
        "contactName": "Shakib Akbari",
        "email": "shakib.akbari@gmail.com",
        "phoneNumber": "(510)599-5979",
        "classTypes": {
            "general": false,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": true
        }
    },
    {
        "companyName": "Shields Defense",
        "contactName": "Michael Shields",
        "email": "michael@shieldsdefensellc.com",
        "phoneNumber": "(707) 337-0262",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Shields Defense",
        "contactName": "Gregory Shields",
        "email": "info@shieldsdefencellc.com",
        "phoneNumber": "(707) 337-0262",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Shooting Sport Firearms Training",
        "contactName": "Laurence Hood",
        "email": "larry@ehood.com",
        "phoneNumber": "(925) 788-1142",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Spectrolite Training",
        "contactName": "Kelly Chi",
        "email": "kelly@spectrolitedefense.com",
        "phoneNumber": "(510) 859-8270",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Split Fire Training LLC",
        "contactName": "Michael Kenner",
        "email": "mikek_27@yahoo.com",
        "phoneNumber": "(707) 712-8300",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Split Second Response Inc",
        "contactName": "Tim Calvin",
        "email": "split_second_response@yahoo.com",
        "phoneNumber": "(925) 234-8718",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": true,
            "ccw": true,
            "skeet": false
        }
    },
    {
        "companyName": "Sweet Heat Ladies Club",
        "contactName": "Debbie Williams",
        "email": "debbie@sweetheatladiesgunclub.com",
        "phoneNumber": "(510) 7728048",
        "classTypes": {
            "general": false,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": true,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Tactical Wizard",
        "contactName": "Theodore Trinh",
        "email": "tacticalwizardllc@gmail.com",
        "phoneNumber": "(925) 765-2243",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": true,
            "shotgun": true,
            "ladies": false,
            "defense": true,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Team Sargentini",
        "contactName": "Trish Vanessa Sargentini",
        "email": "trish@sargentini.dev",
        "phoneNumber": "(415) 347-1345",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Threat Scenarios",
        "contactName": "Brian Brisco",
        "email": "brian@threatscenarios.com",
        "phoneNumber": "(707) 333-1308",
        "classTypes": {
            "general": true,
            "pistol": true,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": true,
            "ccw": false,
            "skeet": false
        }
    },
    {
        "companyName": "Ty Robinson",
        "contactName": "Ty Robinson",
        "email": "ty.robinson1951@gmail.com",
        "phoneNumber": "(925) 437-495",
        "classTypes": {
            "general": true,
            "pistol": false,
            "rifle": false,
            "shotgun": false,
            "ladies": false,
            "defense": false,
            "ccw": false,
            "skeet": false
        }
    }
]
const FirearmsTrainingDirectory = () =>
{
    // State for search, sort, and data
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({
        key: 'companyName',
        direction: 'ascending'
    });
    const [data] = useState(firearmTrainingData);
    const [selectedClassType, setSelectedClassType] = useState(null);

    // All possible class types
    const classTypesList = [
        "general", "pistol", "rifle", "shotgun", "ladies", "defense", "ccw", "skeet"
    ];

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
        if (!selectedClassType) return data;

        return data.filter(item => item.classTypes[selectedClassType]);
    }, [data, selectedClassType]);

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

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Authorized Instructors Directory</h2>

            {/* Search Box */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name, contact, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Class Type Filter Section */}
            <div className="mb-3">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                    <span className="fw-bold">Filter by class type:</span>
                    {classTypesList.map(type => (
                        <span
                            key={type}
                            className={`badge ${selectedClassType === type ? 'bg-success' : 'bg-secondary'}`}
                            style={{ cursor: 'pointer', padding: '8px 12px' }}
                            onClick={() => toggleClassTypeFilter(type)}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                            {selectedClassType === type && <span className="ms-1">✓</span>}
                        </span>
                    ))}
                    {selectedClassType && (
                        <button
                            className="btn btn-sm btn-outline-secondary ms-2"
                            onClick={() => setSelectedClassType(null)}
                        >
                            Clear filter
                        </button>
                    )}
                </div>
            </div>

            {/* Data Table with Bootstrap */}
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th onClick={() => requestSort('companyName')} className="cursor-pointer">
                                Company {getSortDirectionIndicator('companyName')}
                            </th>
                            <th onClick={() => requestSort('contactName')} className="cursor-pointer">
                                Contact {getSortDirectionIndicator('contactName')}
                            </th>
                            <th onClick={() => requestSort('email')} className="cursor-pointer">
                                Email {getSortDirectionIndicator('email')}
                            </th>
                            <th onClick={() => requestSort('phoneNumber')} className="cursor-pointer">
                                Phone {getSortDirectionIndicator('phoneNumber')}
                            </th>
                            <th>Class Types</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>
                                    <a href={`mailto:${item.email}`}>{item.email}</a>
                                </td>
                                <td>{item.phoneNumber}</td>
                                <td>
                                    <div className="d-flex flex-wrap gap-1">
                                        {Object.entries(item.classTypes).map(([type, offered]) =>
                                            offered && (
                                                <span key={type} className={`badge ${type === selectedClassType ? 'bg-success' : 'bg-primary'} me-1 mb-1`}>
                                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                                </span>
                                            )
                                        )}
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
                    Showing {filteredData.length} of {data.length} entries
                    {selectedClassType && ` (filtered by ${selectedClassType} class type)`}
                </small>
            </div>
        </div>
    );
};

export default FirearmsTrainingDirectory;
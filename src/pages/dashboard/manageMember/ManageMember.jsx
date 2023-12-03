import { useState } from 'react';

const ManageMember = () => {
  const [viewType, setViewType] = useState('table'); // 'table' is the default view

  const handleChangeView = (event) => {
    setViewType(event.target.value);
  };

  const members = [
    { id: 1, name: 'Tonmoy', age: 25, email: 'Tonmoy@gmail.com' },
    { id: 2, name: 'Shamim', age: 30, email: 'ShamimMiya@gmail.com' },
    { id: 3, name: 'Habib', age: 28, email: 'AhsanHabib@gmail.com' },
    { id: 4, name: 'Foysal', age: 23, email: 'Foysal@gmail.com' },
  ];

  return (
    <div>
      <select value={viewType} onChange={handleChangeView}>
        <option value="table">Members</option>
      </select>

      {viewType === 'table' && (
        <div style={{ margin: '20px' }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.age}</td>
                  <td>{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageMember;
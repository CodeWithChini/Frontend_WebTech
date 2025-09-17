import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [editingId, setEditingId] = useState(null);

  const API_URL = 'https://6881dd4266a7eb81224c5c1e.mockapi.io/Student';

  // Fetch all students
  const fetchStudents = () => {
    setLoading(true);
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Create a new student
  const createStudent = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudents([...students, data]);
        setFormData({ name: '', email: '' });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error creating student:', error);
        setLoading(false);
      });
  };

  // Update a student
  const updateStudent = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`${API_URL}/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(updatedStudent => {
        setStudents(students.map(student =>
          student.id === editingId ? updatedStudent : student
        ));
        setFormData({ name: '', email: '' });
        setEditingId(null);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating student:', error);
        setLoading(false);
      });
  };

  // Delete a student
  const deleteStudent = (id) => {
    setLoading(true);

    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error deleting student:', error);
        setLoading(false);
      });
  };

  // Edit student - populate form with existing data
  const editStudent = (student) => {
    setFormData({
      name: student.name || '',
      email: student.email || '',
    });
    setEditingId(student.id);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', email: '' });
    setEditingId(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Student</h1>

      {/* Student Form */}
      <form onSubmit={editingId ? updateStudent : createStudent} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>{editingId ? 'Edit Student' : 'Add New Student'}</h2>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ marginRight: '10px', padding: '8px' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ marginRight: '10px', padding: '8px' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ padding: '8px 16px', marginRight: '10px' }}>
          {loading ? 'Processing...' : (editingId ? 'Update' : 'Add')}
        </button>
        {editingId && (
          <button type="button" onClick={handleCancelEdit} style={{ padding: '8px 16px' }}>
            Cancel
          </button>
        )}
      </form>

      {/* Students List */}
      <h2>Students List</h2>
      {loading && students.length === 0 ? (
        <p>Loading students...</p>
      ) : students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div style={{ display: 'grid', gap: '10px' }}>
          {students.map(student => (
            <div key={student.id} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3>{student.name}</h3>
                <p>Email: {student.email}</p>
              </div>
              <div>
                <button
                  onClick={() => editStudent(student)}
                  disabled={loading}
                  style={{ marginRight: '10px', padding: '5px 10px' ,backgroundColor:'blue', color:'white'}}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteStudent(student.id)}
                  disabled={loading}
                  style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;

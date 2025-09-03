import React, { useState, useEffect } from 'react';
import api from '../api/client';
import './Dashboard.css';

interface Puja {
  _id: string;
  name: string;
  description: string;
  benefits: string[];
  duration: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  isPopular: boolean;
  rating: number;
  reviews: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const PujaManagement: React.FC = () => {
  const [pujas, setPujas] = useState<Puja[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPuja, setEditingPuja] = useState<Puja | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    benefits: '',
    duration: '',
    price: '',
    originalPrice: '',
    image: '',
    category: '',
    isPopular: false,
    rating: '5',
    reviews: '0',
    isActive: true
  });

  const DASHBOARD_PREFIX = '/dashboard';

  // Fetch pujas
  const fetchPujas = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`${DASHBOARD_PREFIX}/pujas`);
      setPujas(data);
    } catch (err) {
      console.log('dashLogger', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPujas();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const pujaData = {
      ...formData,
      benefits: formData.benefits.split(',').map(benefit => benefit.trim()).filter(benefit => benefit),
      price: Number(formData.price),
      originalPrice: Number(formData.originalPrice),
      rating: Number(formData.rating),
      reviews: Number(formData.reviews)
    };

    try {
      if (editingPuja) {
        await api.put(`${DASHBOARD_PREFIX}/pujas/${editingPuja._id}`, pujaData);
      } else {
        await api.post(`${DASHBOARD_PREFIX}/pujas`, pujaData);
      }
      
      setShowAddForm(false);
      setEditingPuja(null);
      resetForm();
      fetchPujas();
    } catch (err) {
      console.error('Error saving puja:', err);
      setError(err instanceof Error ? err.message : 'Failed to save puja');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      benefits: '',
      duration: '',
      price: '',
      originalPrice: '',
      image: '',
      category: '',
      isPopular: false,
      rating: '5',
      reviews: '0',
      isActive: true
    });
  };

  // Edit puja
  const handleEdit = (puja: Puja) => {
    setEditingPuja(puja);
    setFormData({
      name: puja.name,
      description: puja.description,
      benefits: puja.benefits.join(', '),
      duration: puja.duration,
      price: puja.price.toString(),
      originalPrice: puja.originalPrice.toString(),
      image: puja.image,
      category: puja.category,
      isPopular: puja.isPopular,
      rating: puja.rating.toString(),
      reviews: puja.reviews.toString(),
      isActive: puja.isActive
    });
    setShowAddForm(true);
  };

  // Delete puja
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this puja?')) {
      try {
        await api.delete(`${DASHBOARD_PREFIX}/pujas/${id}`);
        fetchPujas();
      } catch (err) {
        console.error('Error deleting puja:', err);
        setError(err instanceof Error ? err.message : 'Failed to delete puja');
      }
    }
  };

  // Toggle puja status
  const handleToggleStatus = async (id: string) => {
    try {
      await api.patch(`${DASHBOARD_PREFIX}/pujas/${id}/toggle`);
      fetchPujas();
    } catch (err) {
      console.error('Error toggling puja status:', err);
      setError(err instanceof Error ? err.message : 'Failed to toggle puja status');
    }
  };

  // Cancel form
  const handleCancel = () => {
    setShowAddForm(false);
    setEditingPuja(null);
    resetForm();
  };

  return (
    <div className="dashboard-section">
      <div className="section-header">
        <h2>Puja Management</h2>
        <button 
          className="add-btn"
          onClick={() => setShowAddForm(true)}
        >
          Add New Puja
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError('')}>×</button>
        </div>
      )}

      {showAddForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h3>{editingPuja ? 'Edit Puja' : 'Add New Puja'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Benefits (comma-separated):</label>
                <textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleInputChange}
                  placeholder="Benefit 1, Benefit 2, Benefit 3"
                  required
                />
              </div>

              <div className="form-group">
                <label>Duration:</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 2-3 hours"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price (₹):</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Original Price (₹):</label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Image URL:</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Marriage, Career, General"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Rating:</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    min="0"
                    max="5"
                    step="0.1"
                  />
                </div>

                <div className="form-group">
                  <label>Reviews:</label>
                  <input
                    type="number"
                    name="reviews"
                    value={formData.reviews}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="isPopular"
                    checked={formData.isPopular}
                    onChange={handleInputChange}
                  />
                  Popular Puja
                </label>
              </div>

              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                  />
                  Active
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingPuja ? 'Update' : 'Create'} Puja
                </button>
                <button type="button" onClick={handleCancel} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="loading">Loading pujas...</div>
      ) : (
        <div className="items-grid">
          {pujas.map((puja) => (
            <div key={puja._id} className="item-card">
              <div className="item-image">
                <img src={puja.image} alt={puja.name} />
                {puja.isPopular && <span className="popular-badge">Popular</span>}
                <span className={`status-badge ${puja.isActive ? 'active' : 'inactive'}`}>
                  {puja.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <div className="item-content">
                <h3>{puja.name}</h3>
                <p className="item-category">{puja.category}</p>
                <p className="item-description">{puja.description}</p>
                
                <div className="item-details">
                  <span>Duration: {puja.duration}</span>
                  <span>Price: ₹{puja.price}</span>
                  <span>Rating: {puja.rating} ({puja.reviews} reviews)</span>
                </div>

                <div className="item-actions">
                  <button 
                    onClick={() => handleEdit(puja)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleToggleStatus(puja._id)}
                    className={`toggle-btn ${puja.isActive ? 'deactivate' : 'activate'}`}
                  >
                    {puja.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button 
                    onClick={() => handleDelete(puja._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && pujas.length === 0 && (
        <div className="no-items">
          <p>No pujas found. Add your first puja to get started!</p>
        </div>
      )}
    </div>
  );
};

export default PujaManagement;

import React, { useState, useEffect } from 'react';
import './Dashboard.css';

interface Plan {
  label: string;
  minutes: number;
  discount: string;
  price: number;
  oldPrice: number;
  connect: string;
  rating: number;
}

interface Astrologer {
  _id: string;
  name: string;
  expertise: string;
  languages: string;
  reviews: number;
  rating: number;
  experience: number;
  avatar: string;
  about: string;
  specializations: string[];
  plans: Plan[];
  gallery: string[];
  isActive: boolean;
  consultationUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard: React.FC = () => {
  const [astrologers, setAstrologers] = useState<Astrologer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAstrologer, setEditingAstrologer] = useState<Astrologer | null>(null);
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    expertise: '',
    languages: '',
    experience: '',
    avatar: '',
    about: '',
    consultationUrl: '',
    specializations: '',
    gallery: '',
    plans: [] as Plan[]
  });

  const [newPlan, setNewPlan] = useState({
    label: '',
    minutes: '',
    discount: '',
    price: '',
    oldPrice: '',
    connect: '',
    rating: '5'
  });

  const API_BASE_URL = 'http://localhost:5000/api/dashboard';

  // Fetch astrologers
  const fetchAstrologers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/astrologers`);
      if (!response.ok) throw new Error('Failed to fetch astrologers');
      const data = await response.json();
      setAstrologers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAstrologers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle plan input changes
  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlan({
      ...newPlan,
      [e.target.name]: e.target.value
    });
  };

  // Add plan to form
  const addPlan = () => {
    if (newPlan.label && newPlan.minutes && newPlan.price) {
      const plan: Plan = {
        label: newPlan.label,
        minutes: parseInt(newPlan.minutes),
        discount: newPlan.discount,
        price: parseFloat(newPlan.price),
        oldPrice: parseFloat(newPlan.oldPrice),
        connect: newPlan.connect,
        rating: parseInt(newPlan.rating)
      };
      
      setFormData({
        ...formData,
        plans: [...formData.plans, plan]
      });
      
      setNewPlan({
        label: '',
        minutes: '',
        discount: '',
        price: '',
        oldPrice: '',
        connect: '',
        rating: '5'
      });
    }
  };

  // Remove plan from form
  const removePlan = (index: number) => {
    setFormData({
      ...formData,
      plans: formData.plans.filter((_, i) => i !== index)
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      expertise: '',
      languages: '',
      experience: '',
      avatar: '',
      about: '',
      consultationUrl: '',
      specializations: '',
      gallery: '',
      plans: []
    });
    setEditingAstrologer(null);
    setShowAddForm(false);
  };

  // Add new astrologer
  const handleAddAstrologer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const astrologerData = {
        ...formData,
        experience: parseInt(formData.experience),
        reviews: 0,
        rating: 5,
        specializations: formData.specializations.split(',').map(s => s.trim()).filter(s => s),
        gallery: formData.gallery.split(',').map(s => s.trim()).filter(s => s),
        isActive: true
      };

      const response = await fetch(`${API_BASE_URL}/astrologers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(astrologerData),
      });

      if (!response.ok) throw new Error('Failed to add astrologer');
      
      await fetchAstrologers();
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add astrologer');
    }
  };

  // Update astrologer
  const handleUpdateAstrologer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAstrologer) return;

    try {
      const astrologerData = {
        ...formData,
        experience: parseInt(formData.experience),
        specializations: formData.specializations.split(',').map(s => s.trim()).filter(s => s),
        gallery: formData.gallery.split(',').map(s => s.trim()).filter(s => s),
      };

      const response = await fetch(`${API_BASE_URL}/astrologers/${editingAstrologer._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(astrologerData),
      });

      if (!response.ok) throw new Error('Failed to update astrologer');
      
      await fetchAstrologers();
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update astrologer');
    }
  };

  // Delete astrologer
  const handleDeleteAstrologer = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this astrologer?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/astrologers/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete astrologer');
      
      await fetchAstrologers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete astrologer');
    }
  };

  // Toggle astrologer status
  const handleToggleStatus = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/astrologers/${id}/toggle`, {
        method: 'PATCH',
      });

      if (!response.ok) throw new Error('Failed to toggle astrologer status');
      
      await fetchAstrologers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to toggle status');
    }
  };

  // Edit astrologer
  const handleEditAstrologer = (astrologer: Astrologer) => {
    setEditingAstrologer(astrologer);
    setFormData({
      name: astrologer.name,
      expertise: astrologer.expertise,
      languages: astrologer.languages,
      experience: astrologer.experience.toString(),
      avatar: astrologer.avatar,
      about: astrologer.about,
      consultationUrl: astrologer.consultationUrl || '',
      specializations: astrologer.specializations.join(', '),
      gallery: astrologer.gallery.join(', '),
      plans: astrologer.plans
    });
    setShowAddForm(true);
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Astrologer Management Dashboard</h1>
        <p>Manage your astrologer profiles and services</p>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError('')}>×</button>
        </div>
      )}

      <div className="dashboard-actions">
        <button 
          className="add-product-btn"
          onClick={() => setShowAddForm(true)}
        >
          {editingAstrologer ? 'Cancel Edit' : 'Add New Astrologer'}
        </button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="form-container">
          <h2>{editingAstrologer ? 'Edit Astrologer' : 'Add New Astrologer'}</h2>
          <form onSubmit={editingAstrologer ? handleUpdateAstrologer : handleAddAstrologer}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Astrologer Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="expertise">Expertise:</label>
                <input
                  type="text"
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  placeholder="e.g., Tarot Reading, Vedic Astrology"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="languages">Languages:</label>
                <input
                  type="text"
                  id="languages"
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                  placeholder="e.g., English, Hindi"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Experience (Years):</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="avatar">Avatar URL:</label>
              <input
                type="url"
                id="avatar"
                name="avatar"
                value={formData.avatar}
                onChange={handleInputChange}
                placeholder="https://example.com/avatar.jpg"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="about">About:</label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                rows={4}
                placeholder="Detailed description about the astrologer..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="specializations">Specializations (comma-separated):</label>
              <input
                type="text"
                id="specializations"
                name="specializations"
                value={formData.specializations}
                onChange={handleInputChange}
                placeholder="Love & Relationship, Career & Job, Marriage, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="gallery">Gallery URLs (comma-separated):</label>
              <input
                type="text"
                id="gallery"
                name="gallery"
                value={formData.gallery}
                onChange={handleInputChange}
                placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="consultationUrl">Consultation URL (optional):</label>
              <input
                type="url"
                id="consultationUrl"
                name="consultationUrl"
                value={formData.consultationUrl}
                onChange={handleInputChange}
                placeholder="https://forms.google.com/..."
              />
            </div>

            {/* Plans Section */}
            <div className="plans-section">
              <h3>Consultation Plans</h3>
              {formData.plans.map((plan, index) => (
                <div key={index} className="plan-item">
                  <span>{plan.label} - {plan.minutes}min - ₹{plan.price}</span>
                  <button type="button" onClick={() => removePlan(index)} className="remove-plan-btn">
                    Remove
                  </button>
                </div>
              ))}
              
              <div className="add-plan-form">
                <h4>Add New Plan</h4>
                <div className="plan-inputs">
                  <input
                    type="text"
                    name="label"
                    placeholder="Plan Label"
                    value={newPlan.label}
                    onChange={handlePlanChange}
                  />
                  <input
                    type="number"
                    name="minutes"
                    placeholder="Minutes"
                    value={newPlan.minutes}
                    onChange={handlePlanChange}
                  />
                  <input
                    type="text"
                    name="discount"
                    placeholder="Discount"
                    value={newPlan.discount}
                    onChange={handlePlanChange}
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={newPlan.price}
                    onChange={handlePlanChange}
                  />
                  <input
                    type="number"
                    name="oldPrice"
                    placeholder="Old Price"
                    value={newPlan.oldPrice}
                    onChange={handlePlanChange}
                  />
                  <input
                    type="text"
                    name="connect"
                    placeholder="Connect via"
                    value={newPlan.connect}
                    onChange={handlePlanChange}
                  />
                </div>
                <button type="button" onClick={addPlan} className="add-plan-btn">
                  Add Plan
                </button>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                {editingAstrologer ? 'Update Astrologer' : 'Add Astrologer'}
              </button>
              <button type="button" className="cancel-btn" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Astrologers List */}
      <div className="products-section">
        <h2>Current Astrologers ({astrologers.length})</h2>
        {astrologers.length === 0 ? (
          <div className="no-products">
            <p>No astrologers found. Add your first astrologer to get started!</p>
          </div>
        ) : (
          <div className="products-grid">
            {astrologers.map((astrologer) => (
              <div key={astrologer._id} className="product-card">
                <div className="product-info">
                  <div className="astro-header">
                    <img src={astrologer.avatar} alt={astrologer.name} className="astro-avatar-small" />
                    <div>
                      <h3>{astrologer.name}</h3>
                      <p className="astro-expertise">{astrologer.expertise}</p>
                    </div>
                  </div>
                  <p className="product-description">{astrologer.about.substring(0, 100)}...</p>
                  <p className="astro-details">
                    <span>Languages: {astrologer.languages}</span>
                    <span>Experience: {astrologer.experience} years</span>
                  </p>
                  <p className="astro-stats">
                    <span>Reviews: {astrologer.reviews}</span>
                    <span>Rating: {'★'.repeat(astrologer.rating)}</span>
                    <span>Plans: {astrologer.plans.length}</span>
                  </p>
                  <p className="product-date">
                    Created: {new Date(astrologer.createdAt).toLocaleDateString()}
                  </p>
                  <div className="status-indicator">
                    Status: <span className={astrologer.isActive ? 'active' : 'inactive'}>
                      {astrologer.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                <div className="product-actions">
                  <button 
                    className="edit-btn"
                    onClick={() => handleEditAstrologer(astrologer)}
                  >
                    Edit
                  </button>
                  <button 
                    className="toggle-btn"
                    onClick={() => handleToggleStatus(astrologer._id)}
                  >
                    {astrologer.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteAstrologer(astrologer._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

```javascript
//This is the correct implementation
import React, { useState } from 'react';

function MyComponent() {
  const [formData, setFormData] = useState({ name: '', address: { street: '', city: '' } });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value 
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      address: { ...prevFormData.address, [name]: value }
    }));
  };

  return (
    <form>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="text" name="street" value={formData.address.street} onChange={handleAddressChange} />
      <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} />
      <p>Name: {formData.name}</p>
      <p>Street: {formData.address.street}</p>
      <p>City: {formData.address.city}</p>
    </form>
  );
}
export default MyComponent;
```
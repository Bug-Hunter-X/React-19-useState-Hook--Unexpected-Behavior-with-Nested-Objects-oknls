```javascript
// This is the buggy code in React 19 that causes unexpected behavior due to the incorrect use of the useState hook.
import React, { useState } from 'react';

function MyComponent() {
  // The state variable is not initialized correctly for nested objects 
  const [formData, setFormData] = useState({ name: '', address: { street: '', city: '' } });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value // This will only update the top-level properties
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      address: { ...prevFormData.address, [name]: value } //This is correct
    }));
  };

  return (
    <form>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="text" name="street" value={formData.address.street} onChange={handleAddressChange} />
      <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} />
    </form>
  );
}
export default MyComponent;
```
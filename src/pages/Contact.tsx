import { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
  }

  
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('Submitting...');
    setTimeout(() => {
      setFormStatus('Thank you for your message. I will get back to you soon!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className=" font-roboto_condensed">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6">If you have any questions or would like to get in touch, please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="block w-full p-2 border border-gray-300 rounded-md h-32"
          ></textarea>
        </div>
        <button type="submit" className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">
          Submit
        </button>
      </form>
      {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
    </section>
  );
};

export default Contact;

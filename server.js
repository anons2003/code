const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://trucltde170267:truc123@cluster0.cm1mh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log('MongoDB connection error:', err));

// MongoDB Schema
const ResponseSchema = new mongoose.Schema({
  responseType: String, // 'yes', 'no', 'location', 'datetime', etc.
  value: mongoose.Schema.Types.Mixed, // Có thể lưu trữ nhiều loại dữ liệu
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Response = mongoose.model('Response', ResponseSchema);

// Middleware
app.use(bodyParser.json());
// Phục vụ các file tĩnh - tương thích với Vercel
app.use(express.static(path.join(__dirname)));

// API endpoint để lưu responses
app.post('/api/save-response', async (req, res) => {
  try {
    const { responseType, value } = req.body;
    
    // Lưu dữ liệu vào MongoDB
    const response = new Response({
      responseType,
      value
    });
    
    await response.save();
    console.log('Data saved to MongoDB Atlas:', { responseType, value });
    
    res.status(200).json({ success: true, message: 'Response saved successfully' });
  } catch (error) {
    console.error('Error saving response:', error);
    res.status(500).json({ success: false, message: 'Error saving response' });
  }
});

// Thêm route mặc định để xử lý các yêu cầu GET
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
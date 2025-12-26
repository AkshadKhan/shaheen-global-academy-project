import Topper from "../model/topper.model.js";




// Create Topper
export const topper =  async (req, res) => {
  try {
    const { name, course, year, marks , totalMarks } = req.body;
    const profilePicture = req.file ? req.file.path : null;
    
    const topper = new Topper({ name, course, year, marks, totalMarks , profilePicture });
    await topper.save();
    
    res.status(201).json({ message: 'Topper created successfully', topper });
  } catch (error) {
    res.status(500).json({ message: 'Error creating topper', error: error.message });
  }
};

// Get All Toppers
export const getToppers =  async (req, res) => {
  try {
    const toppers = await Topper.find().sort({ marks: -1 });
    res.json(toppers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching toppers', error: error.message });
  }
};

// Get Single Topper
export const getTopper = async (req, res) => {
  try {
    const topper = await Topper.findById(req.params.id);
    if (!topper) {
      return res.status(404).json({ message: 'Topper not found' });
    }
    res.json(topper);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching topper', error: error.message });
  }
};

// Update Topper
export const updateTopper =  async (req, res) => {
  try {
    const { name, course, year, marks , totalMarks } = req.body;
    const topper = await Topper.findById(req.params.id);
    
    if (!topper) {
      return res.status(404).json({ message: 'Topper not found' });
    }
    
    // Delete old image if new one is uploaded
    if (req.file && topper.profilePicture) {
      deleteImage(topper.profilePicture);
    }
    
    topper.name = name || topper.name;
    topper.course = course || topper.course;
    topper.year = year || topper.year;
    topper.marks = marks || topper.marks;
    topper.totalMarks = totalMarks || topper.totalMarks;
    if (req.file) topper.profilePicture = req.file.path;
    
    await topper.save();
    res.json({ message: 'Topper updated successfully', topper });
  } catch (error) {
    res.status(500).json({ message: 'Error updating topper', error: error.message });
  }
};

// Delete Topper
export const deleteTopper = async (req, res) => {
  try {
    const topper = await Topper.findById(req.params.id);
    
    if (!topper) {
      return res.status(404).json({ message: 'Topper not found' });
    }
    
    // Delete profile picture if exists
    if (topper.profilePicture) {
      deleteImage(topper.profilePicture);
    }
    
    await Topper.findByIdAndDelete(req.params.id);
    res.json({ message: 'Topper deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting topper', error: error.message });
  }
};



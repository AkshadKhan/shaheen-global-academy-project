import Teacher from "../model/teacher.model.js"
export const teacher = async (req, res) => {
  try {
    const { name, department, designation, email } = req.body;
    const profilePicture = req.file ? req.file.path : null;
    
    const teacher = new Teacher({ name, department, designation, email, profilePicture });
    await teacher.save();
    
    res.status(201).json({ message: 'Teacher created successfully', teacher });
  } catch (error) {
    res.status(500).json({ message: 'Error creating teacher', error: error.message });
  }
};

// Get All Teachers

export const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ name: 1 });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teachers', error: error.message });
  }
};

// Get Single Teacher
export const getTeacher =   async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teacher', error: error.message });
  }
};

// Update Teacher
export const updateTeacher = async (req, res) => {
  try {
    const { name, department, designation, email } = req.body;
    const teacher = await Teacher.findById(req.params.id);
    
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    
    // Delete old image if new one is uploaded
    if (req.file && teacher.profilePicture) {
      deleteImage(teacher.profilePicture);
    }
    
    teacher.name = name || teacher.name;
    teacher.department = department || teacher.department;
    teacher.designation = designation || teacher.designation;
    teacher.email = email || teacher.email;
    if (req.file) teacher.profilePicture = req.file.path;
    
    await teacher.save();
    res.json({ message: 'Teacher updated successfully', teacher });
  } catch (error) {
    res.status(500).json({ message: 'Error updating teacher', error: error.message });
  }
};

// Delete Teacher
export const deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    
    // Delete profile picture if exists
    if (teacher.profilePicture) {
      deleteImage(teacher.profilePicture);
    }
    
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting teacher', error: error.message });
  }
};
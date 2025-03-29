import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { Trash2, Edit, CheckCircle, Circle, Plus } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (values: { title: string; description: string }) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (values: { title: string; description: string }) => {
    if (!editingTask) return;
    setTasks(tasks.map(task =>
      task.id === editingTask.id
        ? { ...task, title: values.title, description: values.description }
        : task
    ));
    setEditingTask(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-900">Task Manager</h1>
        
        <Formik
          initialValues={editingTask || { title: '', description: '' }}
          onSubmit={(values, { resetForm }) => {
            if (editingTask) {
              updateTask(values);
            } else {
              addTask(values);
            }
            resetForm();
          }}
          enableReinitialize
        >
          <Form className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="mb-4">
              <Field
                type="text"
                name="title"
                placeholder="Task title"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <Field
                as="textarea"
                name="description"
                placeholder="Task description"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              {editingTask ? 'Update Task' : 'Add Task'}
            </button>
          </Form>
        </Formik>

        <div className="space-y-4">
          {tasks.map(task => (
            <div
              key={task.id}
              className={`bg-white rounded-lg shadow-md p-6 transition-all ${
                task.completed ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-grow">
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className="mt-1 text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    {task.completed ? (
                      <CheckCircle size={24} />
                    ) : (
                      <Circle size={24} />
                    )}
                  </button>
                  <div className="flex-grow">
                    <h3
                      className={`text-lg font-semibold ${
                        task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                      }`}
                    >
                      {task.title}
                    </h3>
                    <p
                      className={`mt-1 ${
                        task.completed ? 'line-through text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {task.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setEditingTask(task)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {tasks.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No tasks yet. Add your first task above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
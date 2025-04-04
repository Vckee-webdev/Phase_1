import React, { useState } from 'react';
import { Search } from 'lucide-react';
type Recipe = {
  id: number;
  title: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
};

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    imageUrl: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil"],
    instructions: "Roll out dough, spread sauce, add cheese, bake at 450°F for 12-15 minutes, top with basil."
  },
  {
    id: 2,
    title: "Cookies",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&auto=format&fit=crop",
    ingredients: ["Flour", "Butter", "Sugar", "Chocolate chips", "Eggs", "Vanilla extract"],
    instructions: "Mix ingredients, form cookies, bake at 350°F for 10-12 minutes."
  },
  {
    id: 3,
    title: "Fresh Salad",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop",
    ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Red onion", "Olive oil", "Balsamic vinegar"],
    instructions: "Chop vegetables, combine in bowl, dress with oil and vinegar."
  },
  {
    id: 4,
    title: "Madurai Kari Dosa",
    imageUrl: "https://unsplash.com/photos/brown-pie-on-white-ceramic-plate-WU8M2WNBjHc",
    ingredients: ["Dosa batter", "Chicken keema", "Eggs", "Mutton salna", "Onions", "Red chilly"],
    instructions: "Cook spiced mutton kheema, spread dosa batter on a hot tawa, top with kheema and egg, then cook until crispy."
  },
  {
    id: 5,
    title: "Chicken Sindhamani",
    imageUrl: "https://images.unsplash.com/photo-1512621700&auto=format&fi=crop",
    ingredients: ["Finelt chopped chicken breast", "Small onions", "Red chilly"],
    instructions: "Chopped onions, red chillies and chicken boiled together for spicy treat"
  }
];

function App() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Recipe Finder
        </h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search recipes by name or ingredient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
                <p className="text-sm text-gray-600">
                  {recipe.ingredients.length} ingredients
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recipe Details Modal */}
        {selectedRecipe && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedRecipe.title}</h2>
                  <button
                    onClick={() => setSelectedRecipe(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <img
                  src={selectedRecipe.imageUrl}
                  alt={selectedRecipe.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-700">{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
                  <p className="text-gray-700">{selectedRecipe.instructions}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
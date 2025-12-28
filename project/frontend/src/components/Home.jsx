import React, { useState } from 'react'
import ProductList from '../productapi/productapi.jsx'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('medium')
  const [sortBy, setSortBy] = useState('default')

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const query = formData.get('search')
    if (query.trim()) {
      setSearchQuery(query.trim())
    }
  }

  return (
    <div>
      <div className="text-center mb-8 py-8 px-4 bg-gray-50 rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Quick Shop</h1>
        <p className="text-lg text-gray-600 mb-6">Find the best products at amazing prices</p>
        <form onSubmit={handleSearch} className="flex justify-center gap-2 max-w-xl mx-auto">
          <input
            type="text"
            name="search"
            placeholder="Search for products..."
            className="flex-1 p-3 text-base border-2 border-gray-200 rounded-md outline-none focus:border-gray-800 transition-colors"
            defaultValue={searchQuery}
          />
          <button type="submit" className="py-3 px-6 text-base font-semibold bg-gray-800 text-white border-0 rounded-md cursor-pointer hover:bg-gray-700 transition-colors">
            🔍 Search
          </button>
        </form>
      </div>

      {/* Controls Panel */}
      <div className="flex flex-wrap justify-between items-center mb-6 p-4 bg-white rounded-lg shadow-md gap-4">
        <div className="flex items-center gap-3">
          <label className="text-base font-semibold text-gray-800">View:</label>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('large')}
              className={`py-2 px-4 text-base border-2 rounded-md cursor-pointer transition-all font-semibold ${
                viewMode === 'large' 
                  ? 'bg-gray-800 text-white border-gray-800' 
                  : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
              }`}
              title="2 columns with full description"
            >
              ▦▦
            </button>
            <button
              onClick={() => setViewMode('medium')}
              className={`py-2 px-4 text-base border-2 rounded-md cursor-pointer transition-all font-semibold ${
                viewMode === 'medium' 
                  ? 'bg-gray-800 text-white border-gray-800' 
                  : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
              }`}
              title="3 columns with partial description"
            >
              ▦▦▦
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`py-2 px-4 text-base border-2 rounded-md cursor-pointer transition-all font-semibold ${
                viewMode === 'compact' 
                  ? 'bg-gray-800 text-white border-gray-800' 
                  : 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
              }`}
              title="4 columns with no description"
            >
              ▦▦▦▦
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-base font-semibold text-gray-800">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="py-2 px-4 text-base border-2 border-gray-200 rounded-md bg-white cursor-pointer outline-none min-w-[200px] focus:border-gray-800 transition-colors"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating-low">Rating: Low to High</option>
            <option value="rating-high">Rating: High to Low</option>
          </select>
        </div>
      </div>

      <ProductList name={searchQuery} viewMode={viewMode} sortBy={sortBy} />
    </div>
  )
}
// Removed styles object
const styles = {} // Placeholder if needed or just remove entirely via overwrites? 
// Actually I will just end the component here and rely on logic to not use styles.
// But wait, I am replacing lines 18 to 191.
// The file has import ... const styles ... export default Home
// I should remove `const styles` block.
// The ReplacmentContent above ends with `}` of the component.
// I should make sure I consume the rest of the file or at least the styles part.

export default Home

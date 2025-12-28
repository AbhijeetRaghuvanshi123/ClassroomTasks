import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseQuantity, decreaseQuantity } from '../redux/reducers/cartSlice'
import { FaMinus, FaPlus, FaCartPlus, FaStar } from 'react-icons/fa'

const Card = ({ product, viewMode = 'medium' }) => {
  const dispatch = useDispatch()
  const [localQuantity, setLocalQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  
  const handleIncrease = () => setLocalQuantity(prev => prev + 1)
  const handleDecrease = () => setLocalQuantity(prev => Math.max(1, prev - 1))
  
  const handleMainAction = () => {
    if (!isAdding) {
      setIsAdding(true)
    } else {
      dispatch(addToCart({ ...product, quantity: localQuantity }))
      setLocalQuantity(1)
      setIsAdding(false)
    }
  }

  const showFullDescription = viewMode === 'large'
  const showPartialDescription = viewMode === 'medium'
  const showNoDescription = viewMode === 'compact'

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col h-full hover:-translate-y-1">
      <div className={`w-full overflow-hidden bg-gray-100 ${viewMode === 'compact' ? 'h-[150px]' : 'h-[200px]'}`}>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className={`font-semibold text-gray-800 mb-2 overflow-hidden text-ellipsis whitespace-nowrap ${viewMode === 'compact' ? 'text-sm' : 'text-lg'}`}>
          {product.title}
        </h3>
        {showFullDescription && (
          <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">{product.description}</p>
        )}
        {showPartialDescription && (
          <p className="text-sm text-gray-600 mb-4 overflow-hidden text-ellipsis line-clamp-2 leading-relaxed flex-1">{product.description}</p>
        )}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-gray-800 ${viewMode === 'compact' ? 'text-lg' : 'text-xl'}`}>
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-white bg-red-500 px-2 py-1 rounded font-semibold">-{product.discountPercentage}%</span>
            )}
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            <FaStar className="text-yellow-400 mr-1" /> {product.rating}
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          {isAdding && (
            <div className="flex items-center justify-between w-full bg-gray-100 p-2 rounded border border-gray-200">
              <button 
                onClick={handleDecrease}
                className="w-8 h-8 flex items-center justify-center bg-white border-0 rounded cursor-pointer text-gray-800 hover:scale-105 active:scale-95 transition-transform shadow-sm"
              >
                <FaMinus size={10} />
              </button>
              <span className="text-lg font-semibold text-gray-800 min-w-[20px] text-center">{localQuantity}</span>
              <button 
                onClick={handleIncrease}
                className="w-8 h-8 flex items-center justify-center bg-white border-0 rounded cursor-pointer text-gray-800 hover:scale-105 active:scale-95 transition-transform shadow-sm"
              >
                <FaPlus size={10} />
              </button>
            </div>
          )}
          <button 
            onClick={handleMainAction}
            className={`bg-gray-800 text-white border-0 rounded font-semibold cursor-pointer transition-colors w-full hover:bg-gray-700 ${viewMode === 'compact' ? 'p-2 text-sm' : 'p-3 text-base'}`}
          >
            {isAdding ? 'Confirm Add' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
